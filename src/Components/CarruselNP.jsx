import { useNavigate } from "react-router-dom";

export const CarruselNP = () => {
    const navigate = useNavigate();
    const goND = () => {
      navigate("/NumberDetail");
    };
    return (
        <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
            
            <div className="carousel-inner">
                <div className="carousel-item active" data-bs-interval="10000">
                    <img src="https://static.vecteezy.com/system/resources/previews/002/539/196/non_2x/colorful-cartoon-numbers-vector.jpg" className="d-block w-100" onClick={goND} />
                    <div className="carousel-caption d-none d-md-block">
                        <h5>Numeros</h5>
                        <p>Aprenderas los numeros con su sonido... </p>
                        
                    </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
};
