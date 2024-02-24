import { Navbar } from 'flowbite-react'
import { twJoin } from 'tailwind-merge'

// ====================================
export default function HeaderRoot({ children }) {
  return (
    <Navbar
      fluid
      rounded
      className={twJoin(
        'sticky top-0 z-30 rounded-lg',
        'dark:drop-shadow-lg sm:relative',
        'bg-slate-50 dark:text-white'
      )}>
      {children}
    </Navbar>
  )
}
