export const Form = ({ setIsOpen, handleSubmit }) => {
  return (

    <form
      onSubmit={handleSubmit}
      className=' mx-7 mt-5 my border rounded-2xl p-5 items-center justify-center shadow-md md:h-auto md:w-1/2'
    >
      <div>

        <div className='flex justify-between items-align px-4'>

          <button
            onClick={() => setIsOpen(false)}
            className='text-tahiti-100 bg-transparent px-2 py-1 hover:bg-gray-500 hover:rounded-lg'
          >Cancel
          </button>

          <button
            className='bg-tahiti-200 px-7 py-1 rounded-2xl'
            type='submit'
          >Save
          </button>
        </div>

        <section className='flex flex-col gap-2 p-4'>

          <label className='text-tahiti-100' >Title</label>

          <input
            autoComplete='off'
            type='text'
            className='rounded-2xl py-1 px-3'
            name='titleToDo'
          />

        </section>

        <section className='flex flex-col gap-2 p-4'>

          <label className='text-tahiti-100'>Description</label>

          <textarea autoComplete='off'
            name='descToDo'
            className='overflow-hidden rounded-2xl py-1 px-3 font-ligth'
            cols='30'
            rows='10'
          />

        </section>

      </div>
    </form>
  )
}
