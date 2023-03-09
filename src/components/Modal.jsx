import { Form } from './Form'

// ...

export const Modal = (

  {
    handleSubmit,
    isOpen,
    setIsOpen
  }

) => {
  return (
    <div className='fixed inset-0 flex backdrop-blur-sm justify-center items-center bg-opacity-75 bg-tahiti-400' >
      <Form
        handleSubmit={handleSubmit}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
    </div>
  )
}
