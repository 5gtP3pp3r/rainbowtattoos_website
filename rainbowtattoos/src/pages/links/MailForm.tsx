import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button, InputGroup } from "react-bootstrap";
import { useState } from "react";
import { Row, Col }from 'react-bootstrap';

import { AlertFieldValidation } from './AlertValidation';
import { CheckIcons } from "./CheckIcons";


const regexPatterns: { [key: string]: RegExp } = {
    firstName: /^[A-Z].{2,}$/,
    lastName: /^[A-Z].{2,}$/,
    email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
};
const validationMessages: { [key: string]: string } = {
    firstName: "Majuscule et au moins 3 caractères",
    lastName: "Majuscule et au moins 3 caractères",
    email: 'Utilisez la forme "exemple@service.domaine"',
};

export function MailForm() {
    const [allFieldsValide, setAllFieldValide] = useState<boolean>(false);
    const [formValue, setFormValues] = useState<{ [key: string]: string }>({
        firstName: "",
        lastName: "",
        email: "",
        textarea: ""
    });        
    const handleChange = (field: string) => (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const value = event.target.value;
        setFormValues(prevValues => {
            const newValues = { ...prevValues, [field]: value };
            validateForm();
            return newValues;
        });
    };

    const isFieldValide = (field: string) => {
        const value = formValue[field];
        const regex = new RegExp(regexPatterns[field]);
        return regex.test(value);
    };
    const IsTextareaFilded = (field: string) => {
        const value = formValue[field];
        return value.length > 10;
    };
    const validateForm = () => {
        setAllFieldValide(
            isFieldValide("firstName") &&
            isFieldValide("lastName") &&
            isFieldValide("email") &&
            IsTextareaFilded("textarea")
        );
    };
    return (
        <Form
            name="contact"
            method="POST"
            data-netlify="true"
        >
        <input type="hidden" name="form-name" value="contact" />
            <Row>                
                <Col sm={12} xl={6}>
                    <div className='mt-5' style={{ height:'90px'}}>
                        <Form.Label>
                            <h5 style={{ color: "red" }}>Prénom</h5>
                        </Form.Label>
                        <InputGroup style={{ width: "250px" }}>
                            <Form.Control
                                type="text"
                                value={formValue.firstName}
                                onChange={handleChange("firstName")}
                                placeholder="Jane"
                                style={{ outline: "none", boxShadow: "none" }}
                                autoFocus
                            />
                            <InputGroup.Text>
                                <CheckIcons isTrue={isFieldValide("firstName")} />
                            </InputGroup.Text>
                        </InputGroup>
                        <div className='mt-1'>
                            <AlertFieldValidation
                                value={formValue.firstName}
                                regex={regexPatterns.firstName}
                                text={validationMessages.firstName}
                            />
                        </div>
                    </div>
                </Col>
                <Col sm={12} xl={6}>
                    <div className='mt-5' style={{ height:'90px'}}>
                        <Form.Label>
                            <h5 style={{ color: "red" }}>Nom</h5>
                        </Form.Label>
                        <InputGroup style={{ width: "250px" }}>
                            <Form.Control
                                type="text"
                                value={formValue.lastName}
                                onChange={handleChange("lastName")}
                                placeholder="Doe"
                                style={{ outline: "none", boxShadow: "none" }}
                            />
                            <InputGroup.Text>
                                <CheckIcons isTrue={isFieldValide("lastName")} />
                            </InputGroup.Text>
                        </InputGroup>
                        <div className='mt-1'>
                            <AlertFieldValidation
                                value={formValue.lastName}
                                regex={regexPatterns.lastName}
                                text={validationMessages.lastName}
                            />
                        </div>
                    </div>
                </Col>                       
            </Row>
            <div className='mt-5' style={{ height:'90px'}}>
                <Form.Label>
                    <h5 style={{ color: "red" }}>Courriel</h5>
                </Form.Label>
                <InputGroup style={{ width: "300px" }}>
                    <Form.Control
                        type="text"
                        value={formValue.email}
                        onChange={handleChange("email")}
                        placeholder="exemple@service.domaine"
                        style={{ outline: "none", boxShadow: "none" }}
                    />
                    <InputGroup.Text>
                        <CheckIcons isTrue={isFieldValide("email")} />
                    </InputGroup.Text>
                </InputGroup>
                <div className='mt-1'>
                    <AlertFieldValidation
                        value={formValue.email}
                        regex={regexPatterns.email}
                        text={validationMessages.email}
                    />
                </div>
            </div>
            <div className='mt-5' style={{ height:'200px'}}>
                <Form.Group controlId="message">
                    <Form.Label>
                        <h5 style={{ color: "red" }}>Message</h5>
                    </Form.Label>
                    <InputGroup style={{ width: "600px" }}>
                    <Form.Control 
                        as="textarea" 
                        rows={5} 
                        value={formValue.textarea}
                        onChange={handleChange("textarea")}
                        placeholder="Écrivez votre message ici..." 
                        style={{ outline: "none", boxShadow: "none" }} 
                    />
                    <InputGroup.Text>
                        <CheckIcons isTrue={IsTextareaFilded("textarea")} />
                    </InputGroup.Text>
                    </InputGroup>
                </Form.Group>
            </div>            
                { allFieldsValide && (
                   <div className='d-flex justify-content-center'> 
                        <Button type="submit" variant="success">
                            Envoyer le courriel
                        </Button>
                    </div>
                )}                         
        </Form>
    )
}