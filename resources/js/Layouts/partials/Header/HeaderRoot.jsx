import { Navbar } from 'flowbite-react'

// ====================================
export default function HeaderRoot({ children }) {
  return (
    <Navbar
      fluid
      rounded
      className='sticky top-0 sm:relative dark:text-white dark:drop-shadow-lg rounded-lg'>
      {children}
    </Navbar>
  )
}
