import { JSX } from 'react';
import { Row, Col }from 'react-bootstrap';
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { MailForm } from './MailForm';

export function Contacts(): JSX.Element {
  return (
    <Row>
      <Col lg={12} xl={7}>
        <div className='m-5' >
          <strong><p className='m-2 pb-5' style={{ color: 'beige', fontSize: '25px' }}>
            Vous avez des questions ou vous avez des idées de projet?
            Prenez le temps de remplir ce formulaire et de me le faire 
            parvenir. Je devrais vous donner une réponse dans les 48 heures.
          </p></strong>
        </div>
        <MailForm />
      </Col>        
      <Col lg={12} xl={5} className='d-flex justify-content-center mt-5'>
        <div>
          <div className='pb-5'>
            <strong><p style={{ color: 'beige', fontSize: '25px' }}>
              Venez nous visiter sur les réseaux sociaux!
            </p></strong>
          </div>
          <div className='m-5 gap-5' style={{ display: "flex", alignItems: "center"}}>
            <h1><FaFacebookSquare style={{ color: "beige" }} /></h1>
            <a href="https://www.facebook.com/search/top?q=th%C3%A9o%20tattoo" 
              style={{ color: "beige" }}><h3>Studio Théo Tattoo</h3></a>
          </div>
          <div className='m-5 gap-5' style={{ display: "flex", alignItems: "center"}}>
            <h1><FaSquareInstagram style={{ color: "beige" }} /></h1>
            <a href="" style={{ color: "beige" }}><h3>RainBow Tattoo</h3></a>
          </div>
          <div className='m-5 gap-5' style={{ display: "flex", alignItems: "center"}}>
            <h1><FaXTwitter style={{ color: "beige" }} /></h1>
            <a href="" style={{ color: "beige" }}><h3>RainBow Tattoo</h3></a>
          </div>
        </div>
      </Col>
    </Row>      
  )
}
