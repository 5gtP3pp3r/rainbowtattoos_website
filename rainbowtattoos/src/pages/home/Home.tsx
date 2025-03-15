import { JSX } from 'react';
import { Container,  Col, Row } from 'react-bootstrap';

export function Home(): JSX.Element {
    return (      
        <Container fluid >            
            <Row className='g-5 mt-5'>         
                <Col lg={12} xl={6}> 
                    <div className='mt-5 ms-5'>    
                        <strong><p style={{ color: 'beige', fontSize: '25px' }}>
                            BlabLaBla texte pour présenter Kyle et son coin perso dans le studio 
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.  
                            Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.  
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.  
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.  
                        </p></strong>
                    </div>      
                </Col>                    
                <Col lg={12} xl={6}>  
                    <Row className='mb-5'>  
                        <Col lg={12} xl={6} className='d-flex justify-content-center mt-5'> 
                            <img src="../images/flash_flowers.png" alt="" width={300} className="img-blur-border"/>
                        </Col>
                        <Col lg={12} xl={6} className='d-flex justify-content-center mt-5'>
                            <img src="../images/cat_banner.jpg" alt="" width={300} className="img-blur-border"/>
                        </Col> 
                    </Row>                                  
                </Col> 
            </Row>  
        </Container>                     
    )
}
