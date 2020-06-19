import React, {Component} from 'react';
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
            addressRentalCompanyPickup:{},
            addressRentalCompanyDelivery:{},
        }
    }

    componentWillMount() {
        
        if(this.props.rentalCompanyPickupId){
            this.getRentalCompany(this.props.rentalCompanyPickupId,"rentalCompanyPickup")
            this.getAddress(this.state.rentalCompanyPickup.address, "addressRentalCompanyPickup")

            if(this.props.rentalCompanyPickupId === this.props.rentalCompanyDeliveryId){
                this.setState({
                    rentalCompanyDelivery: this.state.rentalCompanyPickup,
                    addressRentalCompanyDelivery: this.state.addressRentalCompanyPickup
                })
            }else{
                this.getRentalCompany(this.props.rentalCompanyDeliveryId,"rentalCompanyDelivery")
                this.getAddress(this.state.rentalCompanyDelivery.address, "addressRentalCompanyDelivery")
            }
        }

    }


    getRentalCompany(id, index){
        api.getRentalCompanyById(id).then(
            res => {
                this.setState({
                    [index]: res.data || {}
                })
            },
            error => {}
        )
    }

    getAddress(id, index){
        api.getAddressById(id).then(
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

                <div className="grid grid--row grid-gap--m ">

                    <section className="flex flex--column" >

                        <Title tag="h3" text="Retirada" />

                        <div className="font--xs grid grid-template-columns--2fr grid-gap-row--2xs grid-gap-column--xl padding--2xs padding-bottom--5xl">
                            <span>Nome:</span>
                            <span className="font--bold">{this.state.rentalCompanyPickup.name}</span>

                            <span>Celular:</span>
                            <span className="font--bold">{this.state.rentalCompanyPickup.cellphone}</span>

                            <span>Telefone:</span>
                            <span className="font--bold">{this.state.rentalCompanyPickup.phone}</span>
                            
                            <span>Email:</span>
                            <span className="font--bold">{this.state.rentalCompanyPickup.email}</span>
                        
                            <span>Cep:</span>
                            <span className="font--bold">{this.state.addressRentalCompanyPickup.cep}</span>
                            
                            <span>Address:</span>
                            <span className="font--bold">{this.state.addressRentalCompanyPickup.address}</span>
                                                 
                            <span>Numero:</span>
                            <span className="font--bold">{this.state.addressRentalCompanyPickup.number}</span>
                                                 
                            <span>Bairro:</span>
                            <span className="font--bold">{this.state.addressRentalCompanyPickup.neighborhood}</span>
                                                 
                            <span>City:</span>
                            <span className="font--bold">{this.state.addressRentalCompanyPickup.City}</span>
                        
                            <span>Uf:</span>
                            <span className="font--bold">{this.state.addressRentalCompanyPickup.uf}</span>
                       
                        </div>

                    </section>



                    <section className="flex flex--column" >

                        <Title tag="h3" text="Devolução" />

                        <div className="font--xs grid grid-template-columns--2fr grid-gap-row--2xs grid-gap-column--xl padding--2xs padding-bottom--5xl">
                            <span>Nome:</span>
                            <span className="font--bold">{this.state.rentalCompanyDelivery.name}</span>

                            <span>Celular:</span>
                            <span className="font--bold">{this.state.rentalCompanyDelivery.cellphone}</span>

                            <span>Telefone:</span>
                            <span className="font--bold">{this.state.rentalCompanyDelivery.phone}</span>
                            
                            <span>Email:</span>
                            <span className="font--bold">{this.state.rentalCompanyDelivery.email}</span>
                        
                            <span>Cep:</span>
                            <span className="font--bold">{this.state.addressRentalCompanyDelivery.cep}</span>
                            
                            <span>Address:</span>
                            <span className="font--bold">{this.state.addressRentalCompanyDelivery.address}</span>
                                                 
                            <span>Numero:</span>
                            <span className="font--bold">{this.state.addressRentalCompanyDelivery.number}</span>
                                                 
                            <span>Bairro:</span>
                            <span className="font--bold">{this.state.addressRentalCompanyDelivery.neighborhood}</span>
                                                 
                            <span>City:</span>
                            <span className="font--bold">{this.state.addressRentalCompanyDelivery.City}</span>
                        
                            <span>Uf:</span>
                            <span className="font--bold">{this.state.addressRentalCompanyDelivery.uf}</span>
                        
                        </div>

                    </section>

                </div>


                {
                    this.props.editMode &&
                    <Button text={"alterar"} href={this.state.linkTo} addClassName="gradient-color--black margin-top--auto"/>
                }

            </Container>
        );
    }
}

export default ResumeRentalCompany;