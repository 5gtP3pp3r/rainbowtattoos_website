import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
//import { Button } from 'react-bootstrap';
import { Link } from 'react-router';

export function NavBarre() {

  return (
    <>
      {[false].map((expand) => (
        <Navbar expand={expand} className="mb-3">
          <Container fluid style={{ paddingLeft: '100px', paddingRight: '100px' }}>            
              <Navbar.Brand href="/">
                <img src="./images/bunny_guy.png" 
                     alt="bunny_guy" 
                     width={150} 
                     className="img-blur-border"
                />
              </Navbar.Brand>                         
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} style={{ backgroundColor:'grey' }} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header style={{ backgroundColor: 'grey' }} closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  <h3 style={{ color: 'white' }}>Liens des pages</h3>
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body style={{ backgroundColor: 'black' }}>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link as={Link} to="/"><h4 style={{ color: 'white' }}>Acceuil</h4></Nav.Link>
                  <Nav.Link as={Link} to="pages/sketchs"><h5 style={{ color: 'white' }}>Mes croquis</h5></Nav.Link>
                  <Nav.Link as={Link} to="pages/tattoos"><h5 style={{ color: 'white' }}>Tattoos réalisés</h5></Nav.Link>
                  <Nav.Link as={Link} to="pages/links"><h5 style={{ color: 'white' }}>Nous rejoindre</h5></Nav.Link>             
                </Nav>                
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}
