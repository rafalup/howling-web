import { Link } from 'react-router-dom';
import React, { useState } from "react";
import { ReactComponent as CloseMenu } from "./../assets/x.svg";
import { ReactComponent as MenuIcon } from "./../assets/menu.svg";
import { ReactComponent as Logo } from "./../assets/logo.svg";


const Header = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  return (

    <div className="header">
      <div className="logo-nav">
        <div className="logo-container">
         
          <Link to="/"> <Logo className="logo" /></Link>

        </div>

        <ul className={click ? "nav-options active" : "nav-options"}>
          {/* <li className="option" onClick={closeMobileMenu}>
            <Link to="/">HOME</Link>

          </li> */}

          <li className="option" onClick={closeMobileMenu}>
            <Link to="/manga">MANGÁ</Link>

          </li>

          <li className="option" onClick={closeMobileMenu}>
            <Link to="/tirinhas">TIRINHAS</Link>
          </li>

          <li className="option" onClick={closeMobileMenu}>
            <Link to="/cartoons">CARTOONS</Link>
          </li>

          <li className="option" onClick={closeMobileMenu}>
            <Link to="/charges">CHARGES</Link>
          </li>

          <li className="option" onClick={closeMobileMenu}>
            <Link to="/comics">COMICS</Link>
          </li>

          <li className="option" onClick={closeMobileMenu}>
            <Link to="/outlet">OUTLET</Link>
          </li>

        </ul>
      </div>

      <div className="mobile-menu" onClick={handleClick}>
        {click ? (
          <CloseMenu className="menu-icon" />
        ) : (
          <MenuIcon className="menu-icon" />
        )}
      </div>
    </div>

  );
};



export default Header;