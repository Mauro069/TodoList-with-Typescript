import React from 'react';
import { TareaProps } from '../../App';
import Tarea from '../Tarea';
import './styles.scss';

interface TareasProps {
  tareas: TareaProps[]
  removeTarea: (id: number) => void
}

const ListaDeTareas = ({ tareas, removeTarea }: TareasProps) => {
  return (
    <div className='tareasContainer'>
      {tareas &&
        tareas.map(({ titulo, descripcion, id }) => (
          <Tarea key={id} titulo={titulo} descripcion={descripcion} removeTarea={() => removeTarea(id)} />
        ))}
    </div>
  );
};

export default ListaDeTareas;
