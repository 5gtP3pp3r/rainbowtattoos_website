import 'bootstrap/dist/css/bootstrap.min.css';
import { JSX } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";

export function Footer(): JSX.Element {

    return (
        <div style={{minHeight:'150px'}} className="mb-1 footer-fond"/*fixed-bottom*/>    
            <Container>
                <Row className='d-flex align-items-end'>
                    <Col className='d-flex justify-content-center' md={4}> 
                    <div className='mt-2'>
                        <p className='footer-text'>
                            Théo Tattoo<br/>
                            414 rue Principale, suite 201<br/>
                            Vallée-Jonction, Québec
                        </p>
                        <div className='gap-2' style={{ display: "flex", alignItems: "center"}}>
                            <h4><FaFacebookSquare style={{ color: "beige" }} /></h4>
                            <a className='footer-text' href="https://www.facebook.com/search/top?q=th%C3%A9o%20tattoo" >Studio Théo Tattoo</a>
                        </div>
                    </div>
                    </Col>
                    <Col className='d-flex justify-content-center' md={4}>
                        <div className='mt-2'>
                            <p className='footer-text'>
                                Création du site<br/>
                                William Crépault <img src="/images/style/Wc.png" alt="WC" width={12} /><br/>
                                2025
                            </p>
                            
                        </div>
                    </Col>
                    <Col className='d-flex justify-content-center' md={4}>
                        <div className='mt-2'>
                            <p className='footer-text'>
                                RainBow Tattoo<br/>
                                Kyle Marchand, artiste tatoueur<br/>
                                Studio Théo Tattoo<br/>                                
                            </p>
                            <div className='gap-2' style={{ display: "flex", alignItems: "center"}}>
                                <h4><FaSquareInstagram style={{ color: "beige" }} /></h4>
                                <a className='footer-text' href="https://www.instagram.com/_rainbowtattoos_/">Rainbow Tattoo</a>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}