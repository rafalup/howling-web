import React, {Component} from 'react';
import {BrowserRouter as Router } from 'react-router-dom';

import Routes from './Routes';
import Header from './Header';




import "./style.css";
import Footer from './Footer';


class App extends Component {
    render() {
        return (
        <Router basename="/howling-web">
           <div className="App">
                <Header/>
                <Routes/>
                <Footer/>
               
              
                
               
                
            </div>
           
            
        </Router>
        );
    }
}

export default App;