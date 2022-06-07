import { Alert } from "bootstrap";
import { useState } from "react";

import "../Styles/number.css";
import { Demo2 } from "./Demo2";

export const FormNyLe = () => {


    const [FormNumberValues, setNumberValues] = useState({
        number: "",
        opcion: false,
        //espanol: "",  
    });
   // this.onValueChange = this.onValueChange.bind(this);


    /*ValueChange=() => {
        this.setState({
            selectedOption: EventTarget.target.value
        });
    };*/
    function ocultarform() {
        console.log("HOLA")
        form1.style.visibility = "none";

    }
  
    const { number,opcion } = FormNumberValues;

    const handlerNumber = (event) => {

        event.preventDefault();
       // console.log(state.opcion)
        console.log("Formulario ", FormNumberValues);
       
        if (FormNumberValues.number >= 0) {
            //if (FormNumberValues.opcion.checked ) {
                ocultarform();
                writeNumber();
        //}

        } else {
            Alert("Error", "Ingresa numeros");
        }


    };
    const handlerOnChange = ({ target }) => {
        const { name, value } = target;
        setNumberValues({ ...FormNumberValues, [name]: value });

    };

    
    
    const writeNumber=()=>{
        let count=1;
        while(count<=number){
            document.write(count+"<br/>");
            count=count+1;
            
        }        
    }
    return (
        <div className="">
            <form className="g-3 was-validated" id="form1"onSubmit={handlerNumber}>
                <div className="form-floating mb-3 ">

                    <input type="number" className="form-control col-xs-2" id="number" value={number} required name="number" onChange={handlerOnChange} />
                    <label htmlFor="validationTooltip01" className="form-label">Hasta que nuemero </label>
                    <div className="valid-tooltip">

                    </div>
                </div>
                <div className="form-check ">
                    <input type="radio" className="form-check-input" id="ingles" name="radio-stacked"  /*checked={opcion}*/  onChange={handlerOnChange} required/>
                    <label className="form-check-label" htmlFor="validationFormCheck2">Ingles</label>
                </div>
                <div className="form-check ">
                    <input type="radio" className="form-check-input" id="espanol" name="radio-stacked"  /*checked={opcion}*/     onChange={handlerOnChange}required />
                    <label className="form-check-label" htmlFor="validationFormCheck3">Español</label>
                    <div className="invalid-feedback  ">Elija el Idioma</div>
                </div>

                <div className="col-12">
                    <button className="btn btn-primary" type="submit" >PLAY  </button>
                </div>
            </form>

           <div>
               
            </div>

            
        </div>
    );
};