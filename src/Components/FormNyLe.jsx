import { Alert } from "bootstrap";
import { useState } from "react";

import "../Styles/number.css";
import { Demo2 } from "./Demo2";

export const FormNyLe = () => {
  const [showForm, setShowForm] = useState(true);
  const [numberArray, setNumberArray] = useState([]);
  const [FormNumberValues, setNumberValues] = useState({
    number: "",
    lenguaje: "",
  });

  const { number, opcion } = FormNumberValues;

  const handlerNumber = (event) => {
    event.preventDefault();
    console.log("Formulario ", FormNumberValues);
    if (FormNumberValues.number >= 0) {
      let numbers = [];
      for (let i = 0; i < FormNumberValues.number; i++) {
        numbers.push(i + 1);
      }
      setNumberArray(numbers);
      setShowForm(false);
    } else {
      Alert("Error", "Ingresa numeros");
    }
  };
  const handlerOnChange = ({ target }) => {
    const { name, value } = target;
    setNumberValues({ ...FormNumberValues, [name]: value });
  };

  const handlerClickOnNumber = (numero) => {
    console.log("Dio un click en el numero", numero);
    //TODO: Implementar la logica
  };

  console.log("FormNumberValues", FormNumberValues);
  return (
    <div className="">
      {showForm ? (
        <form className="g-3 was-validated" id="form1" onSubmit={handlerNumber}>
          <div className="form-floating mb-3 ">
            <input
              type="number"
              className="form-control col-xs-2"
              id="number"
              value={number}
              required
              name="number"
              onChange={handlerOnChange}
            />
            <label htmlFor="validationTooltip01" className="form-label">
              Hasta que nuemero{" "}
            </label>
            <div className="valid-tooltip"></div>
          </div>
          <div className="form-check ">
            <input
              type="radio"
              className="form-check-input"
              id="ingles"
              name="lenguaje"
              value={"ingles"}
              /*checked={opcion}*/
              onChange={handlerOnChange}
              required
            />
            <label className="form-check-label" htmlFor="validationFormCheck2">
              Ingles
            </label>
          </div>
          <div className="form-check ">
            <input
              type="radio"
              className="form-check-input"
              id="espanol"
              name="lenguaje"
              value={"espanol"}
              /*checked={opcion}*/
              onChange={handlerOnChange}
              required
            />
            <label className="form-check-label" htmlFor="validationFormCheck3">
              Español
            </label>
            <div className="invalid-feedback  ">Elija el Idioma</div>
          </div>

          <div className="col-12">
            <button className="btn btn-primary" type="submit">
              PLAY{" "}
            </button>
          </div>
        </form>
      ) : (
        <div>
          {numberArray.map((x) => {
            return (
              <div key={x} onClick={() => handlerClickOnNumber(x)}>
                {x}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
