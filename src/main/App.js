import React, {Component} from 'react';
import {BrowserRouter as Router } from 'react-router-dom';

import Routes from './Routes';
import Header from './Header';
import Carrossel from './Carrossel';



import "./style.css";

class App extends Component {
    render() {
        return (
        <Router>
           <div className="App">
                <Header/>
                <Routes/>
                <Carrossel/>
                
            </div>
        </Router>
        );
    }
}

export default App;