import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faPenToSquare, faCheck } from '@fortawesome/free-solid-svg-icons';

export const Taks = ({item}) => {
    const {id, tarea, descripcion, fecha, estado} = item;
  return (
    <div className="card my-2">
        <div className="card-body">
          <h5 className="card-title">{tarea}</h5>
          <h6 className="card-subtitle mb-2 text-muted">{fecha}</h6>
          <p className="card-text">{descripcion}</p>
          <div className="btn-group">
            <button className="btn boton-check"><FontAwesomeIcon icon={faCheck} /></button>
            <button className="btn btn-warning text-white"><FontAwesomeIcon icon={faPenToSquare} /></button>
            <button className="btn btn-danger text-white"><FontAwesomeIcon icon={faTrash} /></button>
          </div>
        </div>
      </div>
  )
}
