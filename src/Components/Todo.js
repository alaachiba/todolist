import React from 'react'
import EditTodo from './EditTodo'

function Todo({el}) {

  return (
    <div>
      <p className={el.isDone && "decoration"}>{el.description}</p>
     <EditTodo el={el}/>
     
    </div>
  )
}

export default Todo