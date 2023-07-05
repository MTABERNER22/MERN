import { Link } from "react-router-dom";
import { Card, Button, Col } from 'react-bootstrap';
import { useAuthContext } from "../Context/AuthContext";
import "./Components.css"

 
function Producto({ id, title, quantity, url ,price}) {
      const {login} = useAuthContext()

    return (
            <Col sm={6} lg={4} xxl={3}>
            <Card  className="cardProducto" >
                <Card.Img variant="top" src={url} className="cardProductoImg" />
                <Card.Body>
                    <Card.Title> {title} </Card.Title>
                    <Card.Text>
                        ${price}
                    </Card.Text>
                    <Card.Text>
                        {quantity}
                    </Card.Text>
                    <Button variant="primary" as={Link} to={`/producto/${id}`} >Ver Detalle</Button>
                 
                    { login && (
                        <>
                        <Button variant="secondary" as={Link} to={`/producto/editar/${id}`} style={{marginLeft: '1rem'}} >Editar</Button>
                        </>
                    )}
    
                </Card.Body>
            </Card>
        </Col>

        
    )
}



export default Producto;