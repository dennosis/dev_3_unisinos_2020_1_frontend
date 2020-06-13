import React, { Component } from 'react';
import api from '../Api'
import { setToken, setUser, deleteToken, deleteUser } from '../persist'


import Layout from './components/Layout';
import Container from './components/Container';
import Input from './components/Input';
import Button from './components/Button';

const componentsLogin={
    position: 'absolute',
    left: '25%',
    right: '25%',
    top: '25%',
    heigth: '50%',
    width: '50%'
}

class Login extends Component{

    constructor(props){
        super(props)
        this.state = {
            values:{
                email:"",
                password: "",
            },
            errors:{}
        }
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

    async onSubmit(e){
        e.preventDefault();
        api.login(this.state.values).then(
            res => {
                setToken(res.data.token)
                setUser({...res.data, token:undefined})
                this.props.history.push('/')
            },
            error => {
                this.setState({
                    errors:error.response.data.errors
                })
            }
        )
    }


    render(){
		return (
			<Layout headerMode={1}  >
                <Container style={componentsLogin} className="grandeFera">
                    <form onSubmit={(e)=>this.onSubmit(e)} className="grid grid-gap--xs" >
                        <Input 
                            placeholder="usuário" 
                            name="email" 
                            value={this.state.values.email }  
                            error={this.state.errors.email }  
                            onChange={(value)=>this.handleInputChange(value)} 
                        />

                        <Input 
                            type="password" 
                            placeholder="senha" 
                            name="password" 
                            value={this.state.values.password } 
                            error={this.state.errors.password } 
                            onChange={(value)=>this.handleInputChange(value)} 
                        />

                        <Button type="submit" text={"entrar"} addClassName="gradient-color--base-60" />
                    </form>
                </Container>
			</Layout>
		);
	}
}

export default Login;