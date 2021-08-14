import React, { Component } from 'react';

import EditProduct from './EditProduct';

import MostraProduct from './MostraProduct';

import "./style.css";
export class Manga extends Component {
    render() {
        return (
            <div className="container">
                <EditProduct/>
                <MostraProduct/>

                

            </div>
        )
    }
};

export default Manga;




/* import React, { Component } from 'react';

import "./style.css";
export class Manga extends Component {
    render() {
        return (
            <div className="container">
                <div className="itens-option">
                    <div className="search-product">
                      <strong className="product-encontrado">Produtos encontrados:</strong>

                    </div>

                    <div className="div-select">
                        <select>
                            <option value="Selecione">Selecione</option>
                            <option value="laranja">Laranja</option>
                            <option value="limao">Limão</option>
                            <option value="coco">Coco</option>
                            <option value="manga">Manga</option>
                        </select>
                    </div>
                </div>

            </div>
        )
    }
};

export default Manga; */



