import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button, InputGroup } from "react-bootstrap";
import { JSX, useState } from "react";
//import { Row, Col }from 'react-bootstrap';

import { AlertFieldValidation } from './AlertValidation';
import { CheckIcons } from "./CheckIcons";


const regexPatterns: { [key: string]: RegExp } = {
    firstName: /^[a-zA-Z].{2,}$/,
    lastName: /^[a-zA-Z].{2,}$/,
    email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    textarea: /^[a-zA-Z0-9.].{10,}$/
};
const validationMessages: { [key: string]: string } = {
    firstName: "Au moins 3 caractères",
    lastName: "Au moins 3 caractères",
    email: "Utilisez un courriel valide",
    textarea: "SVP, au moins dix caractères"
};

export function MailForm(): JSX.Element {
    const [allFieldsValide, setAllFieldValide] = useState<boolean>(false);
    const [formValue, setFormValues] = useState<{ [key: string]: string }>({
        firstName: "",
        lastName: "",
        email: "",
        textarea: ""
    });        
    const handleChange = (field: string) => (
        event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
            const value: string = event.target.value;
            setFormValues(prevValues => {
                const newValues = { ...prevValues, [field]: value };
                validateForm();
                return newValues;
        });
    };

    const isFieldValide = (field: string): boolean => {
        const value: string = formValue[field];
        return regexPatterns[field].test(value);
    };
    const IsTextareaFilded = (field: string): boolean => {
        const value: string = formValue[field];
        return value.length > 10;
    };
    const validateForm = (): void => {
        setAllFieldValide(
            isFieldValide("firstName") &&
            isFieldValide("lastName") &&
            isFieldValide("email") &&
            IsTextareaFilded("textarea")
        );
    };
    return (
        <Form           
            // Utilisation temp de mon mail pour test. Monter une boite mail dédié au site, possiblement rediriger vers mail Kyle  
            // voir https://formsubmit.co pour obtenir un lien de leur part vers un mail crypté. Donc mail non hard codé et illisible à la source.  
            action="https://formsubmit.co/william.crepault@gmail.com"
            method="POST"
            className='m-5'
        >                                       {/* adresse temp du site en mode dev local */}
        <input type="hidden" name="_next" value="http://localhost:5173/pages/submitConfirm" />
        <input type="hidden" name="_captcha" value="false" />
        {/*<input type="hidden" name="form-name" value="contact" />*/}
            

            <div className='mt-5' style={{ height:'75px'}}>
                <Form.Label>
                    <h5 style={{ color: "beige" }}>Prénom</h5>
                </Form.Label>
                <InputGroup style={{ maxWidth: "300px" }}>
                    <Form.Control
                        type="text"
                        name="firstName"
                        value={formValue.firstName}
                        onChange={handleChange("firstName")}
                        placeholder="Jane"
                        className='custom-input'
                        autoFocus
                    />
                    <InputGroup.Text className='custom-input'>
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
            <div className='mt-5' style={{ height:'75px'}}>
                <Form.Label>
                    <h5 style={{ color: "beige" }}>Nom</h5>
                </Form.Label>
                <InputGroup style={{ maxWidth: "300px" }}>
                    <Form.Control
                        type="text"
                        name="laststName"
                        value={formValue.lastName}
                        onChange={handleChange("lastName")}
                        placeholder="Doe"
                        className='custom-input'
                    />
                    <InputGroup.Text className='custom-input'>
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
            <div className='mt-5' style={{ height:'75px'}}>
                <Form.Label>
                    <h5 style={{ color: "beige" }}>Courriel</h5>
                </Form.Label>
                <InputGroup style={{ maxWidth: "500px" }}>
                    <Form.Control
                        type="text"
                        name="email"
                        value={formValue.email}
                        onChange={handleChange("email")}
                        placeholder="exemple@service.domaine"
                        className='custom-input'
                    />
                    <InputGroup.Text className='custom-input'>
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
                    <InputGroup style={{ maxWidth: "500px" }}>
                    <Form.Control 
                        as="textarea" 
                        name="textarea"
                        rows={8} 
                        value={formValue.textarea}
                        onChange={handleChange("textarea")}
                        placeholder="Écrivez votre message ici..." 
                        className='custom-input'
                    />
                    <InputGroup.Text className='custom-input'>
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
                    <div className='mt-3'style={{maxWidth:500}}>
                        { allFieldsValide && (
                            <div className='d-flex justify-content-center'> 
                                <Button 
                                    type="submit" 
                                    variant="success"
                                    style={{height:50, maxWidth:250}}
                                >                            
                                    <h5>M'envoyer le courriel</h5>
                                </Button>
                            </div>
                        )}  
                    </div>
                </Form.Group>
            </div>                                                   
        </Form>
    )
}
