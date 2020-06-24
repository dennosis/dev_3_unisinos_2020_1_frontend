import React, { Component } from 'react';
import { Link }  from 'react-router-dom'

import api from '../Api'

import Layout from './components/Layout';
import Img from './components/Img';
import Title from './components/Title';
import Container from './components/Container';

import ImageBankSlip from '../images/BankSlip.png';
import ImageCreditCard from '../images/CreditCard.png';



class PaymentMethods extends Component {

    constructor(props) {
        super(props);
        const {rentId} = this.props.match.params
        this.state = {
            cards:[],
            rentId
        };
    }

    componentWillMount() {
        api.getCards().then(
            res => {
                const cards = res.data.cards.map(card=>{return{id:card.id,cardNumber:card.cardNumber}})
                this.setState({
                    cards
                })
                
            },
            error => {
  
            }
        )
    }


    render() {
        return (
            <Layout>
                <Title tag="h1" text="Forma de pagamento"/>

                <Container addClassName="align-self--center">

                    <div className="grid grid-gap--l">
                        {
                            this.state.cards.length > 0 &&
              
                            <Container addClassName="flex flex--column align-items--center">

                                <h3 className="padding-bottom--l">Seus Cartões Salvos</h3>

                                <div className="grid grid--row grid-gap--l">
                                    {
                                        
                                        this.state.cards.map((card, index)=>{
                                            
                                            return (
                                                <Link to={`/rent/${this.state.rentId}/card/${card.id}`} key={index} className="flex flex--column align-items--center">
                                                    <Img width={70} height={50} mode={1} addClassName="border-radius--xs" src={ImageCreditCard} />
                                                    <span className="font--bold font-size--3xs padding-top--2xs">{card.cardNumber}</span>
                                                </Link>
                                            )
                                        })
                                        
                                    }
                                </div>
        
                            </Container>

                        }
                        <div className="grid grid-template-columns--2fr grid-gap--l">
                        <Container addClassName="flex flex--column align-items--center">

                            <h3 className="padding-bottom--l">Novo Cartão</h3>

                            <Link to={`/rent/${this.state.rentId}/newcard`}>
                                <Img width={70} height={50} mode={1} addClassName="border-radius--xs" src={ImageCreditCard} />
                            </Link>

                        </Container>

                        <Container addClassName="flex flex--column align-items--center">
                            
                            <h3 className="padding-bottom--l">Boleto Bancário</h3>

                            <Link to={`/rent/${this.state.rentId}`}>
                                <Img width={70} height={50} mode={1} addClassName="border-radius--xs" src={ImageBankSlip} />
                            </Link>
                        </Container>
                        </div>

                    </div>

            </Container>

            </Layout>
        );
    }
}

export default PaymentMethods;
