import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBus } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import '../Css/Header.css'

const Header = () => {
  return (
    <div>
      <nav className="navbar">
        <div className="navlinks">
          
            <div className="left">
              <div className="logo">
            <FontAwesomeIcon
                icon={faBus}
                style={{ color: "orange", fontSize: 50 }}
              />
              <Link to='/'>RESERVE</Link>
              </div>
              <ul>
            
              <Link to='/bus'>Ticket</Link>
            
              <Link to='/'>Contact us</Link>
            
          </ul>
            </div>
              
              
          <ul>
            
              <a href='/login'>Login</a>
            
              <a href='/register'>Register</a>
            
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Header;
