import React, { Component } from 'react';
import Layout from './components/Layout';

import Container from './components/Container';
import Input from './components/Input';
import Button from './components/Button';
import Title from './components/Title';
import Img from './components/Img';



class Exemples extends Component {
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

							<Img width="200px" addClassName="border-radius--xs margin--m" src="https://ichef.bbci.co.uk/news/410/cpsprodpb/16CE8/production/_109061439_hi018470968.jpg"/>


						<div className="grid grid-gap--xs">	
							<Input value={"teste"}/>
							<Input  value={"teste2"}/>
							<Input/>
							<Input/>
							<Input/>
							<Button text={"button"}/>
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
							<Button text={"button3"}/>
						</div>
					</Container>
				</div>

			</Layout>
      	)
  	}
}

export default Exemples;