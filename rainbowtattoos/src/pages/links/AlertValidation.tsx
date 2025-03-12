import { JSX } from "react";
import Alert from "react-bootstrap/Alert";

interface ValidationProps {
    value: string;
    regex: RegExp; 
    text: string;
  }

export function AlertFieldValidation({ value, regex, text }: ValidationProps): JSX.Element | null {
  const isValid = value.trim() === "" || new RegExp(regex).test(value);

  const txtBoxWidth =  text.length; 
  return !isValid ? <Alert 
                      variant="warning" 
                      style={{ 
                        width: `${txtBoxWidth}`, 
                        height: "35px",
                        display: "flex", 
                        alignItems: "center",                          
                        margin: 0 
                      }}>
                    <p>{text}</p></Alert> : null;  
}
