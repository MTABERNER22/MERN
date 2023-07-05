import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { getById } from "../Services/productosServices";
import Loading from "../Components/Loading";
import { Button } from "react-bootstrap";
import Alertas from "../Components/Alertas";
import "./Pages.css"


function Detalle() {
  const { productoId } = useParams();
  const [loading, setLoading] = useState(true);
  const [productos, setProductos] = useState({});
  const [comprar, setComprar] = useState(false);
  const [alert, setAlert] = useState({ variant: "", text: "" });


  useEffect(() => {
    const request = async () => {
      try {
        const responseProducto = await getById(productoId);
        setProductos(responseProducto);
        setLoading(false);

      } catch (e) {
        console.log(e);
      }
    };
    request();
  }, [productoId]);


  const handleComprar = () => {
    setComprar(true);
    setAlert({ variant: "success", text: "Gracias por su compra", duration: 1000, link: '/' });
  }


  if (comprar) {
    return(
      <div className="alertCompra">
    <Alertas {...alert} className="alertDescripcion"/>
    </div>);
  } else {
    return (
      <Loading loading={loading}>
        <div className="descripcion">
        <div  className="cajasDescripcion">
          <div>
            <div className="imgDescripcion">
              <img src={productos.url} alt="" />
            </div>
              <Button className="buttonDescripcion" variant="success"  onClick={handleComprar}>Comprar</Button>
          </div>
          <div className="cajaTextDescripcion">
          <p className="tituloDescripcion"><b>{productos.name}</b> </p>
          <p className="textDescripcion">${productos.price}</p>
          <div>
          <p className="textDescripcion">{productos.description}</p>
          </div>
          </div>
        </div>
        </div>
      </Loading>
    );
  }
}

export default Detalle;
