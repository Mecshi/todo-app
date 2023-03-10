export const Form = (

  {
    handleSubmit,
    isOpen,
    setIsOpen
  }

) => {
  return (

    <form
      className='bg-tahiti-400 mx-7 mt-5 my border rounded-2xl p-5 items-center justify-center shadow-md md:h-auto md:w-1/2'
      onSubmit={handleSubmit}
    >
      <div>

        <div className='flex justify-between items-align px-4'>

          <button
            className='text-tahiti-100 bg-transparent px-2 py-1 hover:bg-gray-500 hover:rounded-lg'
            onClick={() => setIsOpen(!isOpen)}
            type='button'
          >
            Cancel
          </button>

          <button
            className='bg-tahiti-200 px-7 py-1 rounded-2xl hover:bg-opacity-70 hover:duration-150'
            type='submit'
          >
            Save
          </button>
        </div>

        <section className='flex flex-col gap-2 p-4'>

          <label
            className='text-tahiti-100'
            htmlFor='titleToDo'
          >
            Title
          </label>

          <input
            autoComplete='off'
            className='rounded-2xl py-1 px-3'
            name='titleToDo'
            type='text'
          />

        </section>

        <section className='flex flex-col gap-2 p-4'>

          <label
            className='text-tahiti-100'
            htmlFor='descToDo'
          >
            Description
          </label>

          <textarea
            autoComplete='off'
            className='overflow-hidden rounded-2xl py-1 px-3 font-ligth'
            cols='30'
            name='descToDo'
            rows='10'
          />

        </section>

      </div>
    </form>
  )
}
