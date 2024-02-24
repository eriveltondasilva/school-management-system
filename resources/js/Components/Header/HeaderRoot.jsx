import { Navbar } from 'flowbite-react'

// ====================================
export default function HeaderRoot({ children }) {
  return (
    <Navbar
      fluid
      rounded
      className='sticky top-0 z-30 rounded-lg bg-slate-50 dark:text-white dark:drop-shadow-lg sm:relative'>
      {children}
    </Navbar>
  )
}
