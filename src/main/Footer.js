import React from 'react'

import './style.css'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTelegram, faTwitter, faInstagramSquare } from "@fortawesome/free-brands-svg-icons";

import FormaPagamento from "./../assets/sprite_stamp.png";

const Footer = () => {
    return (
        <footer className="app-footer">
            <div className="w3-col m6 w3-large w3-margin-bottom info">
                <div className="titulo-contact">
                    <h2 >Contato</h2>
                </div>
               
                <i className="fa fa-map-marker"></i> Rua Tal das Flores, Chicago-US.<br/>
                <i className="fa fa-phone" ></i> Phone: +00 151515-0000<br/>
                <i className="fa fa-envelope" > </i> Email: house@brooklyn.com.br<br/>
            </div>


            <div className="social-container">
                <h3 className="titule-follow">Social Follow</h3>

                <a target="_blank" rel="noreferrer" href="https://t.me/joinchat/gibi-tal"
                    className="telegram social">
                    <FontAwesomeIcon icon={faTelegram} size="2x" />
                </a>
                <a target="_blank" rel="noreferrer" href="https://www.twitter.com/gibi-tal" className="twitter social">
                    <FontAwesomeIcon icon={faTwitter} size="2x" />
                </a>
                <a target="_blank" rel="noreferrer" href="https://www.instagram.com/gibi-tal"
                    className="instagram social">
                    <FontAwesomeIcon icon={faInstagramSquare} size="2x" />
                </a>
            </div>
            <div className="card-pagamento">
                <div className="Titule-pagemento">
                    <strong>Forma de Pagamento.</strong>
                </div>
                <div className="type-cards">

                    <img src={FormaPagamento} className="img-formasPague" alt="" />
                </div>
            </div>

            <div className="Copyright-origin">
                <span className="app-footer__message">
                    TODOS OS DIREITOS RESERVADOS.<br />
                    Copyright © 1992 - 2020
                </span>
            </div>

        </footer>
    )
}
export default Footer

///  formas de pagamento