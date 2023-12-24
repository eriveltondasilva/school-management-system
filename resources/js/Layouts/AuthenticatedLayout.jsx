import { Menu } from 'lucide-react'
import Sidebar from './partials/Sidebar'

export default function AuthenticatedLayout({ children }) {
  return (
    <>
      <Sidebar />

      <button
        data-drawer-target='sidebar'
        data-drawer-toggle='sidebar'
        aria-controls='sidebar'
        type='button'
        className='ms-3 mt-2 inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 sm:hidden dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600'>
        <span className='sr-only'>Open sidebar</span>
        <Menu />
      </button>


      <main>{children}</main>
    </>
  )
}
