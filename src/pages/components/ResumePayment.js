import React, {Component} from 'react';
import api from '../../Api'

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
            billet:{}
        }
    }

    async componentWillMount() {
        if(this.props.paymentId){
            await this.getPayment(this.props.paymentId)
            
            if(this.state.payment.card)
                await this.getCard(this.state.payment.card)
            
            if(this.state.payment.billet)
                await this.getBillet(this.state.payment.billet)

        }else{
            if(this.props.cardId)
                await this.getCard(this.props.cardId)
        }
    }

    async componentWillReceiveProps(nextProps) {

        if (this.state.payment.id !== nextProps.paymentId) {

            await this.getPayment(this.props.paymentId)
                
                if(this.state.payment.card)
                    await this.getCard(this.state.payment.card)
                
                if(this.state.payment.billet)
                    await this.getBillet(this.state.payment.billet)


        }

    }

    getPayment(id){
        api.getPaymentById(id).then(
            res => {
                this.setState({
                    payment:res.data
                })
            },
            error => {}
        )
    }

    getCard(id){
        api.getCardById(id).then(
            res => {
                this.setState({
                    card: res.data
                })
            },
            error => {}
        )
    }

    getBillet(id){
        api.getBilletById(id).then(
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

/*
    id: payment._id,
    isPaidOut: payment.isPaidOut,
    value: payment.value,
    card: payment.card,
    billet: payment.billet        
*/

    render(){

        return (
            <Container>

                <Title tag="h3" text="Dados de pagamento" />

                <section className="font--xs grid grid-template-columns--2fr grid-gap-row--2xs grid-gap-column--xl padding--2xs">
                    <span>Valor:</span>
                    <span className="font--bold">{this.state.payment.value}</span>

                    <span>Status:</span>
                    <span className="font--bold">{this.state.payment.isPaidOut?"Pago":"Não Pago"}</span>
                </section>

                <section className="font--xs padding--2xs margin-top--s padding-bottom--5xl border-top--1 border-color--base-30">

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
                                    <Button  href={this.state.billet.url} text={"Gerar"} addClassName="gradient-color--black align-self--stretch margin-top--2xl"/>
                                }
                            </div>
                        </>
                    }
                </section>

                {
                    (this.props.editMode &&  !this.props.id) &&
                    <Button  href={`/rent/${this.props.rentId}/paymentmethods`} text={"alterar"} addClassName="gradient-color--black margin-top--auto"/>
                }

            </Container>
        )
    }
}

export default ResumePayment;