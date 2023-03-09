import { CreateToDo } from './components/CreateToDo'
import { NavBar } from './components/NavBar'
import { ToDoSee } from './components/ToDoSee'
import { useState } from 'react'

const App = () => {
  // state for form and save toDo

  const [toDos, setToDos] = useState([])
  console.log(toDos)

  // function send data

  const handleSubmit = (event) => {
    // prevent refresh page

    event.preventDefault()

    const toDo = event.target

    if (!toDo.titleToDo.value) return

    // insert toDo in state

    setToDos([
      ...toDos,
      {
        title: toDo.titleToDo.value,
        desc: toDo.descToDo.value
      }
    ])

    // clean form

    toDo.titleToDo.value = ''
    toDo.descToDo.value = ''
    // TODO ver cierre modal despues de enviar form
  }
  return (
    <div>

      <NavBar />

      <ToDoSee />

      <CreateToDo handleSubmit={handleSubmit}/>

    </div>
  )
}

export default App
