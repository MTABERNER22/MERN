import Home from "../Pages/Home";
import Registro from "../Pages/Registro";
import Login from "../Pages/Login";
import Detalle from "../Pages/Detalle";
import Menu from "../Components/Menu";
import { Routes, Route } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import ProductosAlta from "../Pages/ProductosAlta";
import ProductosModificar from "../Pages/ProductosModificar";
import AuthProvider from "../Context/AuthContext";
import Footer from "../Components/Footer"


function Public() {
    return (
        <div className="fondoHome">
            <AuthProvider>
                <Menu  />
                <Container >
                    <Routes>
                        <Route path='/' element={<Home  />} />
                        <Route path='/alta' element={<Registro />} />
                        <Route path='/ingresar' element={<Login  />} />
                        <Route path='/producto/:productoId' element={<Detalle />} />
                        <Route path='/producto/alta' element={<ProductosAlta />} />
                        <Route path='/producto/editar/:productoId' element={<ProductosModificar />} />
                    </Routes>
                </Container>
            </AuthProvider>
            <Footer/>
        </div>
    )
}

export default Public;
