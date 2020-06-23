import React, { Component } from 'react';
import { Link }  from 'react-router-dom'

import Img from './Img';
import LogoLocadoraBoaViagem from '../../images/LogoLocadoraBoaViagem-title-wb.png';

import MenuUser from './MenuUser'
import InfoUser from './InfoUser'



class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }


    openMenu=(isOpen)=>{
        this.setState({
            menu:(isOpen!==undefined)?isOpen:!this.state.menu
        })
    }

    headerMode=(mode)=>{
        switch(mode){
            case 1:
                return (
                    <section className="l-content flex justify-content--center align-items--center ">
                        <Link to="/">
                            <Img src={LogoLocadoraBoaViagem} alt="Logo" />
                        </Link>
                    </section>
                )

            default:
                return (
                    <section className="l-content flex justify-content--space-between align-items--center ">
                        <Link to="/">
                            <Img src={LogoLocadoraBoaViagem} alt="Logo" />
                        </Link>

                        <InfoUser openMenu={()=>this.openMenu()} />

                    </section>
                )


        }
    }

    render() {
        return (
            <>
                {
                    this.state.menu &&
                    <div onClick={()=>this.openMenu()} style={{background: 'rgba(0,0,0, 0.2)'}} className="position--fixed z-index--10 height--100 width--100 top--0 left--0"></div>
                }
                <header className="">

                    {
                        this.headerMode(this.props.mode)
                    }

                </header>

                
                <MenuUser isOpen={this.state.menu} openMenu={()=>this.openMenu()} />
                
            </>
        );
    }
}

export default Header