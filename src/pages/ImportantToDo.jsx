import { useSelector } from 'react-redux'
import { ToDoCard } from '../components/ToDoCard'
export const ImportantToDo = () => {
  const { toDoImportant } = useSelector(state => state)

  return (
    <section className='flex justify-center '>
      <div
        className='grid grid-cols-1 gap-5 md:grid-cols-3 py-24 w-[70%]'
      >
        {
          toDoImportant.map(({ title, desc, cutDesc }) => {
            return (
              <ToDoCard
                cutDesc={cutDesc}
                desc={desc}
                key={title}
                title={title}
              />
            )
          })
        }
      </div>
    </section>
  )
}
