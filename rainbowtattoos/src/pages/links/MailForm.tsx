import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, /*Button,*/ InputGroup } from "react-bootstrap";
import { useState } from "react";
import { Row, Col }from 'react-bootstrap';

import { AlertFieldValidation } from './AlertValidation';
import { CheckIcons } from "./CheckIcons";


const regexPatterns: { [key: string]: RegExp } = {
    name: /^[A-Z].{2,}$/,
    email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
};
const validationMessages: { [key: string]: string } = {
    name: "Majuscule et au moins 3 caractères",
    email: 'Utilisez la forme "exemple@service.domaine"',
};

export function MailForm() {
    const [formValue, setFormValues] = useState<{ [key: string]: string }>({
        firstName: "",
        lastName: "",
        email: ""
    });    

    const handleChange = (field: string) => (value: React.ChangeEvent<HTMLInputElement>) => {
        setFormValues({ ...formValue, [field]: value.target.value });
    };

    function isFieldValide(field: string): boolean {
        const value = formValue[field];
        const regex = new RegExp(regexPatterns[field]);
        return regex.test(value);
    };


    return (
        <Form>
            <Row>
                <Col>
                    <div className='mt-5' style={{ height:'90px'}}>
                        <Form.Label>
                            <h5 style={{ color: "red" }}>Prénom</h5>
                        </Form.Label>
                        <InputGroup style={{ width: "200px" }}>
                            <Form.Control
                                type="text"
                                value={formValue.firstName}
                                onChange={handleChange("firstName")}
                                autoFocus
                            />
                            <InputGroup.Text>
                                <CheckIcons isTrue={isFieldValide("firstName")} />
                            </InputGroup.Text>
                        </InputGroup>
                        <div className='mt-1'>
                            <AlertFieldValidation
                                value={formValue.firstName}
                                regex={regexPatterns.name}
                                text={validationMessages.name}
                            />
                        </div>
                    </div>
                </Col>
                <Col>
                    <div className='mt-5' style={{ height:'90px'}}>
                        <Form.Label>
                            <h5 style={{ color: "red" }}>Nom</h5>
                        </Form.Label>
                        <InputGroup style={{ width: "200px" }}>
                            <Form.Control
                                type="text"
                                value={formValue.lastName}
                                onChange={handleChange("lastName")}
                                autoFocus
                            />
                            <InputGroup.Text>
                                <CheckIcons isTrue={isFieldValide("lastName")} />
                            </InputGroup.Text>
                        </InputGroup>
                        <div className='mt-1'>
                            <AlertFieldValidation
                                value={formValue.lastName}
                                regex={regexPatterns.name}
                                text={validationMessages.name}
                            />
                        </div>
                    </div>
                </Col>
            
            
            </Row>
            <div className='mt-5' style={{ height:'90px'}}>
                <Form.Label>
                    <h5 style={{ color: "red" }}>Couriel</h5>
                </Form.Label>
                <InputGroup style={{ width: "300px" }}>
                    <Form.Control
                        type="text"
                        value={formValue.email}
                        onChange={handleChange("email")}
                        autoFocus
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


        </Form>
    )
}