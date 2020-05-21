import React, { Component } from 'react';
import Button from './Button.js';
import Img from './Img';
import LogoLocadoraBoaViagem from '../../images/LogoLocadoraBoaViagem-title-wb.png';


class Header extends Component {
  render() {
        return (
            <header className="l-header position--fixed width--100 flex justify-content--space-between align-items--center padding--m background-color--base-10">
                    
                <Img src={LogoLocadoraBoaViagem} alt="Logo" />

                <div className="grid grid-template-columns--2fr grid-gap--m">
                    <Button text="Login" />
                    <Button text="Cadastre-se" />
                </div>
            </header>
        );
    }
}

export default Header