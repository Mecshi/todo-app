import { CreateToDo } from './components/CreateToDo'
import { NavBar } from './components/NavBar'
import { ToDoSee } from './components/ToDoSee'
import { useState } from 'react'

const App = () => {
  // create state for close and open modal when send form

  const [isOpen, setIsOpen] = useState(false)

  // state for form and save toDo

  const [toDos, setToDos] = useState([])

  // function send data

  const handleSubmit = (event) => {
    // prevent refresh page

    event.preventDefault()

    const toDo = event.target

    if (!toDo.titleToDo.value) return

    // insert toDo in state
    // add id count
    let id = 3
    setToDos([
      ...toDos,
      {
        id: id++,
        title: toDo.titleToDo.value,
        desc: toDo.descToDo.value
      }
    ])

    // clean form

    toDo.descToDo.value = ''
    toDo.titleToDo.value = ''

    // set state false for close form

    setIsOpen(!isOpen)
  }

  // TODO create state for important toDo

  return (
    <div>

      <NavBar />

      <ToDoSee toDos={toDos}/>

      <CreateToDo
        handleSubmit={handleSubmit}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />

    </div>
  )
}

export default App
