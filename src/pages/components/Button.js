
import React, { Component } from 'react';


class Button extends Component {
    render(){
        return(
            <button onClick={this.props.onClick} className={`button shadow-neumorphic padding--s border-radius--2xs hover-gradient-color--white ${this.props.addClassName}` }>
                {this.props.text}
            </button>
        )
    }
}
  
export default Button;