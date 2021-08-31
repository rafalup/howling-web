import React, {Component} from 'react';

import EditProduct from './EditProduct';

import MostraP from './MostraP';

import "./style.css";

export class Charges extends Component {
    render() {
        return (
            <div className="container">
                <EditProduct/>
                
                <MostraP/>

                

            </div>
        )
    }
};

export default Charges;

