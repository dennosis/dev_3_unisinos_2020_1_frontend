import React, { Component } from 'react';

 
export default class Toggle extends Component {
    constructor(props){
        super(props)
        this.state={
            value:false
        }
    }

    handleChange = (event) =>{
        event.preventDefault();
        this.setState({
            value: !this.state.value
        });
        if(this.props.onChange)
            this.props.onChange(this.state.value)
    }

    render() {
        let active=""

        if(this.state.value){
            active="is-active background-color--base-30"
        }else{
           // active="background-color--base-20"
        }


        return (
            <label className="flex align-items--center">

                <div className={`toggle shadow-neumorphic--inset ${active}`} >
                    <span onClick={this.handleChange} className={`toggle__button shadow-neumorphic background-color--base-10`}></span>
                </div>

                {
                    this.props.text &&
                    <label className="margin-left--m">{this.props.text}</label>
                }
                

            </label>
        );
    }
}