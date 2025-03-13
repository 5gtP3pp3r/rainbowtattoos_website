import { Row, Col }from 'react-bootstrap';
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";

import { MailForm } from './MailForm';

export function Links() {
  return (
    <div>
      <Row>
        <Col lg={12} xl={6}>
          <div className='mt-5' style={{ width: "550px"}}>
            <strong><p style={{ color: 'red', fontSize: '20px' }}>
              Vous avez des questions ou vous avez des idées de projet?
              Prenez le temps de remplis ce formulaire et de me le faire 
              parvenir. Je devrais vous donner une réponse dans les 48 heures.
            </p></strong>
          </div>
          <MailForm />
        </Col>
        <Col lg={12} xl={6}>
          <div className='mt-5' style={{ width: "550px"}}>
            <strong><p style={{ color: 'red', fontSize: '20px' }}>
              Venez nous visiter sur les réseaux sociaux!
            </p></strong>
          </div>
          <div className='mt-5' style={{ display: "flex", alignItems: "center", gap: "30px" }}>
            <h1><FaFacebookSquare style={{ color: "blue" }} /></h1>
            <a href="" style={{ color: "blue" }}><h3>Studio Théo Tattoo</h3></a>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "30px" }}>
            <h1><FaSquareInstagram style={{ color: "red" }} /></h1>
            <a href="" style={{ color: "red" }}><h3>RainBow Tattoo</h3></a>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "30px" }}>
            <h1><FaXTwitter style={{ color: "black" }} /></h1>
            <a href="" style={{ color: "black" }}><h3>RainBow Tattoo</h3></a>
          </div>
        </Col>
      </Row>      
    </div>
  )
}
