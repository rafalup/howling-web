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
                <Route exact path='/' component={Home}/>
               {/*  <Route exact path='/howling-web' component={Home}/> */}
               
                <Route path='/Manga' component={Manga}/>
                <Route path='/Cartoons' component={Cartoons}/>
                <Route path='/Charges' component={Charges}/>
                <Route path='/Comics' component={Comics}/>
                <Route path='/Outlet' component={Outlet}/>
                <Route path='/Tirinhas' component={Tirinhas}/>

            </Switch>
            </main>
        )
    }
};

export default Routes;