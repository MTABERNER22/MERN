import { useForm } from "react-hook-form";
import Input from "../Components/Input";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { createProductos } from "../Services/productosServices";
import { useAuthContext } from "../Context/AuthContext";

function ProductosAlta() {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({ mode: "onChange" });
  const navigate = useNavigate();
  const { user } = useAuthContext();

  const onSubmit = async (data) => {
    console.log(data);
    try {
      const document = await createProductos(data, user?.token)

      console.log(
        document
      );
      if (document) {
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };


  return (
    <div className="containerAlta">
      <Form onSubmit={handleSubmit(onSubmit)} className="form">
        <div className="containerForm">
          <div className="formTitulo">
            <p >Agregar Producto</p>
          </div>
          <div className="iconoRegistro">
            <i className="fa-solid fa-plus"></i>
          </div>
        </div>
        <Input
          name="name"
          label="Nombre"
          register={{ ...register("name", { required: true }) }}
        />
        {errors.nombre && (
          <div>
            <span>This field is required</span>
          </div>
        )}

        <Input name="price" label="Precio" type="number" register={{ ...register("price", { required: true }) }} />
        {errors.nombre && (
          <div>
            <span>This field is required</span>
          </div>
        )}
        <Input label="Descripción" name="description" register={{ ...register("description") }} />
        <Input label="categoria" name="category" register={{ ...register("category") }} />
        <input  name="url" type="file"  onChange={(e)=> setValue('url', e.target?.files[0])}/>
        <br />
        <Button type="submit" variant="primary" style={{marginTop: '1rem'}}>
          Guardar Producto
        </Button>
      </Form>
    </div>
  );
}

export default ProductosAlta;
