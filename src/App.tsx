import React, { useEffect, useState } from "react";
import Formulario from "./components/Formulario";
import ListaDeTareas from "./components/Lista de Tareas";
import "./App.scss";

export interface TareaProps {
  id: number
  titulo: string
  descripcion: string
}

function App() {
  const [tareas, setearTareas] = useState<TareaProps[]>(() => {
    try {
      const tareasEnLocalStorage = localStorage.getItem("tareas");
      return tareasEnLocalStorage ? JSON.parse(tareasEnLocalStorage) : [];
    } catch (error) {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("tareas", JSON.stringify(tareas));
  }, [tareas]);

  const [tarea, setearTarea] = useState<TareaProps>({
    id: Math.random() * (9999999999 - 0) + 0,
    titulo: "",
    descripcion: "",
  });

  const { titulo, descripcion } = tarea;

  const addTarea = (tarea: TareaProps) => {
    setearTareas([...tareas, tarea]);
  };

  const onChange = (e: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name } = e.target as HTMLInputElement;
    setearTarea({ ...tarea, [name]: (e.target as HTMLInputElement).value });
  };

  const removeTarea = (id: number) => {
    const newTareas = [...tareas].filter((tarea) => tarea.id !== id);
    setearTareas(newTareas);
  };

  const onSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();

    if (titulo === "" || descripcion === "") {
      alert("Debes completar los dos campos");
    } else {
      addTarea(tarea);
      setearTarea({
        id: Math.random() * (9999999999 - 0) + 0,
        titulo: "",
        descripcion: "",
      });
    }
  };

  return (
    <main className='main'>
      <Formulario onChange={onChange} tarea={tarea} onSubmit={onSubmit} />
      <ListaDeTareas tareas={tareas} removeTarea={removeTarea} />
    </main>
  );
}

export default App;
