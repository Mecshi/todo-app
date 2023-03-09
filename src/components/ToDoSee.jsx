import { examplesCard } from '../utils/constants'
import { ToDoCard } from './ToDoCard'
// ...

export const ToDoSee = ({ toDos }) => {
  return (
    <section
      className='grid grid-cols-1 gap-5 mx-8 md:grid-cols-3'
    >
      {
        examplesCard.map(({ id, title, desc }) => {
          // create const for description rendering card
          const cutDesc = desc.split(' ').slice(0, 24).join(' ')
          return (
            <ToDoCard
              cutDesc = {cutDesc}
              desc = {desc}
              key = {id}
              title = {title}
            />
          )
        })
      }
      {
        toDos.map(({ id, title, desc }) => {
          // create const for description rendering card
          const cutDesc = desc.split(' ').slice(0, 24).join(' ')
          return (
            <ToDoCard
              cutDesc = {cutDesc}
              desc = {desc}
              key = {id}
              title = {title}
            />
          )
        })
      }
    </section>
  )
}
