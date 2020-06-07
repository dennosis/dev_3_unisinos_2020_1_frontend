
import React, { Component } from 'react';


class Select extends Component {
    constructor(props){
        super(props)
        
        this.state={
            value: props.value?props.value: "",
            name:props.name,
            options: props.options || [],
            firstOption: props.firstOption || false,
            error:[]
        }
        this.reference = React.createRef();
    }

    async componentWillReceiveProps(nextProps) {
        //await console.log(nextProps.value)
        let trigger = false
        const value = nextProps.value || ""
        if (this.state.value !== value) {
            await this.setState({
                value:value
            });
            //trigger = true
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

        if (this.state.options !== nextProps.options) {
            let value = nextProps.options.map(item=>item.value).includes(this.state.value) ? this.state.value: ""
            await this.setState({
                options: nextProps.options,
                value
            });
            trigger = true
        }

        if(trigger){
            //await this.reference.current.dispatchEvent(new Event('change',{bubbles: true}));
        }
    }

    handleChange = async (event) =>{
        await this.setState({
            value: event.target.valueAsNumber || event.target.value,
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
            <label>
                <select 
                    name={this.props.name} 
                    id={this.props.id} 
                    value={this.state.value} 
                    placeholder={this.props.placeholder || "..."}
                    onChange={this.handleChange} 
                    ref={this.reference}
                    className="select shadow-neumorphic--inset padding--s border-radius--2xs"
                >
                    { 
                        this.state.firstOption &&
                        <option default value={ this.state.firstOption.value} className="background-color--base-10" >{ this.state.firstOption.name}</option>
                    }
                    {    
                        this.state.options.map((opt, index) => {
                            return  <option key={index} value={opt.value} className="background-color--base-10" >{opt.name}</option>
                        })
                    }
                </select>
                {
                    this.state.error.map((value, index) => {
                        return  <span className="font-size--2xs color--danger-10 padding-left--s" key={index} >{value}</span>
                    })
                }
            </label>
        )
    }
}
  
export default Select;