import React from 'react'
import { ItemTarea } from './ItemTarea';

export const ListTareas = ({tareas,handleDelete, handleUpdate}) => {
  return (
    <ul
      className='list-group list-group-flush px-4'
    >
      {
        tareas.map( (tarea,index) => (
          <ItemTarea
            key={tarea.id}
            tarea = {tarea}
            index = {index}
            handleDelete = {handleDelete}
            handleUpdate = {handleUpdate}
          />
        ))
      }
    </ul>
  )
}
