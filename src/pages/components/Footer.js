import React, { Component } from 'react';
import Img from './Img';

import LogoLocadoraBoaViagem from '../../images/LogoLocadoraBoaViagem-wb.png';
import LogoTheTravellersTI from '../../images/LogoTheTravellersTI-wb.png';

class Footer extends Component {
    render() {
        return (
            <footer className="l-footer margin-top--auto position--relative grid justify-content--center align-items--center padding--m border-top--2 border-color--base-20" >
                    
                <Img src={LogoLocadoraBoaViagem} alt="Logo" />

                <Img src={LogoTheTravellersTI} alt="Logo" addClassName="position--absolute justify-self--flex-end padding--m" />
       
            </footer>
        );
    }
}

export default Footer