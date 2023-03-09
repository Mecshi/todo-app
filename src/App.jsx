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
    console.log(event)
    event.preventDefault()

    const toDo = event.target

    if (!toDo.titleToDo.value) return

    // insert toDo in state
    // add id count
    let id = 0
    setToDos([
      ...toDos,
      {
        id: id++,
        title: toDo.titleToDo.value,
        desc: toDo.descToDo.value,
        cutDesc: (toDo.descToDo.value).split(' ').slice(0, 24).join(' ')
      }
    ])

    // clean form

    toDo.titleToDo.value = ''
    toDo.descToDo.value = ''
    // TODO ver cierre modal despues de enviar form
  }

  // TODO create state for important toDo
  return (
    <div>

      <NavBar />

      <ToDoSee toDos={toDos}/>

      <CreateToDo handleSubmit={handleSubmit}/>

    </div>
  )
}

export default App
