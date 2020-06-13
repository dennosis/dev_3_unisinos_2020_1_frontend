
import React, { Component } from 'react';


class Input extends Component {
    constructor(props){
        super(props)
        
        this.state={
            value: props.value || "",
            name:props.name || "",
            error:[]
        }
    }

    componentWillReceiveProps(nextProps) {
        const value = nextProps.value || ""

        if (this.state.value !== value) {
            this.setState({
                value
            });
        }
        if (this.state.error !== nextProps.error) {
            let error
            if(nextProps.error){
                error = Array.isArray(nextProps.error)?nextProps.error:[nextProps.error]
            }else{
                error = []
            }

            this.setState({
                error
            });
            
        }
    }

    handleChange = async (event) =>{

        await this.setState({
            value: this.props.type==="number"?event.target.valueAsNumber:event.target.value,
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
            <label className="flex flex--column flex__item--grow">
                <input 
                    type={this.props.type || "text"}  
                    name={this.state.name} 
                    id={this.props.id} 
                    value={this.state.value} 
                    placeholder={this.props.placeholder || "..."}
                    onChange={this.handleChange} 
                    max={this.props.max}
                    autoComplete={this.props.autocomplete||"on"}
                    className="input shadow-neumorphic--inset padding--xs border-radius--2xs"
                />
                {
                    this.state.error.map((value, index) => {
                        return  <span className="font-size--2xs color--danger-10 padding-left--s" key={index} >{value}</span>
                    })
                }

            </label>
        )
    }
}
  
export default Input;