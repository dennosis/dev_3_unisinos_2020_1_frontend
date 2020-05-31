import React, { Component } from 'react';
import queryString from 'query-string';
import Input from './components/Input';
import Layout from './components/Layout';
import Container from './components/Container';
import Img from './components/Img';
import Button from './components/Button';

class SignUp extends Component {

    constructor(props) {
        super(props);
        this.state = {
            filter: queryString.parse(this.props.location.search) || false,
            width: '250px',
            height: '250px'
        };
    }

    handleInputChange(input) {
        this.setState({ [input.name]: input.value })
    }

    onClear() {
        this.setState({
            name: "",
            cpf: "",
            rg: "",
            phone: "",
            cellphone: "",
            email: "",
            cnh: "",
            cnhExpirationDate: "",
            cnhCategory: "",
            cep: "",
            address: "",
            number: "",
            residentialComplement: "",
            neighborhood: "",
            city: "",
            state: "",
            country: ""
        })
        if (this.props.onClear) {
            this.props.onClear(this.state)
        }
    }

    async onSubmit(e) {
        //TODO: Implementar função.
    }

    render() {
        return (
            <Layout>
                <form onSubmit={(e) => this.onSubmit(e)} className="grid grid-gap--xs" >
                    <div className="grid grid-gap--l">
                        <div className="grid grid-template-columns--3fr">
                            <div></div>
                            <div className="grid grid-template-columns--3fr">
                                <div></div>
                                <Img
                                    mode={1}
                                    width={this.state.width}
                                    height={this.state.height}
                                    addClassName="border-radius--50"
                                    src="https://cdn.pixabay.com/photo/2017/06/13/12/53/profile-2398782_960_720.png"
                                />
                                <div></div>
                            </div>
                            <div></div>
                        </div>
                        <div className="grid grid-gap--l grid-template-columns--2fr grid-gap--2xl">
                            <Container className="grid grid-gap--m margin-bottom--auto">
                                <Input name="name" placeholder="Nome" value={this.state.name} onChange={(value) => this.handleInputChange(value)} />
                                <Input name="cpf" placeholder="CPF" value={this.state.cpf} onChange={(value) => this.handleInputChange(value)} />
                                <Input name="rg" placeholder="RG" value={this.state.rg} onChange={(value) => this.handleInputChange(value)} />
                                <Input name="phone" placeholder="Telefone" value={this.state.phone} onChange={(value) => this.handleInputChange(value)} />
                                <Input name="cellphone" placeholder="Celular" value={this.state.cellphone} onChange={(value) => this.handleInputChange(value)} />
                                <Input name="email" type="email" placeholder="E-Mail" value={this.state.email} onChange={(value) => this.handleInputChange(value)} />
                                <Input name="cnh" placeholder="CNH" value={this.state.cnh} onChange={(value) => this.handleInputChange(value)} />
                                <div className="grid grid-gap--l grid-template-columns--2fr grid-gap--2xl">
                                    <Input name="cnhExpirationDate" placeholder="Validade CNH" value={this.state.cnhExpirationDate} onChange={(value) => this.handleInputChange(value)} />
                                    <Input name="cnhCategory" placeholder="Categoria CNH" value={this.state.cnhCategory} onChange={(value) => this.handleInputChange(value)} />
                                </div>
                            </Container>

                            <Container className="grid grid-gap--m margin-bottom--auto">
                                <Input name="cep" placeholder="CEP" value={this.state.cep} onChange={(value) => this.handleInputChange(value)} />
                                <Input name="address" placeholder="Endereço" value={this.state.address} onChange={(value) => this.handleInputChange(value)} />
                                <Input name="number" placeholder="Número" value={this.state.number} onChange={(value) => this.handleInputChange(value)} />
                                <Input name="residentialComplement" placeholder="Complemento" value={this.state.residentialComplement} onChange={(value) => this.handleInputChange(value)} />
                                <Input name="neighborhood" placeholder="Bairro" value={this.state.neighborhood} onChange={(value) => this.handleInputChange(value)} />
                                <Input name="city" placeholder="Cidade" value={this.state.city} onChange={(value) => this.handleInputChange(value)} />
                                <Input name="state1" placeholder="Estado" value={this.state.state} onChange={(value) => this.handleInputChange(value)} />
                                <Input name="country" placeholder="País" value={this.state.country} onChange={(value) => this.handleInputChange(value)} />
                            </Container>
                        </div>

                        <div className="grid grid-gap--l grid-template-columns--2fr grid-gap--2xl">
                            <Input type="password" placeholder="Senha" />
                            <Input type="passwordConfirm" placeholder="Confirmar senha" />
                        </div>

                        <div className="grid grid-gap--l grid-template-columns--2fr grid-gap--2xl">
                            <Button type="reset" onClick={() => this.onClear()} text={'Limpar filtros'} addClassName="gradient-color--black" />
                            <Button type="submit" text={'Cadastrar'} addClassName="gradient-color--base-60" />
                        </div>

                    </div>
                </form>
            </Layout >
        );
    }
}

export default SignUp;
