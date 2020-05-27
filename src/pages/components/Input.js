
import React, { Component } from 'react';


class Input extends Component {
    constructor(props){
        super(props)
        
        this.state={
            value:props.value || "",
            name:props.name
        }
    }

    componentWillReceiveProps(nextProps) {
        if (this.state.value !== nextProps.value) {
            this.setState({
                value: nextProps.value
            });
        }
    }

    handleChange = async (event) =>{

        await this.setState({
            value: event.target.valueAsNumber || event.target.value
        });
        
        if(this.props.onChange){
            let value
            if(this.state.name){
                value = {name:this.state.name, value:this.state.value}
            }else{
                value = event.target.value
            }
            await this.props.onChange(value)
        }
    }



    render(){
        return(
            <input 
                type={this.props.type || "text"}  
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