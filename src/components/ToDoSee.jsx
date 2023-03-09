import { examplesCard } from '../utils/constants'
import { ToDoCard } from './ToDoCard'

// ...

export const ToDoSee = ({ toDos }) => {
  return (

    <section
      className='grid grid-cols-1 gap-5 mx-8 md:grid-cols-3 py-24'
    >
      {
        examplesCard.map(({ title, desc }) => {
          // create const for description rendering card
          const cutDesc = desc.split(' ').slice(0, 24).join(' ')
          return (
            <ToDoCard
              cutDesc = {cutDesc}
              desc = {desc}
              key = {title}
              title = {title}
            />
          )
        })
      }
      {
        toDos.map(({ title, desc }) => {
          // create const for description rendering card
          const cutDesc = desc.split(' ').slice(0, 24).join(' ')
          return (
            <ToDoCard
              cutDesc = {cutDesc}
              desc = {desc}
              key = {title}
              title = {title}
            />
          )
        })
      }
    </section>
  )
}
