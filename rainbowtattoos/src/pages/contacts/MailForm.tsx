import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button, InputGroup } from "react-bootstrap";
import { useState } from "react";
//import { Row, Col }from 'react-bootstrap';

import { AlertFieldValidation } from './AlertValidation';
import { CheckIcons } from "./CheckIcons";


const regexPatterns: { [key: string]: RegExp } = {
    firstName: /^[A-Z].{2,}$/,
    lastName: /^[A-Z].{2,}$/,
    email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    textarea: /^[a-zA-Z0-9.].{10,}$/
};
const validationMessages: { [key: string]: string } = {
    firstName: "Majuscule et au moins 3 caractères",
    lastName: "Majuscule et au moins 3 caractères",
    email: "Utilisez un courriel valide",
    textarea: "SVP, au moins dix caractères"
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
        return regexPatterns[field].test(value);
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
            className='m-5'
        >
        <input type="hidden" name="form-name" value="contact" />
            
        <div className='mt-5' style={{ height:'80px'}}>
            <Form.Label>
                <h5 style={{ color: "beige" }}>Prénom</h5>
            </Form.Label>
            <InputGroup style={{ maxWidth: "300px" }}>
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
        <div className='mt-5' style={{ height:'80px'}}>
            <Form.Label>
                <h5 style={{ color: "beige" }}>Nom</h5>
            </Form.Label>
            <InputGroup style={{ maxWidth: "300px" }}>
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
        <div className='mt-5' style={{ height:'80px'}}>
            <Form.Label>
                <h5 style={{ color: "beige" }}>Courriel</h5>
            </Form.Label>
            <InputGroup style={{ maxWidth: "450px" }}>
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
        <div className='mt-5' style={{ height:'300px'}}>
            <Form.Group controlId="message">
                <Form.Label>
                    <h5 style={{ color: "beige" }}>Message</h5>
                </Form.Label>
                <InputGroup style={{ maxWidth: "800px" }}>
                <Form.Control 
                    as="textarea" 
                    rows={8} 
                    value={formValue.textarea}
                    onChange={handleChange("textarea")}
                    placeholder="Écrivez votre message ici..." 
                    style={{ outline: "none", boxShadow: "none" }} 
                />
                <InputGroup.Text>
                    <CheckIcons isTrue={IsTextareaFilded("textarea")} />
                </InputGroup.Text>
                </InputGroup>
                <div className='mt-1'>
                    <AlertFieldValidation
                        value={formValue.textarea}
                        regex={regexPatterns.textarea}
                        text={validationMessages.textarea}
                    />
                </div>
            </Form.Group>
            </div>            
                { allFieldsValide && (
                    <div className='d-flex justify-content-center'> 
                        <Button 
                            type="submit" 
                            variant="success"
                            style={{height:75, maxWidth:300}}
                        >                            
                            <h4>M'envoyer le courriel</h4>
                        </Button>
                    </div>
                )}                         
        </Form>
    )
}
