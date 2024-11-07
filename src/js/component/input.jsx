import React from "react";

//create your first component
const InputAgregarTarea = ({ input, AgregarTarea, tarea }) => {
  return (
    <div>
      <header>
        <h1>
          <span className="todo">To do</span> list
        </h1>
      </header>
      <div className="input">
        <input
          className=""
          type="text"
          autoComplete="off"
          name="text"
          placeholder="Proxima tarea"
          value={tarea}
          onChange={input}
          required
          onKeyDown={(event) => {
            if (event.key === "Enter") {
              AgregarTarea();
            }
          }}
        />
      </div>
    </div>
  );
};

export default InputAgregarTarea;
