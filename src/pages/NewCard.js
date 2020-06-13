import React, {Component} from 'react';
import Layout from './components/Layout';
import Container from './components/Container';
import Input from './components/Input';
import Toggle from './components/Toggle';
import Button from './components/Button';

const componentsCard={
    position: 'relative',
    left: '25%',
    right: '25%',
    top: '25%',
    heigth: '50%',
    width: '50%'
}

const dateComp={
    position: 'relative',
    left: '5%',
    right: '25%',
    top: '30%'
}

class NewCard extends Component {
    constructor(props){
        super(props)
        this.state = {
            values:{
                paymentTerms:"",
                holderBirthDate:"",
                holderDocId:"",
                cardNumber:"",
                cardExpMonth:"",
                cardExpYear:"",
                cardCsv:"",
                saveCard:"",
            },
            errors:{}
        }
    }

    
    handleInputChange(input){
        this.setState({
            values:{
                ...this.state.values,
                [input.name]:input.value,
            },
            errors:{
                ...this.state.errors,
                [input.name]:undefined
            }
        })
    }

    render(){

        const condintionPayment = [
            {name:"1 x R$ 200,00", value:"A"},
            {name:"B", value:"B"},
            {name:"C", value:"C"},
            {name:"D", value:"D"}
        ]




        return (
            <Layout>
                <Container style={componentsCard} className = "newCard">
                    <form onSubmit={(e) => this.onSubmit(e)} className="grid grid-gap--l" >
                        <div className="flex justify-content--center">
                            <h2>Novo cartão</h2>
                        </div>

                        <Input  placeholder = "Condição de pagamento (combo)" name = "paymentTerms" value = {this.state.values.paymentTerms} error = {this.state.errors.paymentTerms} onChange = {(value)=>this.handleInputChange(value)}/>
                        
                        <div className="grid grid-gap--m grid-template-columns--2fr">
                            <label style={dateComp}> Data de nascimento do titular:</label>
                            <Input name = "holderBirthDate" type = "date" value = {this.state.values.holderBirthDate} error = {this.state.errors.holderBirthDate} onChange = {(value)=>this.handleInputChange(value)}/>
                        </div>
                        
                        <Input placeholder = "CPF/CNPJ" name = "holderDocId" value = {this.state.values.holderDocId} error = {this.state.errors.holderDocId} onChange = {(value)=>this.handleInputChange(value)}/>
                        <Input placeholder = "Numero do cartão" name = "cardNumber" value = {this.state.values.cardNumber} error = {this.state.errors.cardNumber} onChange = {(value)=>this.handleInputChange(value)}/>
                        
                        <div className="grid grid-gap--m grid-template-columns--2fr">
                            <Input placeholder = "Mês (combo)" name = "cardExpMonth" value = {this.state.values.cardExpMonth} error = {this.state.errors.cardExpMonth} onChange = {(value)=>this.handleInputChange(value)} />
                            <Input placeholder = "Ano (combo)" name = "cardExpYear" value = {this.state.values.cardExpYear} error = {this.state.errors.cardExpYear} onChange = {(value)=>this.handleInputChange(value)}/>
                        </div>
                        
                        <Input placeholder = "Código de segurança (CSV)" name = "cardCsv" value = {this.state.values.cardCsv} error = {this.state.errors.cardCsv} onChange = {(value)=>this.handleInputChange(value)}/>
                        <Toggle text = "Salvar cartão" name = "saveCard" value = {this.state.values.saveCard} error = {this.state.errors.saveCard} onChange = {(value)=>this.handleInputChange(value)}/>
                        
                        <div className="grid grid-gap--m grid-template-columns--1fr">
                            <Button type="submit" text={"confirmar"} addClassName="gradient-color--base-60" />
                        </div>
                    </form>
                </Container>
            </Layout>
        );
    }
}

export default NewCard;