import React from "react";

const NotFound = () => {
  return (
    <div className=" p-5 not-found ">
      <h2 className="text-center" >No se encontraron ciudades</h2>
      <p className="text-center" >Lo sentimos, no hay ciudades para mostrar en este momento.</p>
      <img src="src/assets/img/404.gif" alt="not-Found" />
    </div>
  );
};

export default NotFound;
