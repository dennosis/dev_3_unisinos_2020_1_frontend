import React, { Component } from 'react';

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
			inputs:[],
			width:"200px"        
		}
    }


    render(){
		return (
			<Layout>
                <div style={componentsLogin} className="grandeFera">
                    <Container>
                        <div className="grid grid-gap--xs">	
							<Input placeholder="usuário" value={this.state.inputs[0] }/>
							<Input type="password" placeholder="senha" value={this.state.inputs[1] }/>
							<Button text={"entrar"} addClassName="gradient-color--base-60" onClick={()=>this.setData()} />
						</div>
                    </Container>
                </div>

			</Layout>
		);
	}
}

export default Login;