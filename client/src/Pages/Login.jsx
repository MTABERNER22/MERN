import { useForm } from "react-hook-form";
import Input from "../Components/Input";
import { Form, Row } from 'react-bootstrap';
import Alertas from "../Components/Alertas";
import { useState } from "react";
import ButtonWhitLoading from "../Components/ButtonWhitLoading";
import { useAuthContext } from "../Context/AuthContext";
import { login } from "../Services/usuariosServices";
import { loginMessage } from "../Util/errorsMessage";
import "./Pages.css"


function Login() {
  const { register, handleSubmit, formState: { errors } } = useForm({ mode: "onChange" });
  const [alert, setAlert] = useState({ variant: "", text: "" });
  const [loading, setLoading] = useState(false);
  const { handleLogin } = useAuthContext()

  const onSubmit = async (data) => {
    try {
      const user = await login(data)

      if (user) {
        handleLogin(user);
        setAlert({ variant: "success", text: "Bienvenido!", duration: 2000, link: '/' });
      }

      setLoading(true)
      console.log("🚀 ~ file: Login.jsx:22 ~ onSubmit ~ user:", user);


    } catch (e) {
      setAlert({ variant: "danger", text: loginMessage[e.code] || 'Ha ocurrido un error' });
      setLoading(false)
    }
  }

  return (
    <div className="containerLogin">
      <Form onSubmit={handleSubmit(onSubmit)} className="form">
        <div className="containerForm">
          <div className="formTitulo">
            <p >Ingresar</p>
          </div>
          <div className="iconoRegistro">
            <i className="fa-solid fa-right-to-bracket"></i>
          </div>
        </div>
        <Row>

          {errors.email && (<Form.Text id="passwordHelpBlock" muted>El campo es obligatorio</Form.Text>)}
          <Input label="Email" type="email" register={{ ...register("email", { required: true }) }} />

          {errors.password?.type === "required" && (<Form.Text id="passwordHelpBlock" muted>El campo es obligatorio</Form.Text>)}
          <Input label="Contraseña" type="password" register={{ ...register("password", { required: true }) }} />

        </Row>
        <ButtonWhitLoading disable={loading}>I n g r e s a r</ButtonWhitLoading>
      </Form>
      <Alertas
        {...alert}
      />
    </div>
  )
}


export default Login;