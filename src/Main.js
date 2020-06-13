import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/Home.js';
import Exemples from './pages/Exemples.js';
import Search from './pages/Search.js';
import SignIn from './pages/SignIn.js';
import SignUp from './pages/SignUp.js';
import PaymentMethods from './pages/PaymentMethods.js'
import NewCard from './pages/NewCard.js'

class Main extends Component {
    render(){
        return(
            <BrowserRouter>
                    <Switch>
                        <Route exact path="/search" component={Search}/>
                        <Route exact path="/exemples" component={Exemples}/>
                        <Route exact path="/signin" component={SignIn} />
                        <Route exact path="/signup" component={SignUp} />
                        <Route exact path="/user" render={props => <SignUp {...props} isEdit={true} />}  />
                        <Route exact path="/card" component={NewCard} />
                        <Route exact path="/paymentmethods" component={PaymentMethods} />
                        <Route exact path="/" component={Home} />
                    </Switch>
            </BrowserRouter>
        )
    }
}

export default Main;
