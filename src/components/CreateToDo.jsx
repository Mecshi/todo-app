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
        className={`text-tahiti-500 rounded-full bg-tahiti-200 bg-opacity-80 cursor-pointer bottom-5 fixed p-2 right-5 ${isOpen ? 'hidden' : ''} flex flex-row items-center`}
        name='Add toDo'
        onClick={() => setIsOpen(!isOpen)}
      >
        <AddIcon />
        <span className='px-4 text-2xl font-medium'>Add</span>
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
