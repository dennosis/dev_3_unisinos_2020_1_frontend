import React, { Component } from 'react';

import api from '../Api'

import Layout from './components/Layout';

import Container from './components/Container';
import Input from './components/Input';
import Button from './components/Button';
import Toggle from './components/Toggle';
import Title from './components/Title';
import Img from './components/Img';




class Exemples extends Component {
	constructor(props){
        super(props)
        this.state = {
			inputs:[],
			width:"200px"        
		}
    }
	

	setData = () =>{
		api.test()
			.then(
				res=>{
					console.log(res.data)
					this.setState({ inputs:res.data })
				},
				error=>{
					console.log({type:"error", content: "Erro ao buscar dados"})
				}
			)
	}

	testToggle = (test) => {
		let width;
		if(test){
			width = "100px"
		}else{
			width = "300px"
		}

		this.setState({
			width:width
		})
	}

  render(){
      	return(
			<Layout>
				<Title text="Exemplos"/>
				
				<div className="grid grid-template-columns--2fr grid-gap--2xl">	
					<Container >
						<Title tag="h2" text="Sub Titulo"/>
						<p className="padding--s">
							Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also th
						</p>
						<p className="padding--s">
							Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also th
						</p>

							<Img width={this.state.width} mode={1} addClassName="border-radius--xs margin--m" src="https://ichef.bbci.co.uk/news/410/cpsprodpb/16CE8/production/_109061439_hi018470968.jpg"/>

						<div className="grid grid-gap--xs">	
							<Input value={"teste"}/>
							<Input  value={"teste2"}/>
							<Input  value={this.state.inputs[0] || ""}/>
							<Input value={ this.state.inputs[1] || ""} />
							<Input value={ this.state.inputs[2] || ""} />
							<Button text={"click"} onClick={()=>this.setData()} />
							<Button text={"button2"}/>
						</div>
					</Container>

					<Container>
						<div className="grid grid-gap--xs">	
							<Input/>
							<Input/>
							<Input/>
							<Input/>
							<Input/>
							<Toggle text={"teste"} onChange={(value)=>this.testToggle(value)} />
							<Button text={"black"} addClassName="gradient-color--black"/>

							<Button text={"amarelo"} addClassName="gradient-color--base-50"/>
							<Button text={"verde"} addClassName="gradient-color--base-60"/>
							<Button text={"azul"} addClassName="gradient-color--base-70"/>
							<Button text={"vermelho"} addClassName="gradient-color--base-80"/>

						</div>
					</Container>
				</div>

			</Layout>
      	)
  	}
}

export default Exemples;