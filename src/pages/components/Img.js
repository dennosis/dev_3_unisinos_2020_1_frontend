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
        let classContainer="flex align-items--center justify-content--center overflow--hidden position--relative"

        switch(props.mode){
            case 1:
                imgClass="height-max--100 width-max--100"
                break

            case 2:
                imgClass="height-min--100 width-min--100"
                break

            case 3:
                imgClass="height-max--100 width-min--100"
                break

            case 4:
                imgClass="height-min--100 width-max--100"
                break

            default:
                imgClass="height-max--100 width-max--100"
                break
        }

        let style={}
    
        if(this.state.width)
            style['width'] = this.state.width 

        if(this.state.height)
            style['height'] = this.state.height 

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