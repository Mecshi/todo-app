import { useState } from 'react'

// ...

import { CreateToDo } from './components/CreateToDo'
import { NavBar } from './components/NavBar'
import { ToDoSee } from './components/ToDoSee'

// ...
const App = () => {
  // create state for close and open modal when send form

  const [isOpen, setIsOpen] = useState(false)

  // created state for select icon

  const [navBar, setNavBar] = useState(false)

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
    setToDos([
      ...toDos,
      {
        id: toDo.titleToDo.value,
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

  // TODO function press esc close modal

  // TODO create state for important toDo

  return (
    <div>

      <NavBar navBar={navBar} setNavBar={setNavBar} />

      <ToDoSee toDos={toDos} />
      {
        !navBar &&
        <CreateToDo
          handleSubmit={handleSubmit}
          isOpen={isOpen}
          setIsOpen={setIsOpen}

        />
      }

    </div>
  )
}

export default App
