import React, { Component } from 'react';

import api from '../Api'

import Layout from './components/Layout';

import Container from './components/Container';
import Input from './components/Input';
import Button from './components/Button';
import Title from './components/Title';
import Img from './components/Img';
import Toggle from './components/Toggle';

const templateColumns = {
	gridTemplateColumns: '2fr 1fr'
};

class Search extends Component {
	constructor(props) {
		super(props)
		this.state = {
			inputs: [],
			width: "200px"
		}
	}


	setData = () => {
		api.test()
			.then(
				res => {
					console.log(res.data)
					this.setState({ inputs: res.data })
				},
				error => {
					console.log({ type: "error", content: "Erro ao buscar dados" })
				}
			)
	}

	testToggle = (test) => {
		let width;
		if (test) {
			width = "100px"
		} else {
			width = "300px"
		}

		this.setState({
			width: width
		})
	}

    render(){
		return(
			<Layout>
				<div style={templateColumns} className="grid grid-gap--2xl">
					<Container>
						<Title tag="h2" text="Sub Titulo" />
						<p className="padding--s">
							Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also th
						</p>
						<p className="padding--s">
							Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also th
						</p>

						<Img width={this.state.width} mode={1} addClassName="border-radius--xs margin--m" src="https://ichef.bbci.co.uk/news/410/cpsprodpb/16CE8/production/_109061439_hi018470968.jpg" />

						<div className="grid grid-gap--xs">
							<Input value={"teste"} />
							<Input value={"teste2"} />
							<Input value={this.state.inputs[0] || ""} />
							<Input value={this.state.inputs[1] || ""} />
							<Input value={this.state.inputs[2] || ""} />
							<Button text={"click"} onClick={() => this.setData()} />
							<Button text={"button2"} />
						</div>
					</Container>

					<div className="grid grid-template-rows--2fr grid-gap--2xl">
						<Container>
							<div className="grid grid-gap--xs">
								<Input placeholder="Data de Retirada" />
								<Input placeholder="Data de Entrega" />
								<div className="border-top--2 border-color--base-40"></div>
								
								<Input placeholder="Localização de Retirada" />
								<Input placeholder="Localização de Entrega" />
								<Toggle text={"Entrega em Outra Localização"} onChange={(value) => this.testToggle(value)} />
								<div className="border-top--2 border-color--base-40"></div>
								
								<Toggle text={"Veículos para Aplicativos"} onChange={(value) => this.testToggle(value)} />
								<div className="border-top--2 border-color--base-40"></div>

								<div className="grid grid-template-columns--2fr grid-gap--2xl">
									<Button text={"Pesquisar"} addClassName="gradient-color--black" />
									<Button text={"Limpar filtros"} addClassName="gradient-color--black" />
								</div>

							</div>
						</Container>
					</div>

				</div>

			</Layout>
		)
  	}
}

export default Search;