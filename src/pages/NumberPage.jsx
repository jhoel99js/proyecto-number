import { CarruselNP } from "../Components/CarruselNP";
import { NavBarCover } from "../Components/NavBarCover";


export const NumberPage = () => {
  return (
    <div className="d-flex h-100 text-center text-white bg-dark cover-container d-flex w-100 h-100 p-3 mx-auto flex-column mb-auto">
      <NavBarCover/>
      <h1>Hola... estas listo!</h1>
      <div className="px-3"> <CarruselNP/></div>
    </div>
  );
};