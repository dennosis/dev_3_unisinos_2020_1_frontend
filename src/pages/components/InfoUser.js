import React, { Component } from 'react';

import { getUser} from '../../persist'
import Button from './Button.js';



class InfoUser extends Component {

    constructor(props) {
        super(props);
        this.state = {
            user:getUser()||{}
        };
    }



    render() {
        return (
            <>
                { 
                    this.state.user['id'] &&
                    <div className="flex flex--column align-content--flex-start">
                        <span className="font-size-s font--regular color--base-40">Seja bem vindo</span>
                        <div className="flex flex--column">
                            <a href onClick={()=>this.props.openMenu()}  className={`font-size--2xl font--bold color--base-40 ${this.props.addClassNameName}`}>{this.state.user.name}</a>
                            
                            {
                                this.props.isEdit &&
                                <div className="grid grid--row grid-gap--l margin-right--auto">
                                    <a href="/user/true" className="font-size--xs font--bold color--base-30 hover-color--base-40">editar</a>
                                    <a href="/signout" className="font-size--xs font--bold color--base-30 hover-color--base-40">sair</a>
                                </div>
                            }

                        </div>
                    </div>

                }

                { 
                    !this.state.user['id'] &&
                    <div className="grid grid-template-columns--2fr grid-gap--m">
                        <Button href="/signin" text="Login"/>
                        <Button href="/signUp" text="Cadastre-se"/>
                    </div>
                }

            </>
        );
    }
}

export default InfoUser