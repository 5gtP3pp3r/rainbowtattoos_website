import { Row, Col }from 'react-bootstrap';
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";

import { MailForm } from './MailForm';

export function Links() {
  return (
    <div>
      <Row>
        <Col lg={12} xl={6}>
          <MailForm />
        </Col>
        <Col lg={12} xl={6}>
          <h1><FaFacebookSquare style={{ color: "blue" }} /></h1>
          <h1><FaSquareInstagram style={{ color: "blue" }}/></h1>
        </Col>
      </Row>
      
    </div>
  )
}
