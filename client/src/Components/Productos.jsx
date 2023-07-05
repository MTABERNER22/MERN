import Producto from "./Producto";
import { Row, Form} from 'react-bootstrap';
import Loading from "./Loading";
import { useFetchProducts } from "../Util/useFetchProducts";
import "./Components.css";


function Productos() {
    const { productos, loading, buscar, setBuscar } = useFetchProducts();

    return (<>


        <Loading loading={loading}>
            <div>
                <div className="  inputBuscar">
                    <Form.Control value={buscar} type="text" placeholder="Buscar Producto" onChange={(event) => setBuscar(event.target.value)} />
                </div>
                <Row>
                    {productos.map((producto, index) => (<Producto key={index} title={producto.name} price={producto.price} id={producto._id} url={producto.url} quantity={producto.quantity}  />))}
                </Row>
            </div>
        </Loading>
    </>

    );

}

export default Productos
