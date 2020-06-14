import React, {Component} from 'react';
import api from '../Api'

import Layout from './components/Layout';
import Container from './components/Container';
import Input from './components/Input';
import Select from './components/Select';
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
                holderBirthDate:"",
                document:"",
                cardNumber:"",
                expirationMonth:"",
                expirationYear:"",
                csv:"",
            },
            errors:{},
            alert:{}

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
            },
            alert:{}

        })
    }

    async onSubmit(e) {
        e.preventDefault();

        api.card(this.state.values).then(
            res => {
                this.props.history.push('/signin')
            },
            error => {
                this.setState({
                    errors:error.response.data.errors,
                    alert:{type:"error", content:"Erro ao cadastrar o cartão, verfique os campos!"}
                })
            }
        )
        
    }

    render(){

        const optionsYear = [
            {name:'2020', value:'2020'},
            {name:'2021', value:'2021'},
            {name:'2022', value:'2022'},
            {name:'2023', value:'2023'},
            {name:'2024', value:'2024'},
            {name:'2025', value:'2025'},
            {name:'2026', value:'2026'},
            {name:'2027', value:'2027'},
            {name:'2028', value:'2028'},
        ]

        const optionsMonth = [
            {name:'01', value:'01'},
            {name:'02', value:'02'},
            {name:'03', value:'03'},
            {name:'04', value:'04'},
            {name:'05', value:'05'},
            {name:'06', value:'06'},
            {name:'07', value:'07'},
            {name:'08', value:'08'},
            {name:'09', value:'09'},
            {name:'10', value:'10'},
            {name:'11', value:'11'},
            {name:'12', value:'12'},
        ]

        return (
            <Layout alert={this.state.alert} >
                <Container style={componentsCard} className = "newCard">
                    <form onSubmit={(e) => this.onSubmit(e)} className="grid grid-gap--l" >
                        <div className="flex justify-content--center">
                            <h2>Novo cartão</h2>
                        </div>

                        <div className="grid grid-gap--m grid-template-columns--2fr">
                            <label style={dateComp}> Data de nascimento do titular:</label>
                            <Input name = "holderBirthDate" type = "date" value = {this.state.values.holderBirthDate} error = {this.state.errors.holderBirthDate} onChange = {(value)=>this.handleInputChange(value)}/>
                        </div>
                        
                        <Input placeholder = "CPF/CNPJ" name = "document" value = {this.state.values.document} error = {this.state.errors.document} onChange = {(value)=>this.handleInputChange(value)}/>
                        <Input placeholder = "Numero do cartão" name = "cardNumber" value = {this.state.values.cardNumber} error = {this.state.errors.cardNumber} onChange = {(value)=>this.handleInputChange(value)}/>
                        
                        <div className="grid grid-gap--m grid-template-columns--2fr">
                            <Select options={optionsYear} firstOption={{name:"Selecione o ano", value:""}} name = "expirationMonth" value = {this.state.values.expirationMonth} error = {this.state.errors.expirationMonth} onChange = {(value)=>this.handleInputChange(value)} />
                            <Select options={optionsMonth} firstOption={{name:"Selecione o mês", value:""}} name = "expirationYear" value = {this.state.values.expirationYear} error = {this.state.errors.expirationYear} onChange = {(value)=>this.handleInputChange(value)}/>
                        </div>
                        
                        <Input placeholder = "CVV" name = "cvv" value = {this.state.values.cvv} error = {this.state.errors.cvv} onChange = {(value)=>this.handleInputChange(value)}/>
                        
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