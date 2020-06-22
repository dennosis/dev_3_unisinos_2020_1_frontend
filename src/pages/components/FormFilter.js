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
                isAplicationCar:  (props.values.isAplicationCar && JSON.parse(props.values.isAplicationCar)) || true,
                manufactureYear: parseInt(props.values.manufactureYear) || "",
                modelYear: parseInt(props.values.modelYear) || "",
                cost: parseFloat(props.values.cost) || "",
                passengers: parseInt(props.values.passengers) || "",
                kilometrage: parseInt(props.values.kilometrage) || ""
            },
            otherRentalCompanyDelivery:props.values.rentalCompanyDelivery?true:false,
            refinedFilter:false,
            optionsRentalCompany:[]

        }
	}

    refinedFilter(input){
        this.setState({
            [input.name]:input.value,
        })
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

            const values = {...this.state.values}

            if(this.props.notEmptyValues){
                await Object.keys(values).forEach(key => {
                    if(values[key] === null || values[key] === undefined || values[key] === "") 
                        delete values[key]
                })
            }

            if(!this.state.otherRentalCompanyDelivery){
                delete values["rentalCompanyDelivery"]
            }

            if(!this.state.refinedFilter){
                delete values["manufactureYear"]
                delete values["modelYear"]
                delete values["cost"]
                delete values["passengers"]
                delete values["kilometrage"]
                delete values["isAplicationCar"]
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

                    <Select name="rentalCompanyPickup" value={this.state.values.rentalCompanyPickup} firstOption={{name:"Selecione a Localização de Retirada", value:""}} options={this.state.optionsRentalCompany} onChange={(value)=>this.handleInputChange(value)}/>
                    
                    {
                        this.state.otherRentalCompanyDelivery &&
                        <Select name="rentalCompanyDelivery" value={this.state.values.rentalCompanyDelivery} firstOption={{name:"Selecione a Localização de Entrega", value:""}} options={this.state.optionsRentalCompany} onChange={(value)=>this.handleInputChange(value)}/>
                    }
                    <Toggle name="otherRentalCompanyDelivery" value={this.state.otherRentalCompanyDelivery} onChange={(value)=>this.otherRentalCompanyDelivery(value)} text={'Entrega em Outra Localização'} />
                    
                    <div className="border-top--1 border-color--base-20 margin-top--xs padding-top--xs padding-bottom--xs">

                        <Toggle name="refinedFilter" value={this.state.refinedFilter} onChange={(value)=>this.refinedFilter(value)} text={'Filtro Refinado'} />

                        {
                            this.state.refinedFilter &&
                            <div className="border--1 border-radius--xs border-color--base-20 padding--m grid grid-gap--xs margin-top--xs">

                                <Input mask="9999" maskChar={null} name="manufactureYear" value={this.state.values.manufactureYear} placeholder="Ano do Fabricação" onChange={(value)=>this.handleInputChange(value)} />
                                <Input mask="9999" maskChar={null} name="modelYear" value={this.state.values.modelYear} placeholder="Ano de Modelo" onChange={(value)=>this.handleInputChange(value)} />
                                
                                <Input mask="R$ 999" maskChar={null} name="cost" value={this.state.values.cost} placeholder="Preço/dia Máximo" onChange={(value)=>this.handleInputChange(value)} />
                                
                                <Input type="number" max="99999999" name="kilometrage" value={this.state.values.kilometrage} placeholder="Quilometragem Máxima" onChange={(value)=>this.handleInputChange(value)} />
                                
                                <Input mask="9" maskChar={null} name="passengers" value={this.state.values.passengers} placeholder="Passageiros" onChange={(value)=>this.handleInputChange(value)} />

                                <Toggle name="isAplicationCar" value={this.state.values.isAplicationCar} text={'Veículos para Aplicativos'} onChange={(value)=>this.handleInputChange(value)} />
                                
                            </div>
                        }
                    </div>

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