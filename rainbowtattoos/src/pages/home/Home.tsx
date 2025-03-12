import { Button,  Col, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router';

export function Home() {
    const navigate = useNavigate();
    return (
        <div className='bg-Home'>                
            <div className='mt-5'>
                <Row>
                    <Col lg={12} xl={8}> 
                        <div>    
                            <p>BlabLaBla texte pour présenter Kyle et son coin perso dans le studio 
                               Lorem ipsum dolor sit amet, consectetur adipiscing elit.  
                               Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  
                               Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.  
                               Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.  
                               Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.  </p>
                        </div>         
                    </Col>
                    
                    <Col lg={12} xl={4}>     
                        <div className='d-flex gap-5'>                             
                            <Button variant='secondary' onClick={() => navigate("/pages/sketchs")} style={{width:125}}><strong>Croquis</strong></Button>
                            <Button variant='secondary' onClick={() => navigate("/pages/tattoos")} style={{width:125}}><strong>Tattoos</strong></Button>
                            <Button variant='secondary' onClick={() => navigate("/pages/links")} style={{width:125}}><strong>Liens</strong></Button>                               
                        </div>                                      
                    </Col>
                </Row>
            </div>   
        </div>        
    )
}
