import React, { Component } from 'react';
import { getUser, deleteToken, deleteUser } from '../../persist'


import Button from './Button.js';
import Img from './Img';
import LogoLocadoraBoaViagem from '../../images/LogoLocadoraBoaViagem-title-wb.png';

class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {
            user: getUser()
        };
    }

    logout=(event)=>{
        event.preventDefault()
        deleteUser()
        deleteToken()
        this.setState({
            user:undefined
        })
    }


    render() {

         const user = getUser()

        return (
            <header className="l-header position--fixed width--100 flex justify-content--space-between align-items--center padding--m padding-right--2xl padding-left--2xl background-color--base-10">
                    
                <Img src={LogoLocadoraBoaViagem} alt="Logo" />
                
                { 
                    this.state.user &&
                    <div className="flex flex--column">
                        <span className="font-size-s font--regular color--base-40">Seja bem vindo</span>
                        <div className="flex align-items--baseline">
                            <span className="font-size--2xl font--bold color--base-40">{this.state.user.name}</span>
                            <a onClick={(e)=>this.logout(e)} className="font-size--xs font--bold margin-left--xs color--base-30 hover-color--base-40">sair</a>
                        </div>
                    </div>
                }

                { 
                    !this.state.user &&
                    <div className="grid grid-template-columns--2fr grid-gap--m">
                        <Button href="/login" text="Login"/>
                        <Button href="/SignUp" text="Cadastre-se"/>
                    </div>
                }
   

            </header>
        );
    }
}

export default Header