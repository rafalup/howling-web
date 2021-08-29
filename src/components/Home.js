import React, { Component } from 'react';

import "./Products.css";



/* import "./style.css"; */
import Carrossel from './../main/Carrossel';
import Lancamento from './Lancamento';
import MostraProduct from './MostraProduct';
export class Home extends Component {
    render() {
        return (
            <div className="container">
                

                <div>
                    <Carrossel />
                </div>
                <Lancamento/>
                <MostraProduct/>
                
            </div>
        )
    }
};

export default Home;