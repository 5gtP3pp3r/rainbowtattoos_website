import { JSX } from 'react';
import { Row, Col }from 'react-bootstrap';
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { MailForm } from './MailForm';

export function Contacts(): JSX.Element {
  return (
    <Row className='mx-0'>
      <Col lg={12} xl={7}>
        <div className='m-5'>
          <p className='pb-5 main-text' >
            Vous avez des questions ou vous avez des idées de projet?
            Prenez le temps de remplir ce formulaire et de me le faire 
            parvenir. Je devrais vous donner une réponse dans les 48 heures.
          </p>
        </div>
        <MailForm />
      </Col>        
      <Col lg={12} xl={5} className='mt-5 d-flex justify-content-center'>
        <div>
          <div className='pb-5 ms-3'>
            <p className='main-text'>
              Venez nous visiter sur les réseaux sociaux!
            </p>
          </div>
          <div className='m-4 gap-4' style={{ display: "flex", alignItems: "center"}}>
            <h1><FaFacebookSquare style={{ color: "beige" }} /></h1>
            <a href="https://www.facebook.com/search/top?q=th%C3%A9o%20tattoo" 
               ><h5>Studio Théo Tattoo</h5></a>
          </div>
          <div className='m-4 gap-4' style={{ display: "flex", alignItems: "center"}}>
            <h1><FaSquareInstagram style={{ color: "beige" }} /></h1>
            <a href="https://www.instagram.com/_rainbowtattoos_/" 
               ><h5>RainBow Tattoo</h5></a>
          </div>
        </div>
      </Col>
    </Row>      
  )
}
