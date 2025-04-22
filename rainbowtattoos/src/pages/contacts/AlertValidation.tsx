import { JSX } from "react";
import Alert from "react-bootstrap/Alert";

interface ValidationProps {
    value: string;
    regex: RegExp; 
    text: string;
  }

export function AlertFieldValidation({ value, regex, text }: ValidationProps): JSX.Element | null {
  const isValid: boolean = value.trim() === "" || new RegExp(regex).test(value);

  return !isValid ? <Alert 
                      variant="warning" 
                      style={{ 
                        maxWidth: "235px", 
                        color: "red",
                        height: "35px",
                        display: "flex",
                        alignItems: "center",                       
                        marginTop: "10px"
                      }}>
                    <p style={{ margin: 0}}>{text}</p></Alert> : null;  
}
