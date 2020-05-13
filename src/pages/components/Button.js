
import React, { Component } from 'react';


class Button extends Component {
    render(){
        return(
            <button onClick={this.props.onClick} className="button padding--s border-radius--2xs background-color--base-20">
                {this.props.text}
            </button>
        )
    }
}
  
export default Button;