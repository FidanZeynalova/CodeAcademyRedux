import React from 'react'

function ToDo({af}) {
  return (
      <li key={af.id}>{af.todo} <button>Delete</button> <button>Complete</button></li>
  )
}

export default ToDo
