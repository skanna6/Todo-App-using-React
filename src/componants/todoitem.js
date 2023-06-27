import React from 'react'

const TodoItem = (props) => {
  return (
    <div onClick={()=>{ props.DelItem(props.id)}}>

        <li key={props.key}>{props.text}</li>
        
    </div>
  )
}

export default TodoItem;