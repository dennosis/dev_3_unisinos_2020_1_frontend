import React, {Component} from 'react';
import api from '../../Api'
import { formatMoney } from  '../../utils'


import Container from './Container';
import Button from './Button';
import Title from './Title';
import Img from './Img';

import ImageCreditCard from '../../images/CreditCard.png';
import ImageBankSlip from '../../images/BankSlip.png';


class ResumePayment extends Component {

    constructor(props) {
        super(props)
        this.state = {
            payment:{},
            card:{},
            billet:{},
            totalAmount: props.totalAmount
        }
    }



    componentWillReceiveProps(nextProps) {

        if (this.state.payment.id !== nextProps.paymentId) {
            this.findPayment(nextProps)
        }
        if (this.state.card.id !== nextProps.cardId) {
            this.findPayment(nextProps)
        }
        if (this.state.totalAmount !== nextProps.totalAmount) {
            this.setState({
                totalAmount:nextProps.totalAmount
            })
        }


    }


    async findPayment(props){
        const {paymentId, cardId} = props
        if(paymentId){

            await this.getPayment(paymentId)
            
            await this.getCard(this.state.payment.card)
            
            await this.getBillet(this.state.payment.billet)

        }else{
            await this.getCard(cardId)
        } 
    }

    async getPayment(id){
        await api.getPaymentById(id).then(
            res => {
                this.setState({
                    payment:res.data
                })
            },
            error => {}
        )
    }

    async getCard(id){
        if(id)
            await api.getCardById(id).then(
                res => {
                    this.setState({
                        card: res.data
                    })
                },
                error => {}
            )
    }

    async getBillet(id){
        if(id)
           await api.getBilletById(id).then(
                res => {
                    this.setState({
                        billet: res.data
                    })
                },
                error => {}
            )
    }


    getCar(id){
        
        api.getCarById(id).then(
            res => {
                this.setState({
                    ...res.data
                })
            },
            error => {}
        )
    
    }


    render(){

        const totalAmount = this.state.payment.value ? this.state.payment.value : this.state.totalAmount

        return (
            <Container>

                <Title tag="h3" text="Dados de pagamento" />

                <section className="font--xs grid grid-template-columns--2fr grid-gap-row--2xs grid-gap-column--xl padding--2xs">
                    <span>Valor:</span>
                    <span className="font--bold">{ formatMoney(totalAmount) }</span>

                    <span>Status:</span>
                    <span className="font--bold">{this.state.payment.isPaidOut?"Pago":"Não Pago"}</span>
                </section>

                <section className="font--xs padding--2xs margin-top--s border-top--1 border-color--base-30">

                    {
                        this.state.card.id &&
                        <>
                            <Title tag="h3" text="Pagamento via cartão" />
                            <div className="flex flex--column align-items--center margin-top--m">
                                <Img width={70} height={50} mode={1} addClassName="border-radius--xs" src={ImageCreditCard} />
                                <span className="font--bold font-size--3xs padding-top--2xs">{this.state.card.cardNumber}</span>
                            </div>
                        </>

                    }


                    {
                        (this.state.billet.id || (!this.props.cardId && !this.props.paymentId)) &&
                        <>
                            <Title tag="h3" text="Pagamento via boleto bancario" />

                            <div className="flex flex--column align-items--center margin-top--m">
                                <Img width={70} height={50} mode={1} addClassName="border-radius--xs" src={ImageBankSlip} />
                                {
                                    this.state.billet.code &&
                                    <span className="font--bold font-size--3xs padding-top--2xs">{this.state.billet.code}</span>
                                }
                                {
                                    this.state.billet.url &&
                                    <Button target="_blank" href={this.state.billet.url} text={"Gerar"} addClassName="gradient-color--black align-self--stretch margin-top--2xl"/>
                                }
                            </div>
                        </>
                    }
                </section>

                {
                    (this.props.editMode &&  !this.props.id) &&
                    <Button href={`/rent/${this.props.rentId}/paymentmethods`} text={"alterar"} addClassName="gradient-color--black margin-top--auto"/>
                }

            </Container>
        )
    }
}

export default ResumePayment;