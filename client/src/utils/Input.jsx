import React from "react";
import { Form } from "react-bootstrap";


const Input = (props) => {
    return(
        <Form.Control 
            onChange={(event) => props.setValue(event.target.value)}
            value={props.value}
            type={props.type} 
            placeholder={props.placeholder} 
        />
    );
};

export default Input;