import React from "react";

//create your first component
const TareaRealizada = ({ task, EliminarTarea }) => {
  return (
    <div className="col-lg-3 d-flex justify-content-center">
      <div className="card carta">
        <div className="boton">
          <button className="" onClick={() => EliminarTarea()}>
            X
          </button>
        </div>
        <div className="card-body p-0 cuerpo">
          <p className="card-text">{task}</p>
        </div>
      </div>
    </div>
  );
};

export default TareaRealizada;
