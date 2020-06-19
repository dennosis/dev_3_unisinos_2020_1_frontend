import React, {Component} from 'react';
import api from '../../Api'

import Container from './Container';
import Button from './Button';
import Img from './Img';
import Title from './Title';


class ResumeCar extends Component {

    constructor(props) {
        super(props)

        this.state = {
            numDays : this.props.numDays || 1
        }
    }

    componentWillMount() {
        this.getCar(this.props.id)
    }

    getCar(id){
        /*
        api.getCarById(id).then(
            res => {
                this.setState({
                    ...res.data
                })
            },
            error => {
            
                //this.setState({
                //    alert: {type:"error", content:"Erro ao Buscar Carro"},
                //})
            
            }
        )
        */

       this.setState({
            id:54545454,
            image: "https://upload.wikimedia.org/wikipedia/pt/thumb/2/2e/Chevette_1985.png/300px-Chevette_1985.png",
            description:"is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
            brand:"chevrolet",
            model:"chevette",
            board:"BEE4R22",
            modelYear:"1975",
            manufactureYear:"1975",
            cost:40.70,
            security:2.70,
            adminTax:13.30,
            luggages:5,
            apps:["Uber","Pop","Taxi"],
            airConditioner:true,
            passengers:5,
            airBag:true,
            abs:true,
            color:"cinza",
            kilometrage:12100,
        })
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
                        <span className="font--bold">R$ {this.state.cost}</span>
                    </div>

                    <div className="flex justify-content--space-between">
                        <span>Seguro/dia</span>
                        <span className="font--bold">R$ {this.state.security}</span>
                    </div>

                    <div className="flex justify-content--space-between">
                        <span>Taxa administrativa</span>
                        <span className="font--bold">R$ {this.state.adminTax}</span>
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
                                    (this.state.numDays * this.state.cost)+
                                    (this.state.numDays * this.state.security)+
                                    this.state.adminTax
                                ).toFixed(2)
                            }
                    </span>
                </div>
            </Container>
        );
    }
}

export default ResumeCar;