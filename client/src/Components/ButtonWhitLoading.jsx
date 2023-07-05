import React from "react";
import { Button, Spinner } from 'react-bootstrap';

function ButtonWhitLoading({ variant = "dark", type = "submit", loading, children }) {
    return (
        <Button type={type} variant={variant} disable={loading}  className="botonEnviar">
            { loading && <Spinner animation="border" size="sm" style={{marginRight: '1rem'}}/> }
            { children }
        </Button>
    )
}

export default ButtonWhitLoading;
