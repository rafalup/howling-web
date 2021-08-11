import React, {Component} from 'react';
import {
    Route, Switch
} from 'react-router-dom';


import Home from './../components/Home';
import Manga from './../components/Manga';
import Cartoons from '../components/Cartoons';
import Charges from '../components/Charges';
import Comics from '../components/Comics';
import Outlet from '../components/Outlet';
import Tirinhas from '../components/Tirinhas';


export class Routes extends Component {
    render() {
        return (
            <main className="container">
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/manga' component={Manga}/>
                <Route exact path='/cartoons' component={Cartoons}/>
                <Route exact path='/charges' component={Charges}/>
                <Route exact path='/comics' component={Comics}/>
                <Route exact path='/outlet' component={Outlet}/>
                <Route exact path='/tirinhas' component={Tirinhas}/>
            </Switch>
            </main>
        )
    }
};


export default Routes;