import { Route, Routes } from 'react-router-dom'
import { useState } from 'react'

// ...

import { CompleteToDo } from './pages/CompleteToDo'
import { CreateToDo } from './components/CreateToDo'
import { ImportantToDo } from './pages/ImportantToDo'
import { IncompleteToDo } from './pages/IncompleteToDo'
import { NavBar } from './components/NavBar'
import { NotFoundPage } from './pages/NotFoundPage'
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
        id: toDos.length,
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

  return (
    <div>

      <NavBar navBar={navBar} setNavBar={setNavBar} />
      {
        !navBar &&
        <CreateToDo
          handleSubmit={handleSubmit}
          isOpen={isOpen}
          setIsOpen={setIsOpen}

        />
      }

      {/* Created routes for toDo */}

      <Routes>
        <Route path='/' element={<ToDoSee toDos={toDos} />} />
        <Route path='/completed' element={<CompleteToDo />} />
        <Route path='/incompleted' element={<IncompleteToDo />} />
        <Route path='/important' element={<ImportantToDo />} />
        <Route path='*' element={<NotFoundPage />} />

      </Routes>

    </div>
  )
}

export default App
