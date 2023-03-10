import { Link } from "react-router-dom";
import React from "react";

const Secciones = React.memo(() => {
  return (
    <>
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link active" to={"/"}>Inicio</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to={"/contacto"}>Contacto</Link>
        </li>
      </ul>
    </>
  )
})

export default Secciones;
