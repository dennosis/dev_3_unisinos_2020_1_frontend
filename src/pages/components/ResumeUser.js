import React, {Component} from 'react';
import api from '../../Api'
import { formatPhone, formatCnh, formatDate } from  '../../utils'

import Container from './Container';
import Button from './Button';
import Title from './Title';


class ResumeUser extends Component {

    constructor(props) {
        super(props)

        this.state = {
            linkTo:`${props.baseUrl}/user/true`
        }
    }

    componentWillMount() {
        this.getUser()
    }

    getUser(){
        api.getUser().then(
            res => {
                this.setState({
                    ...res.data
                })
            },
            error => {}
        )
    }


    render(){

        return (
            <Container>
                {                

                this.state.email &&
               
                <>
                    <Title tag="h3" text="Dados Pessoais" />

                    <section className="font--xs grid grid-template-columns--2fr grid-gap-row--2xs grid-gap-column--xl padding--2xs padding-bottom--5xl">

                            <span>Nome:</span>
                            <span className="font--bold">{this.state.name}</span>

                            <span>Celular:</span>
                            <span className="font--bold">{formatPhone(this.state.cellphone)}</span>

                            <span>CNH numero:</span>
                            <span className="font--bold">{formatCnh(this.state.cnhNumber)}</span>

                            <span>CNH categoria:</span>
                            <span className="font--bold">{this.state.cnhCategory}</span>

                            <span>CNH data de expiração:</span>
                            <span className="font--bold">{formatDate(this.state.cnhExpirationDate)}</span>

                    </section>
                    {
                        this.props.editMode &&
                        <Button text={"alterar"} to={this.state.linkTo} addClassName="gradient-color--black margin-top--auto"/>
                    }
                </>
                }
            </Container>
        );
    }
}

export default ResumeUser;