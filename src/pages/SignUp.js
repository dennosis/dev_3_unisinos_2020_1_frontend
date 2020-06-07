import React, { Component } from 'react';
import axios from 'axios'
import api from '../Api'
import { deleteToken, deleteUser } from '../persist'

import Input from './components/Input';
import Select from './components/Select';
import Layout from './components/Layout';
import Container from './components/Container';
import Button from './components/Button';

class SignUp extends Component {

    constructor(props) {
        super(props);
        this.state = {
            values:{},
            errors:{},
            optionsUf:[],
            optionsCity:[]
        };
        
    }

    componentWillMount() {
        deleteToken()
        deleteUser()
        this.getOptionsUf()
    }

     getDataByCep(cep){

        axios.get(`https://viacep.com.br/ws/${cep}/json`).then(async(res)=>{

            const {
                logradouro,
                complemento,
                bairro,
                localidade,
                uf
            } = res.data
            
            await this.setState({
                values:{
                    ...this.state.values,
                    address:logradouro,
                    residentialComplement:complemento,
                    neighborhood:bairro,
                    uf,
                    //city: localidade,

                }
            })
            
            await this.getOptionsCity(uf)


            await this.setState({
                values:{
                    ...this.state.values,
                    city: localidade+"",
                }
            })

await  console.log(this.state.values);
await console.log(localidade)

        })
    }

    getOptionsUf(){
        axios.get('https://servicodados.ibge.gov.br/api/v1/localidades/estados').then(res=>{
            const ufInitials = res.data.map(uf=>{ return {name:uf.nome, value: uf.sigla}})
            this.setState({optionsUf:ufInitials})
        })
    }

    getOptionsCity(uf){
        axios.get(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${uf}/municipios`).then(res=>{
            const cityNames = res.data.map(city=>{ return {name:city.nome, value: city.nome}})
            this.setState({optionsCity:cityNames})
        })
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
        })
    }

    handleInputCep(input){
        if(`${input.value}`.length >= 8)
            this.getDataByCep(input.value)
    }

    handleInputUf(input){
        this.getOptionsCity(input.value)
    }

    onClear() {
        this.setState({
            values:{},
            errors:{}
        })
    }

    async onSubmit(e) {
        e.preventDefault();

        //if((Object.keys(this.state.errors).length === 0)){

            if(this.state.values.password !== this.state.values.passwordConfirm){
                this.setState({
                    errors:{
                        ...this.state.errors,
                        password:"Is not equal",
                        passwordConfirm:"Is not equal"
                    }
                })
                return
            }

            api.register(this.state.values).then(
                res => {
                    this.props.history.push('/login')
                },
                error => {
                    this.setState({
                        errors:error.response.data.errors
                    })
                }
            )
        //}
    }

    render() {

        const cnhCategoryOpts = [
            {name:"A", value:"A"},
            {name:"B", value:"B"},
            {name:"C", value:"C"},
            {name:"D", value:"D"}
        ]
        return (
            <Layout>
                <form onSubmit={(e) => this.onSubmit(e)} className="grid grid-gap--l" >
                        <div className="grid grid-template-columns--2fr grid-gap--2xl">
                            <Container className="grid grid-gap--m margin-bottom--auto">
                                <Input name="name" placeholder="Nome" error={this.state.errors.name } value={this.state.values.name} onChange={(value) => this.handleInputChange(value)} />
                                <Input name="cpf" type="number" placeholder="CPF" error={this.state.errors.cpf } value={this.state.values.cpf} onChange={(value) => this.handleInputChange(value)} />
                                <Input name="rg" type="number" placeholder="RG" error={this.state.errors.rg } value={this.state.values.rg} onChange={(value) => this.handleInputChange(value)} />
                                <Input name="phone" type="number" placeholder="Telefone" error={this.state.errors.phone } value={this.state.values.phone} onChange={(value) => this.handleInputChange(value)} />
                                <Input name="cellphone" type="number" placeholder="Celular" error={this.state.errors.cellphone } value={this.state.values.cellphone} onChange={(value) => this.handleInputChange(value)} />
                                <Input name="email" type="email" placeholder="E-Mail" error={this.state.errors.email } value={this.state.values.email} onChange={(value) => this.handleInputChange(value)} />
                                <Input name="cnhNumber" type="number" placeholder="CNH"  error={this.state.errors.cnhNumber } value={this.state.values.cnhNumber} onChange={(value) => this.handleInputChange(value)} />
                                <div className="grid grid-gap--m grid-template-columns--2fr">
                                    <Input  type="date" name="cnhExpirationDate"  error={this.state.errors.cnhExpirationDate } placeholder="Validade CNH" value={this.state.values.cnhExpirationDate} onChange={(value) => this.handleInputChange(value)} />
                                    <Select firstOption={{name:"Selecione Categoria", value:""}} options={cnhCategoryOpts} name="cnhCategory" placeholder="Categoria CNH"  error={this.state.errors.cnhCategory } value={this.state.values.cnhCategory} onChange={(value) => this.handleInputChange(value)} />
                                </div>
                            </Container>

                            <Container className="grid grid-gap--m margin-bottom--auto">
                                <Input name="cep"  max={99999999} type="number" placeholder="CEP"  error={this.state.errors.cep } value={this.state.values.cep} onChange={(value) => { this.handleInputChange(value); this.handleInputCep(value) }} />
                                <Input name="address" placeholder="Endereço"  error={this.state.errors.address } value={this.state.values.address} onChange={(value) => this.handleInputChange(value)} />
                                <Input name="number" placeholder="Número" type="number"  error={this.state.errors.number } value={this.state.values.number} onChange={(value) => this.handleInputChange(value)} />
                                <Input name="residentialComplement" placeholder="Complemento"  error={this.state.errors.residentialComplement } value={this.state.values.residentialComplement} onChange={(value) => this.handleInputChange(value)} />
                                <Input name="neighborhood" placeholder="Bairro"  error={this.state.errors.neighborhood } value={this.state.values.neighborhood} onChange={(value) => this.handleInputChange(value)} />
                                <Select firstOption={{name:"Selecione Estado", value:""}} options={this.state.optionsUf} name="uf" placeholder="Estado"  error={this.state.errors.uf } value={this.state.values.uf} onChange={(value) => {this.handleInputChange(value); this.handleInputUf(value)}} />
                                <Select firstOption={{name:"Selecione Cidade", value:""}} options={this.state.optionsCity} name="city" placeholder="Cidade"  error={this.state.errors.city } value={this.state.values.city} onChange={(value) => this.handleInputChange(value)} />
                            </Container>
                        </div>

                        <div className="grid grid-template-columns--2fr grid-gap--2xl">
                            <Input name="password" type="password" placeholder="Senha"  error={this.state.errors.password } value={this.state.values.password} onChange={(value) => this.handleInputChange(value)} />
                            <Input name="passwordConfirm" type="password"  error={this.state.errors.passwordConfirm } placeholder="Confirmar senha" value={this.state.values.passwordConfirm} onChange={(value) => this.handleInputChange(value)} />
                        </div>

                        <div className="grid grid-template-columns--2fr grid-gap--2xl">
                            <Button type="reset" onClick={() => this.onClear()} text={'Limpar dados'} addClassName="gradient-color--black" />
                            <Button type="submit" text={'Cadastrar'} addClassName="gradient-color--base-60" />
                        </div>

                </form>
            </Layout >
        );
    }
}

export default SignUp;
