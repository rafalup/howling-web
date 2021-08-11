import React, { Component } from 'react';

import "./teste.css";



import logo1 from './../assets/batmanGibi.jpg';

/* import "./style.css"; */
import Carrossel from './../main/Carrossel';

export class Home extends Component {
    render() {
        return (
            <div className="container">

                <div>
                    <Carrossel />
                </div>
                <div id="listagemProduto" className="listagem borda-alpha ">
                    <div className="titulo-categoria borda-principal cor-principal vitrine-lancamento">
                        <strong>Lançamentos</strong>
                    </div>
                </div>
                <div className="list-row">
                    <div className="column">
                        <div className="content">
                            <img src={logo1} alt='gibi da aplicação' />
                            <h3>18,90</h3>
                            <p>aaaa</p>
                            
                        </div>
                    </div>

                    <div className="column">
                        <div className="content">
                            <img src={logo1} alt='gibi da aplicação' />
                            <h3>18,90</h3>
                        </div>
                    </div>

                    <div className="column">
                        <div className="content">
                            <img src={logo1} className="logo1" alt='gibi da aplicação' />
                            <h3>18,90</h3>
                        </div>
                    </div>

                    <div className="column">
                        <div className="content">
                            <img src={logo1} alt='gibi da aplicação' />
                            <h3>18,90</h3>
                        </div>
                    </div>

                </div>

                <div className="list-row">
                    <div className="column">
                        <div className="content">
                            <img src={logo1} alt='gibi da aplicação' />
                            <h3>18,90</h3>
                        </div>
                    </div>

                    <div className="column">
                        <div className="content">
                            <img src={logo1} alt='gibi da aplicação' />
                            <h3>18,90</h3>
                        </div>
                    </div>

                    <div className="column">
                        <div className="content">
                            <img src={logo1} alt='gibi da aplicação' />
                            <h3>18,90</h3>
                        </div>
                    </div>
                    
                    <div className="column">
                        <div className="content">
                            <img src={logo1} alt='gibi da aplicação' />
                            <h3>18,90</h3>
                        </div>
                    </div>

                </div>







            </div>




        )
    }
};

export default Home;