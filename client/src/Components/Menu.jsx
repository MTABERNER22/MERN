import { Link } from "react-router-dom";
import { Nav, Navbar } from 'react-bootstrap';
import { useAuthContext } from "../Context/AuthContext";
import "./Components.css";


function Menu() {
  const { login, handleLogout} = useAuthContext();

  return (
    <>
    <div className="menuContainer" >
       <Navbar className="menu" variant="dark">
        <Navbar.Brand as={Link} to="/"  className="brand" >TechnoHouse</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Inicio</Nav.Link>
            {!login && (
              <>
              <Nav.Link  as={Link} to="/alta"  >Registrarse</Nav.Link>
              <Nav.Link  as={Link} to="/ingresar">Ingresar</Nav.Link>
              </>
            )}
            {login && (
            <>
             <Nav.Link  as={Link} to="/producto/alta">Agregar Producto</Nav.Link>
            <Nav.Link  onClick={()=>handleLogout()}> Salir </Nav.Link>
            </>
            )}
         
          </Nav>
        </Navbar.Collapse>       
    </Navbar>
    </div>

    </>
  )
}


export default Menu;
