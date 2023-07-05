import { useForm } from "react-hook-form";
import Input from "../Components/Input";
import { useEffect } from "react";
import { Button, Form } from 'react-bootstrap';
import { useNavigate, useParams } from "react-router-dom";
import { getById, update, remove } from "../Services/productosServices";
import { useAuthContext } from "../Context/AuthContext";
import "./Pages.css"

function ProductosModificar() {
    const { register, handleSubmit, formState: { errors }, setValue, } = useForm({ mode: "onChange" });
    const navigate = useNavigate();
    const { productoId } = useParams();
    const { user } = useAuthContext();

    useEffect(() => {
        const request = async () => {
            try {
                const responseProducto = await getById(productoId);
                setValue("name", responseProducto.name);
                setValue("price", responseProducto.price);
                setValue("description", responseProducto.description);
            }
            catch (e) {
                console.log(e)
            }
        }
        request();
    },
        [productoId]
    )

    const onSubmit = async (data) => {
        console.log(data);
        try {
            const document = update(productoId, data, user?.token);
            if (document) {
                navigate("/")
            }
        } catch (e) {
            console.log(e)
        }
    }

    const handleDelete = async () => {
        try {
            const document = remove(productoId, user?.token);
            if (document) {
                navigate("/")
            }
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <div className="containerModificar">
            <Form onSubmit={handleSubmit(onSubmit)} className="form" >
             <p className="text-start formTitulo">Modificar Producto</p>
        
                <Input label="Nombre" register={{ ...register("name", { required: true }) }} />
                {errors.nombre && (<div><span>El campo es Obligatorio</span></div>)}

                <Input label="Precio" register={{ ...register("price", { required: true }) }} />
                {errors.nombre && (<div><span>El campo es Obligatorio</span></div>)}

                <Input label="Descripción" register={{ ...register("description", { required: true }) }} />
                {errors.nombre && (<div><span>El campo es Obligatorio</span></div>)}

                <Button variant="dark" type="submit">Guardar</Button>
                <Button variant="danger" type="submit" onClick={handleDelete} style={{ marginLeft: '1rem' }}>Eliminar</Button>
            </Form>

        </div>
    )
}


export default ProductosModificar;
