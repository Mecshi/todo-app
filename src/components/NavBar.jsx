import { NavLink } from 'react-router-dom'

// ...

import { menuNav } from '../utils/constants'
import { MenuIcon, ExitIcon } from '../assets/Icons'

// ...

export const NavBar = ({ navBar, setNavBar }) => {
  return (
    <header className='flex justify-center'>
      <nav className='flex justify-between items-center h-20 px-8 w-4/5 fixed'>

      <div className='cursor-pointer hover:scale-200 hover:line-through decoration-gray-500 hover:opacity-70'>
        <NavLink to='/' >
          <h1 className='text-4xl font-semibold ml-2 text-tahiti-100'>To
            <span className='text-tahiti-200'>Do!</span>

          </h1>

        </NavLink>

      </div>

      <ul className='hidden md:flex gap-4'>

        {
          menuNav.map(({ link, path }) => {
            return (
              <NavLink
                key={link}
                to={path}
              >
                <li
                  className='cursor-pointer text-tahiti-100 text-xl font-medium hover:text-tahiti-200 hover:duration-200 hover:line-through'
                  key={link}
                >
                  {link}
                </li>
              </NavLink>
            )
          })
        }

      </ul>

      {/* Created responsive design smartphone */ }

      <div
        className='md:hidden cursor-pointer z-10 h-8'
        onClick={() => setNavBar(!navBar)}
      >
        {
          navBar
            ? <ExitIcon />
            : < MenuIcon />
        }
      </div>

      {/* Conditional rendering for pages */}

      {
        navBar &&
        <ul className='flex flex-col justify-center items-center absolute top-0 left-0 h-screen w-full bg-gradient-to-b from-tahiti-500 to-tahiti-400'>
          {
            menuNav.map(({ link, id, path }) => {
              return (
                <NavLink
                key={link}
                to={path}>

                  <li
                    className='px-4 cursor-pointer py-6 text-2xl font-medium hover:text-tahiti-200 text-tahiti-100 hover:scale-110 hover:duration-200 hover:line-through'
                    key={id}
                  >
                    {link}
                  </li>

                </NavLink>
              )
            })
          }
        </ul>
      }

    </nav>
    </header>
  )
}
