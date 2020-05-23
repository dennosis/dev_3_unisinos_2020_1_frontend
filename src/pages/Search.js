import React, { Component } from 'react';

import {AiFillCar} from 'react-icons/ai';
import {FaRegSnowflake} from 'react-icons/fa';
import {MdBusinessCenter} from 'react-icons/md';
import {MdPeople} from 'react-icons/md';

import api from '../Api'

import Layout from './components/Layout';

import Container from './components/Container';
import Input from './components/Input';
import Button from './components/Button';
import Title from './components/Title';
import Img from './components/Img';
import Toggle from './components/Toggle';

const templateColumns = {
	gridTemplateColumns: '5fr 2fr'
};

const templateColumnsInternalDivCar = {
	gridTemplateColumns: '2fr 1fr 1fr'
};

const templateRowsButtonAndPrice = {
	gridTemplateRows: '3fr 2fr'
};

const icon = {
	fill: '#FFF',
	width: '20px',
	height: '20px'
}

const marginDivCar = {
	marginBottom: '10px'
}

class Search extends Component {
	constructor(props) {
		super(props)
		this.state = {
			inputs: [],
			width: "318px"
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
		return (
      <Layout>
        <div style={templateColumns} className="grid grid-gap--2xl">
          <Container>
            <div style={marginDivCar}>
              <Container>
                <div
                  style={templateColumnsInternalDivCar}
                  className="grid grid-gap--2xl border-radius--xs margin--g"
                >
                  <Img
                    width={this.state.width}
                    mode={1}
                    src="https://ichef.bbci.co.uk/news/410/cpsprodpb/16CE8/production/_109061439_hi018470968.jpg"
                  />
                  <div className="grid grid-template-rows--2fr grid-gap--2xl">
                    <Title tag="h2" text="Chevrolet Prisma " />
                    <div className="grid grid-template-columns--2fr">
                      <div className="grid grid-template-columns--2fr">
                        <FaRegSnowflake style={icon} />
                        <h3>10</h3>
                      </div>
                      <div className="grid grid-template-columns--2fr">
                        <AiFillCar style={icon} />
                        <h3>10</h3>
                      </div>
                      <div className="grid grid-template-columns--2fr">
                        <MdBusinessCenter style={icon} />
                        <h3>10</h3>
                      </div>
                      <div className="grid grid-template-columns--2fr">
                        <MdPeople style={icon} />
                        <h3>10</h3>
                      </div>
                    </div>
                  </div>
                  <div
                    style={templateRowsButtonAndPrice}
                    className="grid grid-gap--3x1"
                  >
                    <Title tag="h2" text="R$ 75,00" />
                    <Button
                      text={'Alugar'}
                      addClassName="gradient-color--base-60 margin--m"
                    />
                  </div>
                </div>
              </Container>
            </div>

            <div style={marginDivCar}>
              <Container>
                <div
                  style={templateColumnsInternalDivCar}
                  className="grid grid-gap--2xl border-radius--xs margin--m"
                >
                  <Img
                    width={this.state.width}
                    mode={1}
                    src="https://ichef.bbci.co.uk/news/410/cpsprodpb/16CE8/production/_109061439_hi018470968.jpg"
                  />
                  <div className="grid grid-template-rows--2fr grid-gap--2xl">
                    <Title tag="h2" text="Chevrolet Prisma " />
                    <div className="grid grid-template-columns--2fr">
                      <div className="grid grid-template-columns--2fr">
                        <FaRegSnowflake style={icon} />
                        <h3>10</h3>
                      </div>
                      <div className="grid grid-template-columns--2fr">
                        <AiFillCar style={icon} />
                        <h3>10</h3>
                      </div>
                      <div className="grid grid-template-columns--2fr">
                        <MdBusinessCenter style={icon} />
                        <h3>10</h3>
                      </div>
                      <div className="grid grid-template-columns--2fr">
                        <MdPeople style={icon} />
                        <h3>10</h3>
                      </div>
                    </div>
                  </div>
                  <div
                    style={templateRowsButtonAndPrice}
                    className="grid grid-gap--3x1"
                  >
                    <Title tag="h2" text="R$ 75,00" />
                    <Button
                      text={'Alugar'}
                      addClassName="gradient-color--base-60 margin--m"
                    />
                  </div>
                </div>
              </Container>
            </div>
            <div style={marginDivCar}>
              <Container>
                <div
                  style={templateColumnsInternalDivCar}
                  className="grid grid-gap--2xl border-radius--xs margin--m"
                >
                  <Img
                    width={this.state.width}
                    mode={1}
                    src="https://ichef.bbci.co.uk/news/410/cpsprodpb/16CE8/production/_109061439_hi018470968.jpg"
                  />
                  <div className="grid grid-template-rows--2fr grid-gap--2xl">
                    <Title tag="h2" text="Chevrolet Prisma " />
                    <div className="grid grid-template-columns--2fr">
                      <div className="grid grid-template-columns--2fr">
                        <FaRegSnowflake style={icon} />
                        <h3>10</h3>
                      </div>
                      <div className="grid grid-template-columns--2fr">
                        <AiFillCar style={icon} />
                        <h3>10</h3>
                      </div>
                      <div className="grid grid-template-columns--2fr">
                        <MdBusinessCenter style={icon} />
                        <h3>10</h3>
                      </div>
                      <div className="grid grid-template-columns--2fr">
                        <MdPeople style={icon} />
                        <h3>10</h3>
                      </div>
                    </div>
                  </div>
                  <div
                    style={templateRowsButtonAndPrice}
                    className="grid grid-gap--3x1"
                  >
                    <Title tag="h2" text="R$ 75,00" />
                    <Button
                      text={'Alugar'}
                      addClassName="gradient-color--base-60 margin--m"
                    />
                  </div>
                </div>
              </Container>
            </div>
          </Container>

          <div
            style={{maxHeight: '414px'}}
            className="grid grid-template-rows--2fr grid-gap--2xl"
          >
            <Container>
              <div className="grid grid-gap--xs">
                <Input placeholder="Data de Retirada" />
                <Input placeholder="Data de Entrega" />
                <div className="border-top--2 border-color--base-40"></div>

                <Input placeholder="Localização de Retirada" />
                <Input placeholder="Localização de Entrega" />
                <Toggle
                  text={'Entrega em Outra Localização'}
                  onChange={(value) => this.testToggle(value)}
                />
                <div className="border-top--2 border-color--base-40"></div>

                <Toggle
                  text={'Veículos para Aplicativos'}
                  onChange={(value) => this.testToggle(value)}
                />
                <div className="border-top--2 border-color--base-40"></div>

                <div className="grid grid-template-columns--2fr grid-gap--2xl">
                  <Button
                    text={'Pesquisar'}
                    addClassName="gradient-color--black"
                  />
                  <Button
                    text={'Limpar filtros'}
                    addClassName="gradient-color--black"
                  />
                </div>
              </div>
            </Container>
          </div>
        </div>
      </Layout>
    );
  	}
}

export default Search;