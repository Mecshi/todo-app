import { Form } from './Form'

export const Modal = ({ setIsOpen }) => {
  return (
    <div className="fixed inset-0 flex backdrop-blur-sm justify-center items-center bg-opacity-25 bg-tahiti-400" >
      <Form setIsOpen={setIsOpen} />
    </div>
  )
}
