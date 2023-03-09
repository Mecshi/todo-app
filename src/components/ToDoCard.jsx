export const ToDoCard = (

  {
    cutDesc,
    desc,
    title
  }

) => {
  return (

    <div
      className='gap-5 bg-tahiti-400 rounded-lg p-4'
      key={title}
    >
      <h2 className='text-tahiti-100 text-2xl font-normal'>{title}</h2>

      <p className='text-tahiti-100 mr-2'>
        {
          desc.split(' ').length <= cutDesc.split(' ').length
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
}
