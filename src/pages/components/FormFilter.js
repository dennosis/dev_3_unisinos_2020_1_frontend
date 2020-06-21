import React, { Component } from 'react';
import api from '../../Api'

import Container from './Container';
import Input from './Input';
import Button from './Button';
import Toggle from './Toggle';
import Select from './Select'


class FormFilter extends Component {

	constructor(props) {
        super(props)
        this.state = {
            values:{
                datePickup: props.values.datePickup || "",
                dateDelivery: props.values.dateDelivery || "",
                rentalCompanyPickup: props.values.rentalCompanyPickup || "",
                rentalCompanyDelivery: props.values.rentalCompanyDelivery || "",
                isAplicationCar:  props.values.isAplicationCar && JSON.parse(props.values.isAplicationCar),
                manufactureYear: parseInt(props.values.manufactureYear) || "",
                modelYear: parseInt(props.values.modelYear) || ""
            },
            otherRentalCompanyDelivery:props.values.rentalCompanyDelivery?true:false,
            optionsRentalCompany:[]

        }
	}

    otherRentalCompanyDelivery(input){
        this.setState({
            [input.name]:input.value,
        })
    }

    componentWillMount() {
        
        api.getRentalCompanies().then(
            res => {
                const options = res.data.map(opt=>{return{value:opt.id,name:opt.name}})
                this.setState({
                    optionsRentalCompany: options || []
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
            alert:{}
        })

    }

    async onSubmit(e){
        if(this.props.onSubmit){

            e.preventDefault();

            const values = this.state.values

            if(!this.state.otherRentalCompanyDelivery){
                delete values["rentalCompanyDelivery"]
            }

            if(this.props.notEmptyValues){
                await Object.keys(values).forEach(key => {
                    if(values[key] === null || values[key] === undefined || values[key] === "") 
                        delete values[key]
                })
            }

            await this.props.onSubmit(values)
        }
    }

    onClear(){
        this.setState({
            datePickup:"",
            dateDelivery:"",
            rentalCompanyPickup:"",
            rentalCompanyDelivery:"",
            isAplicationCar:false,
            manufactureYear:"",
            modelYear:""
        })
        if(this.props.onClear){
            this.props.onClear(this.state)
        }
    }

	render(){
		return (
			<Container addClassName="margin-bottom--auto">
                <form onSubmit={(e)=>this.onSubmit(e)} className="grid grid-gap--xs" >
                    <Input type="date" name="datePickup" value={this.state.values.datePickup} placeholder="Data de Retirada"  onChange={(value)=>this.handleInputChange(value)} />
                    <Input type="date" name="dateDelivery" value={this.state.values.dateDelivery} placeholder="Data de Entrega" onChange={(value)=>this.handleInputChange(value)} />

                    <div className="border-top--2 border-color--base-40"></div>

                    <Select name="rentalCompanyPickup" value={this.state.values.rentalCompanyPickup} firstOption={{name:"Selecione a Localização de Retirada", value:""}} options={this.state.optionsRentalCompany} onChange={(value)=>this.handleInputChange(value)}/>
                    
                    {
                        this.state.otherRentalCompanyDelivery &&
                        <Select name="rentalCompanyDelivery" value={this.state.values.rentalCompanyDelivery} firstOption={{name:"Selecione a Localização de Entrega", value:""}} options={this.state.optionsRentalCompany} onChange={(value)=>this.handleInputChange(value)}/>
                    }
                    <Toggle name="otherRentalCompanyDelivery" value={this.state.otherRentalCompanyDelivery} onChange={(value)=>this.otherRentalCompanyDelivery(value)} text={'Entrega em Outra Localização'} />
                    
                    <div className="border-top--2 border-color--base-40"></div>

                    <Input type="number" name="manufactureYear" value={this.state.values.manufactureYear} placeholder="Ano do Fabricação" onChange={(value)=>this.handleInputChange(value)} />
                    <Input type="number" name="modelYear" value={this.state.values.modelYear} placeholder="Ano de Modelo" onChange={(value)=>this.handleInputChange(value)} />
                    
                    <div className="border-top--2 border-color--base-40"></div>

                    <Toggle name="isAplicationCar" value={this.state.values.isAplicationCar} text={'Veículos para Aplicativos'} onChange={(value)=>this.handleInputChange(value)} />
                    
                    <div className="border-top--2 border-color--base-40"></div>

                    <div className="grid grid-template-columns--2fr grid-gap--2xl">
                        <Button type="submit" text={'Pesquisar'}  addClassName="gradient-color--black" />
                        <Button type="reset" onClick={()=>this.onClear()}  text={'Limpar filtros'} addClassName="gradient-color--black" />
                    </div>
                </form>
			</Container>
	    );
	}
}

export default FormFilter;