import React, {Component} from 'react';
import EditProduct from './EditProduct';

import MostraProduct from './MostraProduct';

import "./style.css";
export class Comics extends Component {
    render() {
        return (
            <div className="container">
                <EditProduct/>
                <MostraProduct/>
               

                

            </div>
        )
    }
};

export default Comics;


