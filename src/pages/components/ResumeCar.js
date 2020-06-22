import React, {Component} from 'react';
import api from '../../Api'

import Container from './Container';
import Img from './Img';
import Title from './Title';


class ResumeCar extends Component {

    constructor(props) {
        super(props)

        this.state = {
            days : this.props.days || 1
        }
    }

    componentWillMount() {
        if(this.props.carId){
            this.getCar(this.props.carId)
        }
    }

    componentWillReceiveProps(nextProps){

        if(this.state.id !== nextProps.carId){
            this.getCar(nextProps.carId)
        }

        if(this.state.days !== nextProps.days){
            this.setState({
                days:nextProps.days
            })
        }
    }

     getCar(id){
        api.getCarById(id).then(
            async res => {
                await this.setState({
                    ...res.data
                })
            },
            error => {}
        )
    }



    render(){
        return (
            <Container>
                
                <Title tag="h3" text="Veiculo" />

                <Img mode={1} addClassName="border-radius--xs margin-bottom--l" src={this.state.image} />
                
                <Title tag="h3" text={`${this.state.brand} ${this.state.model} ${this.state.modelYear}`} />

                {
                    this.state.description &&
                    <span className=""> 
                        { this.state.description } 
                    </span>
                }

                <section className="font--xs grid grid-gap--2xs padding--2xs margin-bottom--l margin-top--l">

                    <div className="flex justify-content--space-between">
                        <span>Ano de fabricação</span>
                        <span className="font--bold">{this.state.manufactureYear}</span>
                    </div>

                    <div className="flex justify-content--space-between">
                        <span>Quilometragem</span>
                        <span className="font--bold">{this.state.kilometrage}</span>
                    </div>

                    <div className="flex justify-content--space-between">
                        <span>Placa</span>
                        <span className="font--bold">{this.state.board}</span>
                    </div>

                    <div className="flex justify-content--space-between">
                        <span>Cor</span>
                        <span className="font--bold">{this.state.color}</span>
                    </div>

                    <div className="flex justify-content--space-between">
                        <span>Numero de passageiros</span>
                        <span className="font--bold">{this.state.passengers}</span>
                    </div>

                    <div className="flex justify-content--space-between">
                        <span>Porta malas</span>
                        <span className="font--bold">{this.state.luggages}L</span>
                    </div>

                    <div className="flex justify-content--space-between">
                        <span>Ar condicionado</span>
                        <span className="font--bold">{this.state.airConditioner ? "sim" : "não"}</span>
                    </div>

                    {
                        this.state.apps &&

                        <div className="flex justify-content--space-between">
                            
                            <span>Aplicativos</span>

                            <span className="font--bold">
                                { 
                                        
                                    this.state.apps.join(", ")
        
                                }
                            </span>

                        </div>
                    }

                </section>


                <Title tag="h3" text="Taxas" addClassName="border-top--1 border-color--base-30" />

                <section className="font--xs grid grid-gap--2xs padding--2xs margin-bottom--l">

                    <div className="flex justify-content--space-between">
                        <span>Diaria</span>
                        <span className="font--bold">R$ {parseFloat(this.state.cost).toFixed(2)}</span>
                    </div>

                    <div className="flex justify-content--space-between">
                        <span>Seguro/dia</span>
                        <span className="font--bold">R$ {parseFloat(this.state.security).toFixed(2)}</span>
                    </div>

                    <div className="flex justify-content--space-between">
                        <span>Taxa administrativa</span>
                        <span className="font--bold">R$ {parseFloat(this.state.adminTax).toFixed(2)}</span>
                    </div>

                </section>

                <section className="font--xs grid grid-gap--2xs padding--2xs margin-bottom--l border-top--1 border-color--base-30">

                    <div className="flex justify-content--space-between">
                        <span>Quantidade de dias</span>
                        <span className="font--bold">8</span>
                    </div>

                </section>

                <div className=" font-size--l font--bold flex justify-content--space-between padding--xs border-radius--2xs background-color--white color--black">
                    <span>Total</span>
                    <span>R$ {
                                (
                                    (this.state.days * parseFloat(this.state.cost))+
                                    (this.state.days * parseFloat(this.state.security))+
                                    parseFloat(this.state.adminTax)
                                ).toFixed(2)
                            }
                    </span>
                </div>
            </Container>
        );
    }
}

export default ResumeCar;