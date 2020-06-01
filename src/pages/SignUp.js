import React, { Component } from 'react';
import api from '../Api'
import { deleteToken, deleteUser } from '../persist'

import Input from './components/Input';
import Layout from './components/Layout';
import Container from './components/Container';
import Img from './components/Img';
import Button from './components/Button';

class SignUp extends Component {

    constructor(props) {
        super(props);
        this.state = {
            values:{},
            errors:{}
        };
    }

    componentWillMount() {
        deleteToken()
        deleteUser() 
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

    onClear() {
        this.setState({
            values:{},
            errors:{}
        })
    }

    async onSubmit(e) {
        e.preventDefault();

        //if((Object.keys(this.state.errors).length === 0)){

            if(this.state.values.password != this.state.values.passwordConfirm){
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
        return (
            <Layout>
                <form onSubmit={(e) => this.onSubmit(e)} className="grid grid-gap--l" >
                        <div className="flex justify-content--center">
                                <Img
                                    mode={1}
                                    width="150px"
                                    height="150px"
                                    addClassName="border-radius--50"
                                    src="https://cdn.pixabay.com/photo/2017/06/13/12/53/profile-2398782_960_720.png"
                                />
                        </div>
                        <div className="grid grid-template-columns--2fr grid-gap--2xl">
                            <Container className="grid grid-gap--m margin-bottom--auto">
                                <Input name="name" placeholder="Nome" error={this.state.errors.name } value={this.state.values.name} onChange={(value) => this.handleInputChange(value)} />
                                <Input name="cpf" placeholder="CPF" error={this.state.errors.cpf } value={this.state.values.cpf} onChange={(value) => this.handleInputChange(value)} />
                                <Input name="rg" placeholder="RG" error={this.state.errors.rg } value={this.state.values.rg} onChange={(value) => this.handleInputChange(value)} />
                                <Input name="phone" placeholder="Telefone" error={this.state.errors.phone } value={this.state.values.phone} onChange={(value) => this.handleInputChange(value)} />
                                <Input name="cellphone" placeholder="Celular" error={this.state.errors.cellphone } value={this.state.values.cellphone} onChange={(value) => this.handleInputChange(value)} />
                                <Input name="email" type="email" placeholder="E-Mail" error={this.state.errors.email } value={this.state.values.email} onChange={(value) => this.handleInputChange(value)} />
                                <Input name="cnhNumber" placeholder="CNH"  error={this.state.errors.cnhNumber } value={this.state.values.cnhNumber} onChange={(value) => this.handleInputChange(value)} />
                                <div className="grid grid-gap--m grid-template-columns--2fr">
                                    <Input  type="date" name="cnhExpirationDate"  error={this.state.errors.cnhExpirationDate } placeholder="Validade CNH" value={this.state.values.cnhExpirationDate} onChange={(value) => this.handleInputChange(value)} />
                                    <Input name="cnhCategory" placeholder="Categoria CNH"  error={this.state.errors.cnhCategory } value={this.state.values.cnhCategory} onChange={(value) => this.handleInputChange(value)} />
                                </div>
                            </Container>

                            <Container className="grid grid-gap--m margin-bottom--auto">
                                <Input name="cep" placeholder="CEP"  error={this.state.errors.cep } value={this.state.values.cep} onChange={(value) => this.handleInputChange(value)} />
                                <Input name="address" placeholder="Endereço"  error={this.state.errors.address } value={this.state.values.address} onChange={(value) => this.handleInputChange(value)} />
                                <Input name="number" placeholder="Número"  error={this.state.errors.number } value={this.state.values.number} onChange={(value) => this.handleInputChange(value)} />
                                <Input name="residentialComplement" placeholder="Complemento"  error={this.state.errors.residentialComplement } value={this.state.values.residentialComplement} onChange={(value) => this.handleInputChange(value)} />
                                <Input name="neighborhood" placeholder="Bairro"  error={this.state.errors.neighborhood } value={this.state.values.neighborhood} onChange={(value) => this.handleInputChange(value)} />
                                <Input name="city" placeholder="Cidade"  error={this.state.errors.city } value={this.state.values.city} onChange={(value) => this.handleInputChange(value)} />
                                <Input name="state1" placeholder="Estado"  error={this.state.errors.statel } value={this.state.values.state} onChange={(value) => this.handleInputChange(value)} />
                                <Input name="country" placeholder="País"  error={this.state.errors.country } value={this.state.values.country} onChange={(value) => this.handleInputChange(value)} />
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
