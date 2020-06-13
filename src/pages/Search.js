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

		let filter = queryString.parse(this.props.location.search)
		if(!filter.datePickup){
			const dateInit = new Date()
			const dateEnd = new Date()
			dateEnd.setDate(dateInit.getDate()+1)
			filter["datePickup"] = dateInit.toISOString().substring(0, 10)
			filter["dateDelivery"] = dateEnd.toISOString().substring(0, 10)
		}
		this.state = {
			filter,
			cars:[]
		}
	}

	search = (value) => {




		this.setState({ cars:[
			{	
				id:54545454,
				image: "https://upload.wikimedia.org/wikipedia/pt/thumb/2/2e/Chevette_1985.png/300px-Chevette_1985.png",
				description:"is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
				brand:"chevrolet",
				model:"chevette",
				board:"BEE4R22",
				modelYear:"1975",
				rentalCompany:{
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

				days:8
			}
		] })


		/*
		api.search(value)
			.then(
				res => {
					//console.log(res.data)
					this.setState({ cars: res.data || [] })
				},
				error => {
					console.log({ type: "error", content: "Erro ao buscar dados" })
				}
			)
		*/
		const stringified = queryString.stringify(value);
		this.props.history.replace(`/search?${stringified}`);
	}



	async componentWillMount(){
		await this.search(this.state.filter)
	}


	onSubmit=(value)=>{
		this.search(value)
	}


	render(){
		return (
			<Layout>

				<div style={templateColumns} className="grid grid-gap--l">
					
					<Container className="grid grid-gap--m margin-bottom--auto">
						{this.state.cars.map((value, index) => {
							return  <Car key={index} {...value}/>
						})}
					</Container>

					<FormFilter values={this.state.filter} onSubmit={(value)=>this.onSubmit(value)} notEmptyValues />

				</div>

			</Layout>
		);
	}
}

export default Search;