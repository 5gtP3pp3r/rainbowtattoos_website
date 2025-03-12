import { JSX } from "react";
import { BsCheck, BsX } from "react-icons/bs";

interface BoolProps {
    isTrue: boolean;
}

export function CheckIcons({isTrue}: BoolProps): JSX.Element {
    return isTrue ? <BsCheck className={"text-success"} /> 
                  : <BsX className={"text-danger"} />;
}