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



    async componentWillReceiveProps(nextProps) {
        const {rentId,cardId} = nextProps.match.params

        if (this.state.rentId !== rentId) {
            await this.getRent(rentId)
            
            let baseUrl = '/'
                baseUrl = baseUrl+(rentId?"rent/"+rentId:"")
                baseUrl = baseUrl+(cardId?"/card/"+cardId:"")

            await this.setState({
                baseUrl,
                cardId,
                rentId
            })

        }
    }


    getRent(id){
        api.getRentById(id).then(
            async res => {

                const dateValidate = await this.validateDate(res.data.datePickup, res.data.dateDelivery)
                
                await this.setState({
                    rent: res.data || {},
                    days:  dateValidate.days || 1
                })
            },
            error => {
                this.setState({
                    rent: {},
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

    isValidDate(date) {
		return date instanceof Date && !isNaN(date);
	}

	onSubmit=(e)=>{

        e.preventDefault();

        if(this.state.rent.id){
            if(this.state.cardId){
                api.storePaymentByCard({rentId:this.state.rent.id, cardId: this.state.cardId}).then(
                    res => {
                        this.setState({
                            rent: {...this.state.rent, paymentId: res.data.id},
                            alert: {type:"success", content:"Reserva Confirmada"}
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
                            rent: {...this.state.rent, paymentId: res.data.id}, 
                            alert: {type:"success", content:"Reserva Confirmada"}

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

            <Layout alert={this.state.alert} >

                <Title text="Reserva" />
                {

                    this.state.rent.id &&
                    
                    <form onSubmit={(e)=>this.onSubmit(e)} style={templateColumns} className="grid grid-gap--m">
                        <Container className="grid grid-gap--m margin-bottom--auto">

                            <ResumeRentalCompany editMode={!this.state.rent.paymentId} baseUrl={this.state.baseUrl} dateDelivery={this.state.rent.dateDelivery} datePickup={this.state.rent.datePickup} rentalCompanyPickupId={this.state.rent.rentalCompanyPickupId} rentalCompanyDeliveryId={this.state.rent.rentalCompanyDeliveryId} />

                            <div className="grid grid--row grid-gap--m grid-template-columns--2fr">
                                
                                <ResumeUser editMode={!this.state.rent.paymentId} baseUrl={this.state.baseUrl} />

                                <ResumePayment editMode={!this.state.rent.paymentId} totalAmount={this.state.rent.totalAmount} paymentId={this.state.rent.paymentId}  rentId={this.state.rentId} cardId={this.state.cardId} />

                            </div>
                            {
                                !this.state.rent.paymentId &&
                                <Button type="submit" text={'Confirmar reserva'} addClassName="gradient-color--base-60 background-color--base-75" />
                            }

                        </Container>
                        
                        <ResumeCar days={this.state.days} carId={this.state.rent.carId} />

                    </form>
                    
                }
            
            </Layout>
        );
    }
}

export default Rent;