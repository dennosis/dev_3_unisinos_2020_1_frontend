import React, {Component} from 'react';
import { formatPhone, formatDate, formatCep } from  '../../utils'

import api from '../../Api'

import Container from './Container';
import Button from './Button';
import Title from './Title';


class ResumeRentalCompany extends Component {

    constructor(props) {
        super(props)

        this.state = {
            rentalCompanyPickup:{},
            rentalCompanyDelivery:{},
            datePickup:this.props.datePickup,
            dateDelivery:this.props.dateDelivery
        }
    }

    componentWillMount() {
        if(this.props.rentalCompanyPickupId){
            this.findRentalCompanies(this.props)
        }
    }

    componentWillReceiveProps(nextProps){
        if (this.state.rentalCompanyPickup.id !== nextProps.rentalCompanyPickupId) {
            this.findRentalCompanies(nextProps)
        }

        if (this.state.datePickup !== nextProps.datePickup) {
            this.setState({
                datePickup: nextProps.datePickup
            })
        }

        if (this.state.dateDelivery !== nextProps.dateDelivery) {
            this.setState({
                dateDelivery: nextProps.dateDelivery
            })
        }
    }

    async findRentalCompanies(props){
            const {rentalCompanyPickupId, rentalCompanyDeliveryId} = props
            if(rentalCompanyPickupId){
                await this.getRentalCompany(rentalCompanyPickupId,"rentalCompanyPickup")

                if(rentalCompanyPickupId === rentalCompanyDeliveryId){
                    await this.setState({
                        rentalCompanyDelivery: this.state.rentalCompanyPickup,
                    })
                }else{
                    await this.getRentalCompany(rentalCompanyDeliveryId,"rentalCompanyDelivery")
                }
            }
        
    }
    

    async getRentalCompany(id, index){
        await api.getRentalCompanyById(id).then(
            res => {
                this.setState({
                    [index]: res.data || {}
                })
            },
            error => {}
        )
    }

    async getAddress(id, index){
        await api.getAddressById(id).then(
            res => {
                this.setState({
                    [index]: res.data || {}
                })
            },
            error => {}
        )
    }




    render(){
        
        return (
            <Container>
                {
                    this.state.rentalCompanyPickup.id &&
                
                    <div className="grid grid--row grid-gap--m ">

                        <section className="flex flex--column" >

                            <Title tag="h3" text="Retirada" />

                            <div className="font--xs grid grid-template-columns--2fr grid-gap-row--2xs grid-gap-column--xl padding--2xs padding-bottom--5xl margin-right--auto">
                                
                                {
                                    this.state.datePickup && 
                                    <>
                                    <span>Data:</span>
                                    <span className="font--bold">{formatDate(this.state.datePickup)}</span>
                                    </>
                                }

                                <span>Nome:</span>
                                <span className="font--bold">{this.state.rentalCompanyPickup.name}</span>

                                <span>Celular:</span>
                                <span className="font--bold">{formatPhone(this.state.rentalCompanyPickup.cellphone)}</span>
                                
                                {
                                    this.state.rentalCompanyPickup.phone && 
                                    <>
                                    <span>Telefone:</span>
                                    <span className="font--bold">{formatPhone(this.state.rentalCompanyPickup.phone)}</span>
                                    </>
                                }

                                <span>Email:</span>
                                <span className="font--bold">{this.state.rentalCompanyPickup.email}</span>
                            
                                <span>Cep:</span>
                                <span className="font--bold">{formatCep(this.state.rentalCompanyPickup.cep)}</span>
                                
                                <span>Address:</span>
                                <span className="font--bold">{this.state.rentalCompanyPickup.address}</span>
                                                    
                                <span>Numero:</span>
                                <span className="font--bold">{this.state.rentalCompanyPickup.number}</span>
                                                    
                                <span>Bairro:</span>
                                <span className="font--bold">{this.state.rentalCompanyPickup.neighborhood}</span>
                                                    
                                <span>Cidade:</span>
                                <span className="font--bold">{this.state.rentalCompanyPickup.city}</span>
                            
                                <span>Estado:</span>
                                <span className="font--bold">{this.state.rentalCompanyPickup.uf}</span>
                        
                            </div>

                        </section>



                        <section className="flex flex--column" >

                            <Title tag="h3" text="Devolução" />

                            <div className="font--xs grid grid-template-columns--2fr grid-gap-row--2xs grid-gap-column--xl padding--2xs padding-bottom--5xl margin-right--auto">
                                {
                                    this.state.dateDelivery && 
                                    <>
                                    <span>Data:</span>
                                    <span className="font--bold">{formatDate(this.state.dateDelivery)}</span>
                                    </>
                                }
                                
                                <span>Nome:</span>
                                <span className="font--bold">{this.state.rentalCompanyDelivery.name}</span>

                                <span>Celular:</span>
                                <span className="font--bold">{formatPhone(this.state.rentalCompanyDelivery.cellphone)}</span>

                                {
                                    this.state.rentalCompanyDelivery.phone && 
                                    <>
                                    <span>Telefone:</span>
                                    <span className="font--bold">{formatPhone(this.state.rentalCompanyDelivery.phone)}</span>
                                    </>
                                }
            
                                <span>Email:</span>
                                <span className="font--bold">{this.state.rentalCompanyDelivery.email}</span>
                            
                                <span>Cep:</span>
                                <span className="font--bold">{formatCep(this.state.rentalCompanyDelivery.cep)}</span>
                                
                                <span>Address:</span>
                                <span className="font--bold">{this.state.rentalCompanyDelivery.address}</span>
                                                    
                                <span>Numero:</span>
                                <span className="font--bold">{this.state.rentalCompanyDelivery.number}</span>
                                                    
                                <span>Bairro:</span>
                                <span className="font--bold">{this.state.rentalCompanyDelivery.neighborhood}</span>
                                                    
                                <span>Cidade:</span>
                                <span className="font--bold">{this.state.rentalCompanyDelivery.city}</span>
                            
                                <span>Estado:</span>
                                <span className="font--bold">{this.state.rentalCompanyDelivery.uf}</span>
                            
                            </div>

                        </section>

                    </div>

                }

                {
                    this.props.editMode && false &&
                    <Button text={"alterar"} to={this.state.linkTo} addClassName="gradient-color--black margin-top--auto"/>
                }
                

            </Container>
        );
    }
}

export default ResumeRentalCompany;