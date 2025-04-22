import { JSX } from 'react';
import { Container,  Col, Row } from 'react-bootstrap';
import { useEffect, useState } from "react";
import { ImageListing } from '../../ImagesList/ImagesListing';  
import { ImagesProps } from '../../ImagesList/ImagesProps';

export function Home(): JSX.Element {
    const [imagesList, setImagesList] = useState<ImagesProps["imagesList"]>([]);

    useEffect(() => {
        fetch("/jsons/promotion.json")
            .then((response) => response.json())
            .then((data) => {
                if (Array.isArray(data) && data.length > 0) {
                    setImagesList(data);
                } else {
                    console.log("Aucune promo cette semaine.");
                }
            })
            .catch((error) => console.error("Erreur de chargement:", error));
    }, []);

    return (      
        <Container fluid >            
            <Row className='g-5 mt-5 mx-0'>         
                <Col lg={12} xl={6}> 

                    {imagesList.length > 0 ? (
                        <div className='ms-3'>
                            <ImageListing imagesList={imagesList} imgPath="../images/imagesPromo/" />
                        </div>
                    ) : (
                        <div className='ms-3'>
                            <p className='main-text'>Pas de promotions pour l’instant.</p>
                        </div>
                    )}

                    <div className='ms-3'>    
                        <p className='main-text'>
                            BlabLaBla texte pour présenter Kyle et son coin perso dans le studio 
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.  
                            Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.  
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.  
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.  
                        </p>
                    </div>      
                </Col>                    
                <Col lg={12} xl={6}>  
                    <Row className='mb-5' >  
                        <Col lg={12} xl={6} className='d-flex justify-content-center mx-0 mt-5'> 
                            <img src="../images/portfolio/flash_flowers.png" alt="" width={300} className="img-blur-border"/>
                        </Col>
                        <Col lg={12} xl={6} className='d-flex justify-content-center mx-0 mt-5'>
                            <img src="../images/portfolio/cat_banner.jpg" alt="" width={300} className="img-blur-border"/>
                        </Col> 
                    </Row>                                  
                </Col> 
            </Row>  
        </Container>                     
    )
}
