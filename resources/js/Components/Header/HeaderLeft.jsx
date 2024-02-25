import { Navbar } from 'flowbite-react'
import { Menu } from 'lucide-react'
import { twJoin } from 'tailwind-merge'

// ====================================
export default function HeaderLeft({ title }) {
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