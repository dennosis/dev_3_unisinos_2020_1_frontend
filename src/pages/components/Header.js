import React, { Component } from 'react';
import { getUser, deleteToken, deleteUser } from '../../persist'


import Button from './Button.js';
import Img from './Img';
import LogoLocadoraBoaViagem from '../../images/LogoLocadoraBoaViagem-title-wb.png';
import MiniFilter from './MiniFilter'
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

    headerMode=(mode)=>{
        switch(mode){
            case 1:
                return (
                    <section className="flex justify-content--center align-items--center ">
                        <a href="/">
                            <Img src={LogoLocadoraBoaViagem} alt="Logo" />
                        </a>
                    </section>
                )

            default:
                return (
                    <section className="flex justify-content--space-between align-items--center ">
                        <a href="/">
                            <Img src={LogoLocadoraBoaViagem} alt="Logo" />
                        </a>

                        { 
                            this.state.user &&
                            <div className="flex flex--column align-content--flex-start">
                                <span className="font-size-s font--regular color--base-40">Seja bem vindo</span>
                                <div className="flex align-items--baseline">
                                    <span className="font-size--2xl font--bold color--base-40">{this.state.user.name}</span>
                                    <a href="/user" className="font-size--xs font--bold margin-left--xs color--base-30 hover-color--base-40">editar</a>
                                    <a href onClick={(e)=>this.logout(e)} className="font-size--xs font--bold margin-left--xs color--base-30 hover-color--base-40">sair</a>
                                </div>
                            </div>
                        }

                        { 
                            !this.state.user &&
                            <div className="grid grid-template-columns--2fr grid-gap--m">
                                <Button href="/signin" text="Login"/>
                                <Button href="/signUp" text="Cadastre-se"/>
                            </div>
                        }

                    </section>
                )


        }
    }

    render() {
        return (
            <header className="l-header position--fixed width--100 flex flex--column padding--m padding-right--2xl padding-left--2xl background-color--base-10">
                
                {
                    this.headerMode(this.props.mode)
                }

                {   
                    this.props.isMiniFilter &&
                    <MiniFilter history={this.props.history} />
                }

            </header>
        );
    }
}

export default Header