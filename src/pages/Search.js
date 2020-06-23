import React, { Component } from 'react';
import queryString from 'query-string'
import Loader from 'react-loader-spinner'

import api from '../Api'

import Layout from './components/Layout';

import Container from './components/Container';


import Car from './components/Car';
import FormFilter from './components/FormFilter';


const templateColumns = {
	gridTemplateColumns: '5fr 2fr'
};

class Search extends Component {
	constructor(props) {
		super(props)

		const filter = queryString.parse(this.props.location.search)
		const dateValidate = this.validateDate(filter.datePickup, filter.dateDelivery)
		
		filter.datePickup = dateValidate.dateInit
		filter.dateDelivery = dateValidate.dateEnd

		this.state = {
			filter,
			cars:[],
			days:dateValidate.days,
			alert:{}
		}
	}

	search = async (values) => {

		await this.setState({
			alert: {},
			loader:true
		})

		const dateValidate = this.validateDate(values.datePickup, values.dateDelivery)
		
		values.datePickup = dateValidate.dateInit
		values.dateDelivery = dateValidate.dateEnd

		const stringified = queryString.stringify(values);

		if(values.manufactureYear)
			values.manufactureYear =  {equals: values.manufactureYear}
			
		if(values.modelYear)
			values.modelYear =  {equals: values.modelYear}

		if(values.cost)
			values.cost =  {to: values.cost}

		if(values.passengers)
			values.passengers =  {from: values.passengers}
		
		if(values.kilometrage)
			values.kilometrage =  {to: values.kilometrage}


		await api.findCars(values)
			.then(
				res => {
					//console.log(res.data)
					this.setState({ 
						cars: res.data.cars || [],
						days: dateValidate.days,
						loader:false

					})
				},
				error => {
					this.setState({
						alert: { type: "error", content: "Erro ao buscar dados" },
						loader:false

					})
				}
			)


			
		this.props.history.replace(`/search?${stringified}`);
	}

	validateDate(dateInit, dateEnd){

		let datePickup = new Date(dateInit)
		let dateDelivery = new Date(dateEnd)

		datePickup =  this.isValidDate(datePickup) ? datePickup : new Date()
		dateDelivery =  this.isValidDate(dateDelivery) ? dateDelivery : new Date()

		if(datePickup.getTime() < (new Date()).getTime()){
			datePickup = new Date()
		}

		if(dateDelivery.getTime() <= datePickup.getTime()){
			dateDelivery = new Date()
			dateDelivery.setDate(datePickup.getDate()+1)
		}

		return {
			dateInit: datePickup.toISOString().substring(0, 10),
			dateEnd: dateDelivery.toISOString().substring(0, 10),
			days: Math.ceil(Math.abs(datePickup - dateDelivery) / (1000 * 60 * 60 * 24))
		}
		
	}

	isValidDate(date) {
		return date instanceof Date && !isNaN(date);
	}

	async componentWillMount(){
		await this.search(this.state.filter)
	}


	onSubmit= async (filter)=>{
		await this.search(filter)
	}
	
	onRent=(carId, rentalCompany)=>{

		const data = {
			rentalCompanyPickupId:rentalCompany,
			rentalCompanyDeliveryId: this.state.filter.rentalCompanyDelivery ? this.state.filter.rentalCompanyDelivery : rentalCompany,
			carId,
			datePickup:this.state.filter.datePickup,
			dateDelivery:this.state.filter.dateDelivery
		}
		
		api.storeRent(data)
			.then(
				res => {
					this.props.history.push(`/rent/${res.data.id}/paymentmethods`)
				},
				error => {
					let alert
					if(error.response.status === 401){
						alert = {type:"info", content:"Necessário logar-se ao sistema"}
					}else{
						alert = {type:"error", content:"Erro ao Iniciar a Reserva"}
					}
					this.setState({ 
						alert
					})
				}
			)
			
	}


	render(){
		return (
			<Layout alert={this.state.alert} >

				<div style={templateColumns} className="grid grid-gap--l position--relative">

					{	
						this.state.loader &&
						<div  style={{background: 'rgba(0,0,0, 0.2)'}} className="position--absolute width--100 height--100 flex align-items--center justify-content--center border-radius--s">
     							<Loader type="Puff" color="#b7bfcc" height={100} width={100} />
						</div>
					}

					{
						this.state.cars.length > 0 &&
						<Container className="grid grid-gap--m margin-bottom--auto">
							{this.state.cars.map((value, index) => {
								return  <Car key={index} onRent={this.onRent} days={this.state.days} {...value }/>
							})}
						</Container>
					}
					{
						this.state.cars.length === 0 &&
						<Container className=" margin-bottom--auto">
							<span className="font-size--4xl ">
								Sua busca não obteve resultados
							</span>
						</Container>
					}

					<FormFilter values={this.state.filter} onSubmit={(value)=>this.onSubmit(value)} notEmptyValues />

				</div>

			</Layout>
		);
	}
}

export default Search;