import { Navbar } from 'flowbite-react'
import { Menu } from 'lucide-react'

export default function HeaderLeft() {
  return (
    <Navbar.Brand>
      {/* Botão de menu */}
      <button
        data-drawer-target='sidebar'
        data-drawer-show='sidebar'
        aria-controls='sidebar'
        type='button'
        className='mx-2 inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 sm:hidden dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600'>
        <span className='sr-only'>Open sidebar</span>
        <Menu />
      </button>

      {/* Título */}
      <span className='self-center whitespace-nowrap text-xl font-semibold dark:text-white'>
        Bem-vindo(a)
      </span>
    </Navbar.Brand>
  )
}
