import React, { Component } from 'react';
import api from '../../Api'

import Title from './Title';
import ListCarItem from './ListCarItem';

import InfoUser from './InfoUser'


class MenuUser extends Component {

    constructor(props) {
        super(props);
        this.state = {
            rents:[]
        };
    }

    componentWillMount() {
        api.getRents().then(
            res => {
                this.setState({
                    rents:res.data.rents
                })
            },
            error => {}
        )

    }

    render() {

        const style = !this.props.isOpen?{display:"none"}:{}

        return (
            <section style={style} className="l-menu-user position--fixed z-index--100 right--0 top--0 height--100 flex flex--column padding-top--6xl padding-right--2xl padding-left--2xl background-color--base-10">
                
                <InfoUser isEdit addClassNameName='font-size--3xl margin-bottom--s' openMenu={()=>this.props.openMenu()}/>

                {
                    this.state.rents.length > 0 &&
                    <>
                        <Title tag="h3" addClassName="margin-top--xl" text="Suas Reservas" />
                        <div className="flex overflow--auto" >
                            <div className="grid grid-gap--m">
                                {
                                    this.state.rents.map((rent)=><ListCarItem rent={rent}/>)
                                }
                            </div>
                        </div>
                    </>
                }

                {
                    this.state.rents.length === 0 &&
                    
                    <span className="margin-top--6xl color--base-30 font-size--m">Não há reservas cadastradas</span>
                
                }
            </section>
        );
    }
}

export default MenuUser