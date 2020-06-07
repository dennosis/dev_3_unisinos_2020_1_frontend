import React, { Component } from 'react';
import api from '../Api'

import Layout from './components/Layout';
import Container from './components/Container';
import Img from './components/Img';
import Title from './components/Title';
import BankSlipImage from '../images/BankSlip.png';

const componentsPaymentMethods = {
    position: 'relative',
    left: '25%',
    right: '25%',
    top: '25%',
    height: '50%',
    width: '50%',
    marginBottom: '35px'
}

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

                <div style={componentsPaymentMethods} className="grid grid-gap--2xl">
                    <a>
                        <Container>
                            <div className="grid grid-template-columns--2fr grid-gap--2xl">
                                <Title tag="h2" text="NÚMERO:" />
                                <Title tag="h2" text="**** **** **** 4567" />
                            </div>
                            <div className="grid grid-template-columns--2fr grid-gap--2xl">
                                <Title tag="h2" text="VALIDADE:" />
                                <Title tag="h2" text="05/2024" />
                            </div>
                            <div className="grid grid-template-columns--2fr grid-gap--2xl">
                                <Title tag="h2" text="CPF:" />
                                <Title tag="h2" text="090.230.360-00" />
                            </div>
                        </Container>
                    </a>
                </div>

                <div style={componentsPaymentMethods} className="grid grid-gap--2xl">
                    <a>
                        <Container>
                            <div className="grid grid-template-columns--2fr grid-gap--2xl">
                                <Title tag="h2" text="NÚMERO:" />
                                <Title tag="h2" text="**** **** **** 4567" />
                            </div>
                            <div className="grid grid-template-columns--2fr grid-gap--2xl">
                                <Title tag="h2" text="VALIDADE:" />
                                <Title tag="h2" text="05/2024" />
                            </div>
                            <div className="grid grid-template-columns--2fr grid-gap--2xl">
                                <Title tag="h2" text="CPF:" />
                                <Title tag="h2" text="090.230.360-00" />
                            </div>
                        </Container>
                    </a>
                </div>

                <div className="flex justify-content--center">
                    <Title text="Novo Cartão" />
                </div>

                <div style={componentsPaymentMethods} className="grid">
                    <a>
                        <Container>
                            <div className="grid grid-template-columns--2fr grid-gap--2xl">
                                <Title tag="h2" text="NÚMERO:" />
                                <Title tag="h2" text="**** **** **** 4567" />
                            </div>
                            <div className="grid grid-template-columns--2fr grid-gap--2xl">
                                <Title tag="h2" text="VALIDADE:" />
                                <Title tag="h2" text="05/2024" />
                            </div>
                            <div className="grid grid-template-columns--2fr grid-gap--2xl">
                                <Title tag="h2" text="CPF:" />
                                <Title tag="h2" text="090.230.360-00" />
                            </div>
                        </Container>
                    </a>
                </div>

                <div className="flex justify-content--center">
                    <Title text="Boleto Bancário" />
                </div>

                <div style={componentsPaymentMethods} className="grid">                  
                    <a>
                        <Img style={componentsPaymentMethods} width={this.state.width} mode={1} addClassName="border-radius--xs" src={BankSlipImage} />
                    </a>
                </div>

            </Layout>
        );
    }
}

export default PaymentMethods;
