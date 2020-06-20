import React, { Component } from 'react';
import Img from './Img';

import LogoLocadoraBoaViagem from '../../images/LogoLocadoraBoaViagem-wb.png';
import LogoTheTravellersTI from '../../images/LogoTheTravellersTI-wb.png';

class Footer extends Component {
    render() {
        return (
            <footer className="l-footer margin-top--auto padding--m border-top--2 border-color--base-20" >
                <section className="l-content grid grid--row justify-content--space-between align-items--center ">
                    <div></div>
                    
                    <Img src={LogoLocadoraBoaViagem} alt="Logo" />

                    <Img src={LogoTheTravellersTI} alt="Logo"/>

                </section>

            </footer>
        );
    }
}

export default Footer