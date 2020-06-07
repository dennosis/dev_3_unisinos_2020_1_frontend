import React, { Component } from 'react';
import api from '../Api'

import Layout from './components/Layout';
import Img from './components/Img';
import Title from './components/Title';
import ImageBankSlip from '../images/BankSlip.png';
import ImageCreditCard from '../images/CreditCard.png';

const componentsPaymentMethods = {
    position: 'relative',
    left: '25%',
    right: '25%',
    top: '25%',
    height: '25%',
    width: '25%',
    marginBottom: '35px'
}

const templateCreditCardNumber = {
    gridTemplateColumns: '1fr 19fr 1fr'
};


class PaymentMethods extends Component {

    constructor(props) {
        super(props);
        this.state = {
            values: {},
            errors: {}
        };
    }

    render() {
        return (
            <Layout>
                <div className="flex justify-content--center">
                    <Title text="Seus Cartões Salvos" />
                </div>

                <div className="grid grid-template-columns--5fr grid-gap--2xl margin--m">
                    <div></div>
                    <div></div>
                        <a>
                            <Img style={componentsPaymentMethods} width={this.state.width} mode={1} addClassName="border-radius--xs" src={ImageCreditCard} />
                            <div style={templateCreditCardNumber} className="grid">
                                <div></div>
                                <Title style={templateCreditCardNumber} tag="h3" text="**** **** **** 1234" />
                                <div></div>
                            </div>                        
                        </a>
                    <div></div>
                    <div></div>
                </div>

                <div className="grid grid-template-columns--5fr grid-gap--2xl margin--m">
                    <div></div>
                    <div></div>
                    <a>
                        <Img style={componentsPaymentMethods} width={this.state.width} mode={1} addClassName="border-radius--xs" src={ImageCreditCard} />
                        <div style={templateCreditCardNumber} className="grid">
                            <div></div>
                            <Title style={templateCreditCardNumber} tag="h3" text="**** **** **** 5678" />
                            <div></div>
                        </div>
                    </a>
                    <div></div>
                    <div></div>
                </div>

                <div className="flex justify-content--center">
                    <Title text="Novo Cartão" />
                </div>

                <div className="grid grid-template-columns--5fr grid-gap--2xl margin--m">
                    <div></div>
                    <div></div>
                    <a>
                        <Img style={componentsPaymentMethods} width={this.state.width} mode={1} addClassName="border-radius--xs" src={ImageCreditCard} />
                    </a>
                    <div></div>
                    <div></div>
                </div>

                <div className="flex justify-content--center">
                    <Title text="Boleto Bancário" />
                </div>

                <div className="grid grid-template-columns--5fr grid-gap--2xl margin--m">
                    <div></div>
                    <div></div>
                    <a>
                        <Img style={componentsPaymentMethods} width={this.state.width} mode={1} addClassName="border-radius--xs" src={ImageBankSlip} />
                    </a>
                    <div></div>
                    <div></div>
                </div>

            </Layout>
        );
    }
}

export default PaymentMethods;
