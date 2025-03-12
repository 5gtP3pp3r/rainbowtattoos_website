import { /*Button,*/  Col, Row } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router';
//import { useNavigate } from 'react-router';

export function Home() {
    //const navigate = useNavigate();
    return (
        <div className='bg-Home'>                
            <div className='mt-5'>
                <Row>
                    <Col lg={12} xl={7}> 
                        <div className=' mt-5'>    
                            <strong><p style={{ color: 'white', fontSize: '20px' }}>
                                BlabLaBla texte pour présenter Kyle et son coin perso dans le studio 
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.  
                                Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.  
                                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.  
                                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.  
                                </p></strong>
                        </div>  
                        <div>
                            <Row className=''>
                                <Col className='d-flex justify-content-center mt-5'> 
                                    <img src="../images/flash_flowers.png" alt="" width={300} className="img-blur-border"/>
                                </Col>
                                <Col className='d-flex justify-content-center mt-5'>
                                    <img src="../images/cat_banner.jpg" alt="" width={300} className="img-blur-border"/>
                                </Col>   
                            </Row>                     
                        </div>      
                    </Col>
                    
                    <Col lg={12} xl={5}>     
                        <div className='d-flex justify-content-around mt-5'>    
                            <Nav.Link as={Link} to="pages/sketchs"><h2 style={{ color: 'white' }}>Croquis</h2></Nav.Link>                 
                            <Nav.Link as={Link} to="pages/tattoos"><h2 style={{ color: 'white' }}>Tattoos</h2></Nav.Link> 
                            <Nav.Link as={Link} to="pages/links"><h2 style={{ color: 'white' }}>Me rejoindre</h2></Nav.Link>                              
                        </div>                                      
                    </Col>
                </Row>
            </div>   
        </div>        
    )
}
