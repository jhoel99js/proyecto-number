import "../Styles/Home.css";


export const HomePage = () => {
    return (
        <div className="main_container home_container">
            <h1>Bienvenido</h1>
            <p className="descripcion">
                Listo para aprender!            
            </p>

            <form>
                <div className="form_control " >
                    <label className="etiqueta">
                        Nombre
                    </label>
                    <input id="name" />
                </div>
                <button type="submit" className="start_button">
                    Iniciar
                </button>
            </form>
        </div>
    );
};