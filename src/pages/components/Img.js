import React, { Component } from 'react';


/**
 * @deprecated Img
 * 
 * @description componente de imagem com container para controle da image 
 * 
 * @param {string} src
 * @param {string} alt
 * @param {number} mode altera o modo de comportamento da img dentro do container, como defalt é 1  
 * 
 * @param {px} width largura do container  
 * @param {px} height altura do container 
 * 
 */


class Img extends Component {
    constructor(props){
        super(props)

        let classImg=""
        let classContainer=`flex align-items--center justify-content--center overflow--hidden position--relative ${props.addClassName}`

        switch(props.mode){
            case 1:
                classImg="max-height--100 max-width--100"
                break

            case 2:
                classImg="min-height--100 min-width--100"
                break

            case 3:
                classImg="max-height--100 min-width--100"
                break

            case 4:
                classImg="min-height--100 max-width--100"
                break

            default:
                classImg="max-height--100 max-width--100"
                break
        }

        let style={}
    
        if(this.props.width)
            style['width'] = this.props.width 

        if(this.props.height)
            style['height'] = this.props.height 

        this.state={
            classImg,
            classContainer,
            style: style,
            src: props.src || "#",
            alt: props.alt || ""
        }  
    }

    render() {

        return (
            <div style={this.state.style} className={this.state.classContainer} >
                <img src={this.state.src} alt={this.state.alt} className={this.state.classImg} />
            </div>
        )
    }
}

export default Img