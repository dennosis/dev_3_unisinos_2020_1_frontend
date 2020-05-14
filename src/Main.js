import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/Home.js';
import Exemples from './pages/Exemples.js';
import Search from './pages/Search.js';

class Main extends Component {
    render(){
        return(
            <BrowserRouter>
                <Switch>
                    <Route exact path="/search" component={Search}/>
                    <Route exact path="/exemples" component={Exemples}/>
                    <Route exact path="/" component={Home} />              
                </Switch>
            </BrowserRouter>
        )
    }
}

export default Main;
