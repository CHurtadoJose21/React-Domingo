import { Fragment } from "react"
import 'bootstrap/dist/css/bootstrap.min.css'
import Menu from "./Componente/Menu";
import Carrusel from "./Componente/Carrusel";
import PreguntasFrecuentes from "./Componente/Acordion";

function App() {
  return (
    <>
      <Menu />
      <Carrusel />
      <PreguntasFrecuentes />
    </>
  );
}

export default App;
