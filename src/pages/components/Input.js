
import React, { Component } from 'react';


class Input extends Component {
    constructor(props){
        super(props)
        this.state={
            value:props.value
        }
    }

    componentWillReceiveProps(nextProps) {
        if (this.state.value !== nextProps.value) {
            this.setState({
                value: nextProps.value
            });
        }
    }

    handleChange = (event) =>{
        event.preventDefault();
        this.setState({
            value: event.target.value
        });
        if(this.props.onChange)
            this.props.onChange(this.state.value)
    }



    render(){
        return(
            <input 
                type={this.props.value || "text"}  
                name={this.props.name} 
                id={this.props.id} 
                value={this.state.value} 
                placeholder={this.props.placeholder || "..."}
                onChange={this.handleChange} 
                
                className="input shadow-neumorphic--inset padding--s border-radius--2xs"
            />
        )
    }
}
  
export default Input;