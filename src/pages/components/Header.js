import React, { Component } from 'react';
import LogoLocadoraBoaViagem from '../../images/LogoLocadoraBoaViagem-title-wb.png';
import Button from './Button.js';

const logoLocadoraBoaViagem = {
    float: 'left',
    margin: 'auto',
    width: '50 %',
    padding: '10px'
};

const buttons = {
    float: 'right',
    position: 'absolute',
    right: '0px',
    padding: '10px',
    height: '81px',
    width: '205px'
};

const btnLogin = {
    float: 'left',
    width: '59px',
    right: '0px',
    padding: '10px'
}
const btnCadastre = {
    float: 'right',
    width: '117px',
    right: '0px',
    padding: '10px'
}


class Header extends Component {
  render() {
        return (
            <header className="l-header position--fixed width--100 background-color--base-10">
                <div style={logoLocadoraBoaViagem}>
                    <img src={LogoLocadoraBoaViagem} alt="Logo" />
                </div>
                <div style={buttons}>
                    <div style={btnLogin}>
                        <Button text="Login" />
                    </div>
                    <div style={btnCadastre}>
                        <Button text="Cadastre-se" />
                    </div>  
                </div>
            </header>
        );
    }
}

export default Header