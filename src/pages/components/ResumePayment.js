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
            paymentId:props.paymentId,
            cardId: props.cardId,
            rentId: props.rentId,
            totalAmount: props.totalAmount,
            editMode:props.editMode

        }
    }
    componentWillMount() {
        if (this.state.payment.id !== this.props.paymentId) {
             this.findPayment(this.props)
        }
    }


    async componentWillReceiveProps(nextProps) {

        if (this.state.editMode !== nextProps.editMode) {
            await this.setState({
                editMode:nextProps.editMode
            })
        }

        if (this.state.cardId !== nextProps.cardId) {
            await this.setState({
                cardId:nextProps.cardId
            })
        }

        if (this.state.rentId !== nextProps.rentId) {
            await this.setState({
                rentId:nextProps.rentId
            })
        }

        if (this.state.paymentId !== nextProps.paymentId) {
            await this.setState({
                paymentId:nextProps.paymentId
            })
        }

        if (this.state.totalAmount !== nextProps.totalAmount) {
            await this.setState({
                totalAmount:nextProps.totalAmount
            })
        }

        if (this.state.payment.id !== nextProps.paymentId) {
            await this.findPayment(nextProps)
        }



    }


    async findPayment(nextProps){
        const {paymentId, cardId} = nextProps

        if(paymentId !== "" && paymentId !== undefined){

            await this.getPayment(this.state.paymentId)
            
            await this.getCard(this.state.payment.card)
            
            await this.getBillet(this.state.payment.billet)

        }else{

            await this.setState({
                payment:{},
                billet:{},
                card:{},
            })

            await this.getCard(cardId)
        } 
    }

    async getPayment(id){
        if(id!=="" && id!==undefined){
            await api.getPaymentById(id).then(
                 res => {
                    this.setState({
                        payment:res.data
                    })
                },
                error => {}
            )
        }else{
            await this.setState({
                payment:{},
            })
        }
    }

    async getCard(id){
        if(id!=="" && id!==undefined){
            await api.getCardById(id).then(
                res => {
                    this.setState({
                        card: res.data,
                    })
                },
                error => {}
            )

        }else{
            await this.setState({
                card: {},
            })

        }
                
    }

    async getBillet(id){
        if(id!=="" && id!==undefined){
            await api.getBilletById(id).then(
                 res => {
                    this.setState({
                        billet: res.data
                    })
                },
                error => {}
            )
        }else{
            await this.setState({
                billet: {},
            })
        }
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
                        (this.state.billet.id || (!this.state.cardId && !this.state.payment.id)) &&
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
                    (this.state.editMode &&  !this.state.payment.id) &&
                    <Button to={`/rent/${this.state.rentId}/paymentmethods`} text={"alterar"} addClassName="gradient-color--black margin-top--auto"/>
                }

            </Container>
        )
    }
}

export default ResumePayment;