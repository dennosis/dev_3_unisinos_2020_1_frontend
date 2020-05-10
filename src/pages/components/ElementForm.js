import React, { Component } from 'react';
/**
 * @deprecated ElementForm
 * 
 * @description componente input generico, possui todos os elementos em torno de um input 
 * 
 *  
 */


class ElementForm extends Component {

    render() {

        const Container=this.state.hasContainer ? 'label' :React.Fragment;
        let className=this.state.hasContainer?{className:this.state.classContainer.join(" ")}:{}


        





        return (

            <Container {...className}>




            </Container>
        )
    }
}

export default ElementForm