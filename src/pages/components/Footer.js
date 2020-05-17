import React, { Component } from 'react';
import Content from './Content.js';
import LogoLocadoraBoaViagem from '../../images/LogoLocadoraBoaViagem-wb.png';
import LogoTheTravellersTI from '../../images/LogoTheTravellersTI-wb.png';

const logoLocadoraBoaViagem = {
    float: 'right',
    height: '54px',
    margin: 'auto',
    width: '50 %',
    padding: '10px'
};

const logoTheTravellersTI = {
    float: 'right',
    position: 'absolute',
    right: '0px',
    padding: '10px'
};

class Footer extends Component {
    render() {
        return (
            <footer className="l-footer margin-top--auto border-top--2 border-color--base-20" >
                <Content>
                    <div style={logoLocadoraBoaViagem}>
                        <img src={LogoLocadoraBoaViagem} alt="Logo" />
                    </div>
                    <div style={logoTheTravellersTI}>
                        <img src={LogoTheTravellersTI} alt="Logo" />
                    </div>
                </Content>            
            </footer>
        );
    }
}

export default Footer