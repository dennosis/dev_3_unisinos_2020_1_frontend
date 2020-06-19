import React, { Component } from 'react';
import api from '../../Api'

import Img from './Img';
import Title from './Title';

class ListCarItem extends Component {

    constructor(props) {
        super(props);
        this.state = {
            car:{},
            rent:this.props.rent
        }
    }

    componentWillMount() {
        api.getCarById(this.state.rent.carId).then(
            res => {
                this.setState({
                    car:res.data
                })
            },
            error => {}
        )

    }

    render() {

        const dateDelivery = new Date(this.state.rent.dateDelivery)
        const datePickup = new Date(this.state.rent.datePickup)

        return (
            <a href={`/rent/${this.state.rent.id}`} className="padding--m">
                <Img mode={1} addClassName="border-radius--xs margin-bottom--l" src={this.state.car.image} />

                <Title tag="h4" text={`${this.state.car.brand} ${this.state.car.model} ${this.state.car.modelYear}`} />

                <div className="font--xs grid grid-template-columns--2fr grid-gap-row--2xs grid-gap-column--xl padding--2xs">
                    <span>Retirada:</span>
                    <span className="font--bold">{`${datePickup.getDate()}/${datePickup.getMonth()}/${datePickup.getFullYear()}`}</span>

                    <span>Entrega:</span>
                    <span className="font--bold">{`${dateDelivery.getDate()}/${dateDelivery.getMonth()}/${dateDelivery.getFullYear()}`}</span>

                </div>
            </a>
        );
    }
}

export default ListCarItem