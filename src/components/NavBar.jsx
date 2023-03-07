import { useState } from 'react'

// ...

import { menuNav } from '../utils/constants'
import { RiMenu4Line } from 'react-icons/ri'
import { FaTimes } from 'react-icons/fa'

// ...

export const NavBar = () => {
  // created state for select icon
  const [navBar, setNavBar] = useState(false)

  return (
    <nav className='flex justify-between items-center h-20 px-4 fixed w-full'>
      <div>
        <h1 className='text-4xl font-semibold ml-2'>To
          <span className='text-tahiti-200'>Do!</span>
        </h1>
      </div>
      <ul className='hidden md:flex gap-3'>
        {
          menuNav.map(({ link, id }) => {
            return (
              <li
                className='cursor-pointer text-xl font-medium hover:text-tahiti-200 hover:scale-110 hover: duration-200 hover:line-through'
                key={id}
              >
                {link}
              </li>
            )
          })
        }
      </ul>

      <div
        onClick={() => setNavBar(!navBar)}
        className='md:hidden cursor-pointer pr-4 z-10 text-tahiti-100'
      >
        {
          navBar
            ? <FaTimes
              className='text-tahiti-200 hover:scale-110 hover:duration-200 hover:text-tahiti-100 hover:animate-bounce'
              size={30}
            />
            : < RiMenu4Line
              className='hover:scale-110 hover:duration-200 hover:text-tahiti-200 hover:animate-bounce'
              size={30}
            />
        }
      </div>
      {
        navBar &&
        <ul className='flex flex-col justify-center items-center absolute top-0 left-0 h-screen w-full bg-gradient-to-b from-tahiti-500 to-tahiti-400'>
          {
            menuNav.map(({ link, id }) => {
              return (
                <li
                  className='px-4 cursor-ponter py-6 text-2xl font-medium hover:text-tahiti-200 hover:scale-110 hover: duration-200 hover:line-through'
                  key={id}
                >
                  {link}
                </li>
              )
            })
          }
        </ul>
      }

    </nav>
  )
}
