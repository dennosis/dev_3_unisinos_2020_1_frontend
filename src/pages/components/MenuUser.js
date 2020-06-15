import React, { Component } from 'react';
import Img from './Img';
import ImageCar from '../../images/1299198-snow_004.png';
import Title from './Title';

const rentalTemplate = {
    gridTemplateColumns: '5fr 1fr',
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
                        <div style={rentalTemplate} className="grid grid-gap--2xl">
                            <Title tag="h3" text="Chevrolet Chevette" />
                            <Title tag="h3" text="1975" />
                        </div>
                    </div>
                </a>

                <div className="border-top--2 border-color--base-40"></div>

                <a href="/ConfirmRent">
                    <div className="margin--m">
                        <Img width={this.state.width} mode={1} addClassName="border-radius--xs" src={ImageCar} />
                        <div style={rentalTemplate} className="grid grid-gap--2xl">
                            <Title tag="h3" text="Fiat Mobi" />
                            <Title tag="h3" text="2019" />
                        </div>
                    </div>
                </a>

            </section>
        );
    }
}

export default MenuUser