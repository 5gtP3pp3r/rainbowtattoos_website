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
          <Container fluid>
            <div className='d-flex justify-content-center'>
              <Navbar.Brand href="/"><img src="./images/bunny_guy.png" alt="bunny_guy" width={150} /></Navbar.Brand>  
            </div>           
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Liens des pages
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link as={Link} to="pages/sketchs">Mes croquis</Nav.Link>
                  <Nav.Link as={Link} to="pages/tattoos">tattoos réalisés</Nav.Link>
                  <Nav.Link as={Link} to="pages/links">Liens</Nav.Link>             
                </Nav>                
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}
