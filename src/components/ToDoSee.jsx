import { ToDoCard } from './ToDoCard'

// ...

export const ToDoSee = ({ toDos }) => {
  return (

    <section className='flex justify-center '>
      <div
        className='grid grid-cols-1 gap-5 md:grid-cols-2 py-24 w-[90%] md:w-[70%]'
      >
        { /*
            {
              examplesCard.map(({ title, desc }) => {
                // create const for description rendering card
                const cutDesc = desc.split(' ').slice(0, 24).join(' ')
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
          */
        }

        {
          toDos.map(({ title, desc, id }) => {
            // create const for description rendering card
            const cutDesc = desc.split(' ').slice(0, 24).join(' ')
            return (
              <ToDoCard
                cutDesc={cutDesc}
                desc={desc}
                key={id}
                title={title}
              />
            )
          })
        }
      </div>
    </section>
  )
}
