import React, {Component} from 'react';
import Layout from "./components/Layout";
import Container from './components/Container';
import Button from './components/Button';
import Img from './components/Img';
import CarImage from '../images/1299198-snow_004.png';

const templateColumns = {
	gridTemplateColumns: '5fr 2fr'
};

const divStyle = {
    margin: '10px'
}

const valuesStyle = {
    gridTemplateColumns: '4fr 2fr',
    textAlign: 'right'
}

const totalStyle = {
    gridTemplateColumns: '4fr 2fr',
    background: 'white',
    color: 'black'
}

class ConfirmRent extends Component {
    render(){
        return (
            <Layout>
                <div style={divStyle} className="flex justify-content--left margin-bottom--auto">
                    <h2>Confirmar reserva</h2>
                </div>
                <div style={templateColumns} className="grid grid-gap--2xl">
                    <Container className="grid grid-gap--2xl">
                        <Container className="grid margin-bottom--auto">
                            <h3>Locais</h3>
                            <div className="grid grid-gap--m grid-template-columns--2fr">
                                <div>
                                    <h4 style={divStyle}>Retirada:</h4>
                                    <label style={divStyle}>(nome da locadora)<br/></label>
                                    <label style={divStyle}>(endereço)<br/></label>
                                    <label style={divStyle}>(data/hora de retirada)<br/></label>
                                </div>
                                <div>
                                    <h4 style={divStyle}>Devolução:</h4>
                                    <label style={divStyle}>(nome da locadora)<br/></label>
                                    <label style={divStyle}>(endereço)<br/></label>
                                    <label style={divStyle}>(data/hora de devolução)<br/></label>
                                </div>
                            </div>
                        </Container>
                        <div className="grid grid-gap--m grid-template-columns--2fr">
                            <Container>
                                <h3>Dados pessoais</h3>
                                <div style={divStyle}>
                                    Matheus Leonardo Gonçalves<br/>
                                    882.998.780-80<br/>
                                    mgoncalves@s2solucoes.com.br<br/>
                                    (51) 99502-6168<br/>
                                </div>
                                <Button text={"alterar"} addClassName="gradient-color--black"/>
                            </Container>
                            <Container>
                                <h3>Dados de pagamento</h3>
                                <div className="grid grid-gap--m grid-template-columns--2fr">
                                    <div style={divStyle}>
                                        <h4>Método:</h4>
                                        <h4>Parcelamento:</h4>
                                        <h4>Cartão escolhido:</h4>
                                        <h4>Validade:</h4>
                                    </div>
                                    <div style={divStyle}>
                                        Cartão de crédito<br/>
                                        3x de (valor)<br/>
                                        **** **** **** 4567<br/>
                                        07/2025
                                    </div>
                                </div>
                                <Button text={"alterar"} addClassName="gradient-color--black"/>
                            </Container>
                        </div>
                        <Button text={'Confirmar reserva'} addClassName="gradient-color--base-60" />
                    </Container>
                    <Container>
                        <h3>Reserva</h3>
                        <div style={divStyle}>
                            <Img mode={1} addClassName="border-radius--xs" src={CarImage} />
                            <h4>up! high I MOTION 1.0 T. Flex 12V 5p 2014 - vermelho</h4>
                            <h5>Volkswagen</h5>
                            <h5>IGL-5898</h5>
                        </div>
                        <div class="border-top--2 border-color--base-40">
                            <h3>Taxas</h3>
                            <div style={divStyle} class="grid grid-gap--m grid-template-columns--2fr">
                                <div>
                                    Diária<br/>
                                    Proteção<br/>
                                    Taxa administrativa<br/>
                                </div>
                                <div style={valuesStyle}>
                                    <h4>R$ 90,00</h4>
                                    <h4>R$ 9,00</h4>
                                    <h4>R$ 13,50</h4>
                                </div>
                            </div>
                        </div>
                        <div class="border-top--2 border-color--base-40">
                            <h3>Descontos</h3>
                            <div style={divStyle} class="grid grid-gap--m grid-template-columns--2fr">
                                <div>
                                    Diárias<br/>
                                    Proteções<br/>
                                    Acessórios<br/>
                                </div>
                                <div style={valuesStyle}>
                                    <h4>R$ 0,00</h4>
                                    <h4>R$ 0,00</h4>
                                    <h4>R$ 0,00</h4>
                                </div>
                            </div>
                        </div>
                        <div style={totalStyle}>
                            <div style={divStyle} class="grid grid-gap--m grid-template-columns--2fr">
                                <div>
                                    <h3>Total</h3>
                                </div>
                                <div style={valuesStyle}>
                                    <h3>R$ 112,50</h3>
                                </div>
                            </div>
                        </div>
                    </Container>
                </div>
            </Layout>
        );
    }
}

export default ConfirmRent;