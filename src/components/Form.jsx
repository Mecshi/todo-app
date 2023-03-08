import { useState } from 'react'
export const Form = () => {
  // state for form and save toDo
  const [toDos, setToDos] = useState([])
  console.log(toDos)
  // function send data
  const handleSubmit = (event) => {
    // prevent refresh page
    event.preventDefault()

    const toDo = event.target

    if (!toDo[1].value) return

    // insert toDo in state
    setToDos([
      ...toDos,
      {
        title: toDo[1].value,
        desc: toDo[2].value
      }
    ])
    // clean form
    toDo[1].value = ''
    toDo[2].value = ''
  }

  return (
    <form
      className=' mx-7 mt-5 my border rounded-2xl p-5 items-center justify-center shadow-md md:h-auto md:w-1/2'
      onSubmit={handleSubmit}
    >
      <div>
        <div className="flex justify-end px-4">
          <button className='bg-tahiti-200 px-7 py-1 rounded-2xl' type="submit">Save</button>
        </div>
        <section className="flex flex-col gap-2 p-4">
          <label className="text-tahiti-100">Title</label>
          <input type="text" className="rounded-2xl py-1 px-3" />
        </section>
        <section className="flex flex-col gap-2 p-4">
          <label className="text-tahiti-100">Description</label>
          <textarea className=' overflow-hidden rounded-2xl py-1 px-3 font-ligth' cols="30" rows="10"></textarea>
        </section>
      </div>
    </form>
  )
}
