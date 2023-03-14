// import { IconCard } from '../assets/Icons'
import { addImportant, deleteImportant } from '../redux/actions'
import { useDispatch, useSelector } from 'react-redux'
import { useState, useEffect } from 'react'
// ...

export const ToDoCard = (

  {
    cutDesc,
    desc,
    title
  }

) => {
  // config dispatch
  const dispatch = useDispatch()

  const { toDoImportant } = useSelector(state => state)

  const [isImportant, setIsImportant] = useState(false)

  const handleImportant = () => {
    if (isImportant) {
      setIsImportant(false)
      dispatch(deleteImportant(title))
    } else {
      setIsImportant(true)
      dispatch(addImportant({
        title,
        desc,
        cutDesc
      }))
    }
  }
  useEffect(() => {
    toDoImportant.forEach((toDo) => {
      if (toDo.title === title) {
        setIsImportant(true)
      }
    })
  }, [toDoImportant])

  return (

    <div
      className='gap-5 bg-tahiti-400 rounded-lg p-4'
      key={title}
    >
      <div className='flex flex-row justify-between items-center'>
        <h2 className='text-tahiti-100 text-2xl font-normal'>{title}</h2>
        {/* <button className='rounded-lg hover:border hover:border-tahiti-200'>
          <IconCard />
        </button> */}
      </div>

      <section>
        <p className='text-tahiti-100 mr-2 pt-4 pb-3'>
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

        { /* Add setImportant here */ }

        <div className='flex justify-end'>
            {
              isImportant
                ? (
                    <button
                      className='p-1 rounded-sm hover:border hover:border-tahiti-200'
                      onClick={handleImportant}
                    >
                      ❤️
                    </button>
                  )
                : (
                    <button
                      className='p-1 rounded-sm hover:border hover:border-tahiti-200'
                      onClick={handleImportant}
                    >
                      🤍
                    </button>
                  )
            }
        </div>
      </section>
    </div>
  )
}
