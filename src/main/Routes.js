import React, {Component} from 'react';
import {
    Route, Switch
} from 'react-router-dom';


import Home from './../components/Home';
import Participar from './../components/Participar';



export class Routes extends Component {
    render() {
        return (
            <main className="container">
            <Switch>
                <Route exact path='/' component={Home}/>
               
                <Route path='/participar' component={Participar}/>
            </Switch>
            </main>
        )
    }
};

export default Routes;