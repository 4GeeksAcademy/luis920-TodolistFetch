import React, { useEffect, useState } from "react";
import TareaRealizada from "./tarea.jsx";
import InputAgregarTarea from "./input.jsx";

// Componente principal
const Home = () => {
  const [tarea, setTarea] = useState("");
  const [task, setTask] = useState([]);

  // Crear el usuario al cargar la página
  useEffect(() => {
    fetch("https://playground.4geeks.com/todo/users/luisGalvan", {
      headers: {
        accept: "application/json",
        "Content-type": "application/json",
      },
      method: "POST",
    })
      .then((response) => response.json())
      .catch((error) => console.error("Error al crear el usuario:", error));
  }, []);

  // Función para traer las tareas
  const TraerDatos = () => {
    fetch("https://playground.4geeks.com/todo/users/luisGalvan")
      .then((response) => response.json())
      .then((data) => setTask(data.todos))
      .catch((error) => console.error("Error al obtener las tareas:", error));
  };

  // Ejecutar TraerDatos cuando se monta el componente
  useEffect(() => {
    TraerDatos();
  }, []);

  // Manejar el cambio en el input
  const handleChange = (event) => {
    setTarea(event.target.value);
  };

  // Agregar una nueva tarea
  const AgregarTarea = () => {
    if (tarea === "") {
      alert("Debes crear una tarea");
    } else {
      const NuevaTarea = {
        label: tarea,
        is_done: false,
      };

      fetch("https://playground.4geeks.com/todo/todos/luisGalvan", {
        method: "POST",
        headers: {
          accept: "application/json",
          "Content-type": "application/json",
        },
        body: JSON.stringify(NuevaTarea),
      })
        .then(() => {
          TraerDatos(); // Actualizar las tareas después de agregar una
          setTarea(""); // Limpiar el input
        })
        .catch((error) => console.error("Error al agregar tarea:", error));
    }
  };

  // Eliminar una tarea
  const EliminarTarea = (id) => {
    fetch(`https://playground.4geeks.com/todo/todos/${id}`, {
      method: "DELETE",
    })
      .then(() => TraerDatos()) // Actualizar la lista de tareas después de eliminar
      .catch((error) => console.error("Error al eliminar tarea:", error));
  };

  return (
    <div>
      <InputAgregarTarea input={handleChange} AgregarTarea={AgregarTarea} />
      <div className="row tareas">
        {task.length > 0 ? (
          task.map((element) => (
            <TareaRealizada
              key={element.id} // Asignar la key a cada tarea
              task={element.label}
              EliminarTarea={() => EliminarTarea(element.id)} // Pasar el id a la función
            />
          ))
        ) : (
          <div className="tareasPendientes">
            <p>No hay tareas, añade tareas</p>
          </div>
 
        )}
      </div>
    </div>
  );
};

export default Home;
