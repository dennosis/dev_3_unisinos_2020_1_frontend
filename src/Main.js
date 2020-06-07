import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/Home.js';
import Exemples from './pages/Exemples.js';
import Search from './pages/Search.js';
import Login from './pages/Login.js';
import SignUp from './pages/SignUp.js';
import PaymentMethods from './pages/PaymentMethods.js'

class Main extends Component {
    render(){
        return(
            <BrowserRouter>
                    <Switch>
                        <Route exact path="/search" component={Search}/>
                        <Route exact path="/exemples" component={Exemples}/>
                        <Route exact path="/login" component={Login} />
                        <Route exact path="/signup" component={SignUp} />
                        <Route exact path="/paymentmethods" component={PaymentMethods} />
                        <Route exact path="/" component={Home} />
                    </Switch>
            </BrowserRouter>
        )
    }
}

export default Main;
