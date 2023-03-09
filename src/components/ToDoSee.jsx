import { ToDoCard } from './ToDoCard'

// ...

export const ToDoSee = ({ toDos }) => {
  return (
    <section
      className='grid grid-cols-1 gap-5 mx-8 md:grid-cols-3'
    >

      <ToDoCard
        toDos={toDos}
      />

    </section>
  )
}
