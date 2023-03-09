export const ToDoCard = ({ toDos }) => {
  return (
    toDos.map(({ id, title, desc }) => {
      // create const for description rendering card

      const cutDesc = desc.split(' ').slice(0, 24).join(' ')

      return (

        <div
          className='gap-5 bg-tahiti-400 rounded-lg p-4'
          key={id}
        >
          <h2 className='text-tahiti-100 text-2xl'>{title}</h2>

          <p className='text-tahiti-100 '>
            {
              desc.length <= cutDesc.length
                ? desc
                : (
                    cutDesc.at(-1) === ','
                      ? cutDesc.slice(0, cutDesc.length - 1) + ' ...'
                      : cutDesc + ' ...'
                  )
            }
          </p>
        </div>
      )
    })
  )
}
