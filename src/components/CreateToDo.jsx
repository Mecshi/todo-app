import { RiAddLine } from 'react-icons/ri'
import { useState } from 'react'
import { Modal } from './Modal'
export const CreateToDo = () => {
  // create state for open modal
  const [isOpen, setIsOpen] = useState(false)
  // add function for close modal
  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`text-tahiti-100 rounded-full bg-tahiti-200 cursor-pointer left-0 bottom-0 fixed p-2 m-4 hover:animate-spin ${isOpen ? 'hidden' : ''}`}
      >
        <RiAddLine size={50} />
      </button>

      {
        isOpen && <Modal setIsOpen= {setIsOpen} />
      }
    </>

  )
}
