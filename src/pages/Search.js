import React, { Component } from 'react';
import queryString from 'query-string'

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

	search = (values) => {

		const dateValidate = this.validateDate(values.datePickup, values.dateDelivery)
		
		values.datePickup = dateValidate.dateInit
		values.dateDelivery = dateValidate.dateEnd


		this.setState({ cars:[
			{	
				id:54545454,
				image: "https://upload.wikimedia.org/wikipedia/pt/thumb/2/2e/Chevette_1985.png/300px-Chevette_1985.png",
				description:"is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
				brand:"chevrolet",
				model:"chevette",
				board:"BEE4R22",
				modelYear:"1975",
				currentRentalCompany:{
					id:6554654,
					name:"Locadora do Adão"
				}, 
				manufactureYear:"1975",
				cost:"40.70",
				luggages:5,
				apps:["Uber","Pop","Taxi"],
				airConditioner:true,
				passengers:5,
				airBag:true,
				abs:true,
				kilometrage:12100,
			}
		] })


		/*
		api.search(values)
			.then(
				res => {
					//console.log(res.data)
					this.setState({ 
						cars: res.data || [],
						days: dateValidate.days
					})
				},
				error => {
					console.log({ type: "error", content: "Erro ao buscar dados" })
				}
			)
		*/

		const stringified = queryString.stringify(values);
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


	onSubmit=(filter)=>{
		this.search(filter)
	}
	
	onRent=(carId, rentalCompany)=>{

		const data = {
			rentalCompanyPickupId:rentalCompany,
			rentalCompanyDeliveryId: this.state.filter.rentalCompanyDelivery ? this.state.filter.rentalCompanyDelivery : rentalCompany,
			carId,
			datePickup:this.state.filter.datePickup,
			dateDelivery:this.state.filter.dateDelivery
		}
		console.log(data)
		
		api.rent(data)
			.then(
				res => {
					this.props.history.push(`/rent/${res.data.id}/paymentmethods`)
				},
				error => {
					this.setState({ 
						alert: {type:"error", content:"Erro ao Iniciar a Reserva"},
					})
				}
			)
			
	}


	render(){
		return (
			<Layout alert={this.state.alert} >

				<div style={templateColumns} className="grid grid-gap--l">
					
					<Container className="grid grid-gap--m margin-bottom--auto">
						{this.state.cars.map((value, index) => {
							return  <Car key={index} onRent={this.onRent} days={this.state.days} {...value }/>
						})}
					</Container>

					<FormFilter values={this.state.filter} onSubmit={(value)=>this.onSubmit(value)} notEmptyValues />

				</div>

			</Layout>
		);
	}
}

export default Search;