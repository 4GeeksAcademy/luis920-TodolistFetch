import React from "react";

// Componente para el input de agregar tarea
const InputAgregarTarea = ({ input, AgregarTarea, tarea }) => {
  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      AgregarTarea();  // Llamamos a la función AgregarTarea
    }
  };

  return (
    <div>
      <header>
        <h1>
          <span className="todo">To do</span> list
        </h1>
      </header>
      <div className="input">
        <input
          className="task-input"
          type="text"
          autoComplete="off"
          name="text"
          placeholder="Próxima tarea"
          value={tarea}
          onChange={input} 
          required
          onKeyDown={handleKeyDown}  
        />
      </div>
    </div>
  );
};

export default InputAgregarTarea;
