//import { Container, Row, Col } from 'react-bootstrap';
import { JSX } from 'react';
import { Nav } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

export function NavBarre(): JSX.Element {
  return (       
        <Navbar collapseOnSelect expand="lg" className="navbar-container">   
            <div >
              <NavLink to="/">          
                  <img src="./images/Logo_PNG.png" alt="Logo" className="navbar-left img-resize mb-5"/>          
              </NavLink> 
            </div> 
            <Nav className="navbar-links mb-5">
              <NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>Acceuil</NavLink>
              <NavLink to="/pages/portfolio" className={({ isActive }) => isActive ? "active" : ""}>Portfolio</NavLink>
              <NavLink to="/pages/contacts" className={({ isActive }) => isActive ? "active" : ""}>Contacter</NavLink>       
            </Nav>
        </Navbar>       
  );
}
