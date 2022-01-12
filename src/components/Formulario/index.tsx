import React from 'react';
import './styles.scss';

export interface FormProps {
  tarea: {
    titulo: string
    descripcion: string
  }
  onSubmit: (e: React.SyntheticEvent) => void
  onChange: (e: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>) => void
}

const Formulario = ({ onChange, tarea, onSubmit }: FormProps) => {
  const { titulo, descripcion } = tarea;

  return (
    <div className={'formContainer'}>
      <h2>LISTA DE TAREAS</h2>
      <form onSubmit={e => onSubmit(e)} className={'form'}>
        <h3>AGREGA UNA TAREA</h3>
        <div className={'inputsContainer'}>
          <input
            onChange={e => onChange(e)}
            placeholder="Titulo..."
            type="text"
            className={'tituloInput'}
            name="titulo"
            value={titulo}
          />
          <textarea
            name="descripcion"
            value={descripcion}
            onChange={e => onChange(e)}
            placeholder="Descripción..."
            className={'descripcionInput'}
          />
          <button className={'agregar'}>Agregar</button>
        </div>
      </form>
    </div>
  );
};

export default Formulario;
