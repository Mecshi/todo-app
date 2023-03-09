// ...

import { AddIcon } from '../assets/Icons'
import { Modal } from './Modal'

// ...

export const CreateToDo = (

  {
    handleSubmit,
    isOpen,
    setIsOpen
  }

) => {
  // create state for open modal
  // add function for close modal
  return (
    <section>
      <button
        className={`text-tahiti-100 rounded-full bg-tahiti-200 cursor-pointer bottom-0 fixed p-2 m-4 opacity-20 right-0 hover:animate-spin hover:opacity-100 hover:duration-200 ${isOpen ? 'hidden' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <AddIcon />
      </button>

      {
        isOpen &&
        <Modal
          handleSubmit={handleSubmit}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
        />
      }
    </section>

  )
}
