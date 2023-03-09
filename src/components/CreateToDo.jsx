import { RiAddLine } from 'react-icons/ri'
import { useState } from 'react'
import { Modal } from './Modal'
export const CreateToDo = ({ handleSubmit }) => {
  // create state for open modal
  const [isOpen, setIsOpen] = useState(false)
  // add function for close modal
  return (
    <section>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`text-tahiti-100 rounded-full bg-tahiti-200 cursor-pointer left-0 bottom-0 fixed p-2 m-4  opacity-20 ${isOpen ? 'hidden' : ''} hover:animate-spin hover:opacity-100 hover:duration-400`}
      >
        <RiAddLine size={50} />
      </button>

      {
        isOpen && <Modal handleSubmit={handleSubmit} setIsOpen= {setIsOpen} />
      }
    </section>

  )
}
