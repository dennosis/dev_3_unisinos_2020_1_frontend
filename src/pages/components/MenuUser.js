import React, { Component } from 'react';
import Img from './Img';
import ImageCar from '../../images/1299198-snow_004.png';
import Title from './Title';

const rentalTemplate = {
    marginBottom: '10px'
};

const scroll = {
    overflow: 'scroll'
}

class MenuUser extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <section style={scroll} className="l-menu-user position--fixed right--0 top--0 height--100 flex flex--column padding--m padding-right--2xl padding-left--2xl background-color--base-10">
                <div className="flex justify-content--center">
                    <Title tag="h2" text="Suas Reservas" />
                </div>

                <div className="border-top--2 border-color--base-40"></div>

                <a href="/ConfirmRent">
                    <div className="margin--m">
                        <Img width={this.state.width} mode={1} addClassName="border-radius--xs" src={ImageCar} />
                        <div style={rentalTemplate} className="flex justify-content--center">
                            <p>Chevrolet Chevette - 1975</p>
                        </div>
                        <div style={rentalTemplate} className="flex justify-content--center">
                            <div className="grid grid-template-columns--2fr grid-gap--2xl">
                                <p>Retirada:</p>
                                <p>12/05/2020</p>
                            </div>
                        </div>
                        <div style={rentalTemplate} className="flex justify-content--center">
                            <div className="grid grid-template-columns--2fr grid-gap--2xl">
                                <p>Entrega:</p>
                                <p>15/05/2020</p>
                            </div>
                        </div>
                    </div>
                </a>

                <div className="border-top--2 border-color--base-40"></div>

                <a href="/ConfirmRent">
                    <div className="margin--m">
                        <Img width={this.state.width} mode={1} addClassName="border-radius--xs" src={ImageCar} />
                        <div style={rentalTemplate} className="flex justify-content--center">
                            <p>Fiat Mobi - 2019</p>
                        </div>
                        <div style={rentalTemplate} className="flex justify-content--center">
                            <div className="grid grid-template-columns--2fr grid-gap--2xl">
                                <p>Retirada:</p>
                                <p>03/06/2020</p>
                            </div>
                        </div>
                        <div style={rentalTemplate} className="flex justify-content--center">
                            <div className="grid grid-template-columns--2fr grid-gap--2xl">
                                <p>Entrega:</p>
                                <p>05/06/2020</p>
                            </div>
                        </div>
                    </div>
                </a>

            </section>
        );
    }
}

export default MenuUser