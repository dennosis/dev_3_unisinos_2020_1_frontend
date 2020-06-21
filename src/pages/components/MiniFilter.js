import React, { Component } from 'react';
import queryString from 'query-string'

import api from '../../Api'
import Input from './Input';
import Button from './Button';
import Select from './Select'

class MiniFilter extends Component {

    constructor(props){
        super(props)
        this.state = {
            values:{},
            optionsLocal:[]
        }
    }
    
    componentWillMount() {
        
        api.getRentalCompanies().then(
            res => {
                const options = res.data.map(opt=>{return{value:opt.id,name:opt.name}})
                this.setState({
                    optionsLocal: options || []
                })
            },
            error => {
                this.setState({
                    //errors:error.response.data.errors
                })
            }
        )
        
    }

    handleInputChange(input){
        this.setState({
            values:{
                ...this.state.values,
                [input.name]:input.value,
            },
            errors:{
                ...this.state.errors,
                [input.name]:undefined
            },
        })
    }

    async onSubmit(e){
        e.preventDefault();

        const {rentalCompanyPickup, datePickup, dateDelivery} = this.state.values
        
        const values = {rentalCompanyPickup, datePickup, dateDelivery}

        await Object.keys(values).forEach(key => {
            if(values[key] === null || values[key] === undefined || values[key] === "") 
                delete values[key]
        })

        if(Object.keys(values).length!==3){
            return
        }

        const stringified = await queryString.stringify(values);
        await this.props.history.push(`/search?${stringified}`);
        
    }

    render(){
        return(
            <section className="margin-top--xs">
                <form className="l-content grid grid-gap--m grid--row"  onSubmit={(e)=>this.onSubmit(e)}>
                    <Select name="rentalCompanyPickup" value={this.state.values.rentalCompanyPickup} firstOption={{name:"Selecione um local", value:""}} options={this.state.optionsLocal} onChange={(value)=>this.handleInputChange(value)}/>
                    <Input type="date" name="datePickup" value={this.state.values.datePickup} placeholder="Data de Retirada"  onChange={(value)=>this.handleInputChange(value)} />
                    <Input type="date" name="dateDelivery" value={this.state.values.dateDelivery} placeholder="Data de Entrega" onChange={(value)=>this.handleInputChange(value)} />
                    <Button type="submit" text="Buscar"/>
                </form>
            </section>
        )
    }

}

export default MiniFilter