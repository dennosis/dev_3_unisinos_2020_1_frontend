import React, {Component} from 'react';
import api from '../Api'

import ResumeCar from "./components/ResumeCar";
import ResumeUser from "./components/ResumeUser";
import ResumePayment from "./components/ResumePayment";
import ResumeRentalCompany from "./components/ResumeRentalCompany";

import Layout from "./components/Layout";
import Container from './components/Container';
import Button from './components/Button';
import Title from './components/Title';

const templateColumns = {
	gridTemplateColumns: '5fr 2fr'
};

class Rent extends Component {

    constructor(props) {
        super(props)


        //const {rentId} = this.props.match.params
        const {rentId,cardId} = this.props.match.params
        let baseUrl = '/'
            baseUrl = baseUrl+(rentId?"rent/"+rentId:"")
            baseUrl = baseUrl+(cardId?"/card/"+cardId:"")

        this.state = {
            baseUrl,
            rent:{},
            rentId,
            cardId,
            days:1
        }
    }

    componentWillMount() {
        this.getRent(this.state.rentId)
    }

    getRent(id){
        api.getRentById(id).then(
            res => {

                const dateValidate = this.validateDate(res.data.datePickup, res.data.dateDelivery)
                
                this.setState({
                    rent: res.data || {},
                    days:  dateValidate.days || 1
                })
            },
            error => {
                this.setState({
                    alert: {type:"error", content:"Erro ao Buscar a Reserva"},
                })
            }
        )
    }

	validateDate(dateInit, dateEnd){

		let datePickup = new Date(dateInit)
		let dateDelivery = new Date(dateEnd)

		datePickup =  this.isValidDate(datePickup) ? datePickup : new Date()
		dateDelivery =  this.isValidDate(dateDelivery) ? dateDelivery : new Date()

		if(datePickup.getTime() < (new Date()).getTime()){
			datePickup = new Date()
		}

		if(dateDelivery.getTime() <= datePickup.getTime()){
			dateDelivery = new Date()
			dateDelivery.setDate(datePickup.getDate()+1)
		}

		return {
			dateInit: datePickup.toISOString().substring(0, 10),
			dateEnd: dateDelivery.toISOString().substring(0, 10),
			days: Math.ceil(Math.abs(datePickup - dateDelivery) / (1000 * 60 * 60 * 24))
		}
		
	}


	onSubmit=()=>{
       if(this.state.rent.id){
            if(this.state.cardId){
                api.storePaymentByCard({rentId:this.state.rent.id, cardId: this.state.cardId}).then(
                    res => {
                        this.setState({
                            rent: {...this.state.rent, payment: res.data.id}
                        })
                    },
                    error => {
                        this.setState({
                            alert: {type:"error", content:"Erro ao efetuar pagamento via cartão"},
                        })
                    }
                )
            }else{

                api.storePaymentByBillet({rentId:this.state.rent.id}).then(
                    res => {
                        this.setState({
                            rent: {...this.state.rent, payment: res.data.id}
                        })
                    },
                    error => {
                        this.setState({
                            alert: {type:"error", content:"Erro ao efetuar pagamento via boleto"},
                        })
                    }
                )

            }
        }
	}

    render(){
        return (

            <Layout>

                <Title text="Reserva" />

                <form onSubmit={()=>this.onSubmit()} style={templateColumns} className="grid grid-gap--m">
                    <Container className="grid grid-gap--m margin-bottom--auto">

                        <ResumeRentalCompany editMode={!this.state.rent.payment} baseUrl={this.state.baseUrl} rentalCompanyPickupId={this.state.rent.rentalCompanyPickup} rentalCompanyDeliveryId={this.state.rent.rentalCompanyDelivery} />

                        <div className="grid grid--row grid-gap--m grid-template-columns--2fr">
                            
                            <ResumeUser editMode={!this.state.rent.payment} baseUrl={this.state.baseUrl} />

                            <ResumePayment editMode={!this.state.rent.payment} paymentId={this.state.rent.payment}  rentId={this.state.rentId} cardId={this.state.cardId} />

                        </div>
                        {
                            !this.state.rent.payment &&
                            <Button text={'Confirmar reserva'} addClassName="gradient-color--base-60" />
                        }

                    </Container>
                    
                    <ResumeCar days={this.state.days} carId={this.state.rent.car} />

                </form>
            </Layout>
        );
    }
}

export default Rent;