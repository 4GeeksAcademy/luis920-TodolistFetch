import React, { useEffect, useState } from "react";

const Tareas = () => {
  const [tareas, setTareas] = useState([]);

  const ListaDeTareas = () => {
    fetch('https://playground.4geeks.com/todo/users/luisGalvan')
      .then(response => response.json()) 
      .then(data => setTareas(data.todos));  
  };

  useEffect(() => {
    ListaDeTareas();
  }, []);

  
  return (
      <>
        <ul>
         {tareas.map((tarea)=>( 
          <li key={tarea.id}>{tarea.label}</li>
          ))}
        </ul>
      
      </>
      
  );
};

export default Tareas;
