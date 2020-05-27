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
		this.state = {
			filter: queryString.parse(this.props.location.search) || false ,
			cars:[]
		}
	}

	search = (value) => {
		api.search(value)
			.then(
				res => {
					console.log(res.data)
					this.setState({ cars: res.data })
				},
				error => {
					console.log({ type: "error", content: "Erro ao buscar dados" })
				}
			)
			const stringified = queryString.stringify(value);
			this.props.history.replace(`/search?${stringified}`);
	}



	componentDidMount(){
		this.search(this.state.filter)
	}


	onSubmit=(value)=>{
		this.search(value)
	}


	render(){
		return (
			<Layout>

				<div style={templateColumns} className="grid grid-gap--l">
					
					<Container className="grid grid-gap--m">
						{this.state.cars.map((value, index) => {
							return  <Car key={index} {...value}/>
						})}
						
						<Car/>
						<Car/>
						<Car/>
					</Container>

					<FormFilter values={this.state.filter} onSubmit={(value)=>this.onSubmit(value)} />

				</div>

			</Layout>
		);
	}
}

export default Search;