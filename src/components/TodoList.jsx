import React from 'react'
import { Taks } from './Taks'


const TodoList = ({task}) => {
  return (
    <div className='shadow p-2 lista-tareas bg-white' >

      <h5 className='mt-1 mb-2 text-center'>AGREGAR TAREA</h5>
      {task.map( (item) => (
         <Taks key={item.id} item={item} />
      ))}
      
      
      

    </div>
  )
}

export default TodoList