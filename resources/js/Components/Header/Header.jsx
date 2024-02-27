import { DarkThemeToggle, Navbar } from 'flowbite-react'
import { Menu } from 'lucide-react'
import { twJoin } from 'tailwind-merge'

// ====================================
export function HeaderRoot({ children }) {
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

// ====================================
export function HeaderLeft({ title }) {
  return (
    <Navbar.Brand>
      {/* Botão de menu */}
      <button
        data-drawer-target='sidebar'
        data-drawer-show='sidebar'
        aria-controls='sidebar'
        type='button'
        className={twJoin(
          'mx-2 p-2',
          'inline-flex items-center md:hidden',
          'rounded-lg text-sm focus:outline-none focus:ring-2',
          'text-gray-500 hover:bg-gray-100 focus:ring-gray-200 ',
          'dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600'
        )}>
        <Menu />
      </button>

      {/* Título */}
      <span
        className={twJoin(
          'self-center whitespace-nowrap',
          'hidden sm:block',
          'text-xl font-semibold dark:text-white'
        )}>
        {title === 'Painel' ? 'Bem-vindo(a)' : title}
      </span>
    </Navbar.Brand>
  )
}

// ====================================
export function HeaderRight({ children }) {
  return (
    <div className='mr-2 flex space-x-2'>
      {/* Botão tema escuro */}
      <DarkThemeToggle />
      {children}
    </div>
  )
}
