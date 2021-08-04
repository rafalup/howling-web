import React, { Component } from 'react';

import "./teste.css";


import Carrossel from './../main/Carrossel';

export class Home extends Component {
    render() {
        return (

            <div className="App">
                <div>
                    <Carrossel />
                </div>
                <div id="listagemProduto"className="listagem borda-alpha ">
                    <div className="titulo-categoria borda-principal cor-principal vitrine-lancamento">
                        <strong>Lançamentos</strong>
                    </div>
                </div>





            </div>


        )
    }
};

export default Home;