import React, { Component } from 'react';

import {AiFillCar} from 'react-icons/ai';
import {FaRegSnowflake} from 'react-icons/fa';
import {MdBusinessCenter} from 'react-icons/md';
import {MdPeople} from 'react-icons/md';
import {GiCartwheel} from 'react-icons/gi';
import {GoLocation} from 'react-icons/go';



import Container from './Container';
import Button from './Button';
import Title from './Title';
import Img from './Img';


const templateColumnsInternalDivCar = {
	gridTemplateColumns: 'min-content 1fr 180px'
};

const icon = {
	fill: '#FFF',
	width: '18px',
	height: '18px'
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

            <Container style={templateColumnsInternalDivCar} className="grid align-items--center border-radius--xs" >
                    
                    <Img width={180} height={110}  mode={3} src={`${this.props.image}`} addClassName="border-radius--xs" />
                    
                    <div className="flex flex--column margin-left--l">

                        <h2 className="font-size--3xl flex flex--column padding-bottom--s">
                            <span>{`${this.props.brand} ${this.props.model} ${this.props.modelYear}`}</span>
                            {
                                this.props.currentRentalCompany &&
                                <div className="grid grid--row grid-gap--3xs align-items--center margin-right--auto margin-top--3xs color--base-30">
                                    <GoLocation style={{ width: '12px', height: '12px' }} />
                                    <small className="font-size--s font--regular flex align-items--center ">
                                        {this.props.currentRentalCompany.name}
                                    </small>
                                </div>
                            }

                        </h2>
                        
                        <div className="grid grid--row grid-gap--xs margin-right--auto">
                            { 
                                this.props.airConditioner &&

                                <div className="grid grid--row grid-gap--3xs align-items--center">
                                    <FaRegSnowflake style={icon} />
                                    <small className="font--bold">AC</small>
                                </div>
                            }
                            { 
                                this.props.manufactureYear &&

                                <div className="grid grid--row grid-gap--3xs align-items--center">
                                    <AiFillCar style={icon} />
                                    <small className="font--bold">{this.props.manufactureYear}</small>
                                </div>
                            }
                            { 
                                this.props.luggages &&

                                <div className="grid grid--row grid-gap--3xs align-items--center">
                                    <MdBusinessCenter style={icon} />
                                    <small className="font--bold">{this.props.luggages}</small>
                                </div>
                            }
                            { 
                                this.props.passengers &&

                                <div className="grid grid--row grid-gap--3xs align-items--center">
                                    <MdPeople style={icon} />
                                    <small className="font--bold">{this.props.passengers}</small>
                                </div>
                            }
                            {
                                this.props.abs &&

                                <div className="grid grid--row grid-gap--3xs align-items--center">
                                    <GiCartwheel style={icon} />
                                <small className="font--bold">ABS</small>
                            </div>
                            }


                        </div>


                        <div className="grid grid--row grid-gap--xs margin-right--auto margin-top--2xs">
                            { 
                                    this.props.apps &&
                                    this.props.apps.map((app,key)=>(<small key={key} className="color--base-30">{app}</small>))

                            }
                        </div>

                    </div>

                    <div className="flex flex--column align-items--center">
                        <span className="font-size--s color--base-30 margin-bottom--3xs">{`R$ ${this.props.cost}/dia`}</span>
                        <span className="font-size--3xl font--bold margin-bottom--xs">{`R$ ${this.props.cost * this.props.days }`}</span>
                        <Button text={'Alugar'} onClick={()=>this.props.onRent(this.props.id, this.props.currentRentalCompany.id)} addClassName="gradient-color--base-60 align-self--stretch"/>
                    </div>

            </Container>
        );
  	}
}

export default Car;