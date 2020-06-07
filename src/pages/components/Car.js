import React, { Component } from 'react';

import {AiFillCar} from 'react-icons/ai';
import {FaRegSnowflake} from 'react-icons/fa';
import {MdBusinessCenter} from 'react-icons/md';
import {MdPeople} from 'react-icons/md';


import Container from './Container';
import Button from './Button';
import Title from './Title';
import Img from './Img';


const templateColumnsInternalDivCar = {
	gridTemplateColumns: '2fr 1fr 1fr'
};

const templateRowsButtonAndPrice = {
	gridTemplateRows: '1fr min-content'
};

const icon = {
	fill: '#FFF',
	width: '20px',
	height: '20px'
}

class Car extends Component {

	constructor(props) {
        super(props)
        console.log(props)
		this.state = {
        }
    }
    
    render(){
		return (

            <Container style={templateColumnsInternalDivCar} className="grid grid-gap--2xl border-radius--xs" >
                    
                    <Img width={150} height={150}  mode={1} src="https://ichef.bbci.co.uk/news/410/cpsprodpb/16CE8/production/_109061439_hi018470968.jpg" />
                    
                    <div className="flex flex--column">

                        {   
                            this.props.model &&

                            <Title tag="h2" text={`${this.props.model.name} ${this.props.model.brand.name}`} />
                        }

                        <div className="grid grid-template-columns--2fr grid-gap--s">
                            { 
                                this.props.airConditioner &&

                                <div className="grid grid-template-columns--2fr">
                                    <FaRegSnowflake style={icon} />
                                    <h3>AC</h3>
                                </div>
                            }
                            { 
                                this.props.manufactureYear &&

                                <div className="grid grid-template-columns--2fr">
                                    <AiFillCar style={icon} />
                                    <h3>{this.props.manufactureYear}</h3>
                                </div>
                            }
                            { 
                                this.props.luggages &&

                                <div className="grid grid-template-columns--2fr">
                                    <MdBusinessCenter style={icon} />
                                    <h3>{this.props.luggages}</h3>
                                </div>
                            }
                            { 
                                this.props.passengers &&

                                <div className="grid grid-template-columns--2fr">
                                    <MdPeople style={icon} />
                                    <h3>{this.props.passengers}</h3>
                                </div>
                            }
                        </div>
                    </div>
                    <div style={templateRowsButtonAndPrice} className="grid">
                        <Title tag="h3" text={`R$ ${this.props.cost}`} />
                        <Button text={'Alugar'} addClassName="gradient-color--base-60"/>
                    </div>

            </Container>
        );
  	}
}

export default Car;