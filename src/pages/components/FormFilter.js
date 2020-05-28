import React, { Component } from 'react';


import Container from './Container';
import Input from './Input';
import Button from './Button';
import Toggle from './Toggle';


class FormFilter extends Component {

	constructor(props) {
        super(props)
        this.state = {
            datePickup: props.values.datePickup || "",
            dateDelivery: props.values.dateDelivery || "",
            locationPickup: props.values.locationPickup || "",
            locationDelivery: props.values.locationDelivery || "",
            isAplicationCar:  props.values.isAplicationCar && JSON.parse(props.values.isAplicationCar) || false,
            manufactureYear: parseInt(props.values.manufactureYear) || "",
            modelYear: parseInt(props.values.modelYear) || ""
        }
	}

    handleInputChange(input){
        this.setState({[input.name]:input.value})
    }

    async onSubmit(e){
        if(this.props.onSubmit){
            e.preventDefault();

            let values

            if(this.props.notEmptyValues){
                let obj = {...this.state}
                await Object.keys(obj).forEach(key => {
                    if(obj[key] === null || obj[key] === undefined || obj[key] === "") 
                        delete obj[key]
                })
                values = obj
            }else{
                values = this.state
            }

            await this.props.onSubmit(values)
        }
    }

    onClear(){
        this.setState({
            datePickup:"",
            dateDelivery:"",
            locationPickup:"",
            locationDelivery:"",
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
                    <Input name="datePickup" value={this.state.datePickup} placeholder="Data de Retirada"  onChange={(value)=>this.handleInputChange(value)} />
                    <Input name="dateDelivery" value={this.state.dateDelivery} placeholder="Data de Entrega" onChange={(value)=>this.handleInputChange(value)} />

                    <div className="border-top--2 border-color--base-40"></div>

                    <Input name="locationPickup" value={this.state.locationPickup} placeholder="Localização de Retirada" onChange={(value)=>this.handleInputChange(value)} />
                    <Input name="locationDelivery" value={this.state.locationDelivery} placeholder="Localização de Entrega" onChange={(value)=>this.handleInputChange(value)} />
                    
                    <Toggle text={'Entrega em Outra Localização'} />
                    
                    <div className="border-top--2 border-color--base-40"></div>

                    <Input type="number" name="manufactureYear" value={this.state.manufactureYear} placeholder="Ano do Fabricação" onChange={(value)=>this.handleInputChange(value)} />
                    <Input type="number" name="modelYear" value={this.state.modelYear} placeholder="Ano de Modelo" onChange={(value)=>this.handleInputChange(value)} />
                    
                    <div className="border-top--2 border-color--base-40"></div>

                    <Toggle name="isAplicationCar" value={this.state.isAplicationCar} text={'Veículos para Aplicativos'} onChange={(value)=>this.handleInputChange(value)} />
                    
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