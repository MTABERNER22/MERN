import { useForm } from "react-hook-form";
import Input from "../Components/Input";
import { Form, Row} from 'react-bootstrap';
import Alertas from "../Components/Alertas";
import { useState } from "react";
import ButtonWhitLoading from "../Components/ButtonWhitLoading";
import { registroMessage } from "../Util/errorsMessage";
import { create } from "../Services/usuariosServices";
import "./Pages.css"



function Registro() {
    const { register, handleSubmit, formState: { errors } } = useForm({ mode: "onChange" });
    const [alert, setAlert] = useState({ variant: "", text: "" });
    const [loading, setLoading] = useState(false);

    const onSubmit = async (data) => {
        setLoading(true)
        try {

            const document = await create(data)

            console.log(document);
            if (document) {
                setAlert({ variant: "success", text: "Gracias por registrarse!", duration: 1000, link: '/ingresar' });
                setLoading(false)
            }

        } catch (e) {
            setAlert({ variant: "danger", text: registroMessage[e.code] || 'Ha ocurrido un error' });
            setLoading(false)
        }
    }

    return (
        <div className="containerRegistro" >
            <Form onSubmit={handleSubmit(onSubmit)} className="form" method="POST">
                <div className="containerForm">
                    <div className="formTitulo">
                    <p >Registrate</p>
                    </div>
                    <div className="iconoRegistro">
                        <i className="fa-solid fa-user"></i>
                    </div>
                </div>
                <Row>

                    {errors.nombre && (<Form.Text id="passwordHelpBlock" muted>El Nombre es obligatorio</Form.Text>)}
                    <Input label="Nombre" register={{ ...register("nombre", { required: true }) }} />

                    {errors.apellido && (<Form.Text id="passwordHelpBlock" muted>El Apellido es obligatorio</Form.Text>)}
                    <Input label="Apellido" register={{ ...register("apellido", { required: true }) }} />

                    {errors.email && (<Form.Text id="passwordHelpBlock" muted>El Email es obligatorio</Form.Text>)}
                    <Input label="Email" type="email" register={{ ...register("email", { required: true }) }} />

                    {errors.password?.type === "required" && (<Form.Text id="passwordHelpBlock" muted>La contraseña es obligatoria</Form.Text>)}
                    {errors.password?.type === "minLength" && (<Form.Text id="passwordHelpBlock" muted>La constraseña debe tener al menos 6 caracteres</Form.Text>)}
                    {errors.password?.type === "pattern" && (<Form.Text id="passwordHelpBlock" muted>La constraseña debe tener al menos un número, una letra mayúscula y otra minúscula</Form.Text>)}
                    <Input label="Contraseña" type="password" register={{ ...register("password", { required: true, minLength: 6, pattern: /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,12}/ }) }} />

                </Row>
                <ButtonWhitLoading disable={loading} >E n v i a r</ButtonWhitLoading>
            </Form>
            <Alertas
                {...alert} 
            />

        </div>

    )
}


export default Registro;
