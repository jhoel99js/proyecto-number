import { useNavigate } from "react-router-dom";

export const NavBarCover = () => {
  const navigate = useNavigate();
  const goBack = () => {
    navigate("/");
  };
  return (
 
    <div>
      <nav className="navbar navbar-expand-lg bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#"> </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Idioma
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a className="dropdown-item" >Español</a></li>
                  <li><a className="dropdown-item"  >Ingles</a></li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link " onClick={goBack}>Inicio</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};



  
    //<div>
    //<div className="d-flex h-100 text-center text-white bg-dark">
    //<div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
    //<header className="mb-auto">
    //<div>
    //<h3 className="float-md-start mb-0">Number</h3>
    //<nav className="nav nav-masthead justify-content-center float-md-end">
    //<a className="nav-link fw-bold py-1 px-0 active" aria-current="page" href="#">INICIO</a>
    //</nav>
    //</div>
    //</header>
    //</div>
    //</div>
    //</div>