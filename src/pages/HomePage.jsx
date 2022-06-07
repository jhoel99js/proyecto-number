import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Styles/Home.css";

export const HomePage = () => {
  const navigate = useNavigate();

  const [formValues, setFormValues] = useState({
    name: "",
  });

  const { name } = formValues;

  const handlerSubmit = (event) => {
    event.preventDefault();
    console.log("Datos ", formValues);
    if (formValues.name !== "") {
      navigate("/NumberPage");
    } else {
      alert("Error", "Ingrese Su Nombre");
    }
  };

  const handlerOnChange = ({ target }) => {
    const { name, value } = target;
    setFormValues({ ...formValues, [name]: value });
  };

  return (
    <div className="text-center vh-100 vw-100">
      <div className="form-signin w-100 m-auto home_container">
        <h1>Bienvenido</h1>
        <div>
          <form className="was-validation" onSubmit={handlerSubmit} >
            <h1 className="h3 mb-3 fw-normal">Listo para aprender! </h1>
            <div className="form-floating mb-3">
              <input type="text" id="name  validationTooltip03" name="name" className="form-control" value={name} required onChange={handlerOnChange}/>
              <label htmlFor="floatingInput">Nombre</label>
            </div>
            <button type="submit" className="w-100 btn btn-lg btn-primary">
              Jugar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
