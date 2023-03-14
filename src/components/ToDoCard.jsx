import { useDispatch, useSelector } from 'react-redux'
import { useState, useEffect } from 'react'

// ...

import { addImportant, deleteImportant } from '../redux/actions'
import { IconStarFull, IconStarNull, IconCard } from '../assets/Icons'

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

  // gets the global state property

  const { toDoImportant } = useSelector(state => state)

  // create state for important toDo

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
      { /* Add setImportant here */}

      <div className='flex flex-row-reverse justify-between pb-2'>
        <button className='rounded-lg hover:border hover:border-tahiti-200'>
          <IconCard />
        </button>
        {
          isImportant
            ? (
                <button
                  className='p-1 rounded-sm hover:border hover:border-tahiti-200  text-tahiti-200'
                  onClick={handleImportant}
                >
                  <IconStarFull />
                </button>
              )
            : (
                <button
                  className='p-1 rounded-sm hover:border hover:border-tahiti-200'
                  onClick={handleImportant}
                >
                  <IconStarNull />
                </button>
              )
        }
      </div>

      <h2 className='text-tahiti-100 text-2xl font-normal'>{title}</h2>

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

      </section>
    </div>
  )
}
