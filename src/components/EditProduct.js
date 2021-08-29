import React, { Component } from 'react';

import "./style.css";
export class EditProduct extends Component {
    render() {
        return (

            <div className="itens-option">
                <div className="search-product">
                    <strong className="product-encontrado">Produtos encontrados: 8</strong>

                </div>

                <div className="div-select">
                    <select>
                        <option value="Selecione">Selecione</option>
                        <option value="maisvendido">Mais vendido</option>
                        <option value="menorpreco">Menor preço</option>
                        <option value="menorpreco">Maior preço</option>
                       
                    </select>
                </div>
            </div>


        )
    }
};

export default EditProduct;
