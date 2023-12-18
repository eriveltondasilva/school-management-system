import { Link } from '@inertiajs/react'
import { useState } from 'react'

import ApplicationLogo from '@/Components/ApplicationLogo'
import NavLink from '@/Components/NavLink'
import DropdownLayoutPartial from './partials/DropdownLayoutPartial'
import ResponsiveMenuLayoutPartial from './partials/ResponsiveMenuLayoutPartial'
import ResponsiveNavLayout from './partials/ResponsiveNavLayout'

export default function Authenticated({ user, header, children }) {
  const [isShownNavDropdown, setIsShownNavDropdown] = useState(false)

  return (
    <div className='min-h-screen bg-gray-100 dark:bg-gray-900'>
      {/* # Navigation */}
      <nav className='border-b border-gray-100 bg-white dark:border-gray-700 dark:bg-gray-800'>
        <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
          <div className='flex h-16 justify-between'>
            <div className='flex'>
              {/* # Logo */}
              <div className='flex shrink-0 items-center'>
                <Link href='/'>
                  <ApplicationLogo className='block h-9 w-auto fill-current text-gray-800 dark:text-gray-200' />
                </Link>
              </div>

              {/* Teste */}
              <div className='hidden space-x-8 sm:-my-px sm:ms-10 sm:flex'>
                <NavLink
                  href={route('dashboard')}
                  active={route().current('dashboard')}>
                  Dashboard
                </NavLink>
              </div>
            </div>

            {/* # Dropdown */}
            <DropdownLayoutPartial user={user} />

            {/* # Responsive Dropdown Menu */}
            <ResponsiveMenuLayoutPartial
              isShown={isShownNavDropdown}
              onClick={() => setIsShownNavDropdown((prevState) => !prevState)}
            />
          </div>
        </div>

        {/* # Responsive Dropdown */}
        <ResponsiveNavLayout user={user} isShown={isShownNavDropdown} />
      </nav>

      {header && (
        <header className='bg-white shadow dark:bg-gray-800'>
          <div className='mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8'>
            {header}
          </div>
        </header>
      )}

      <main>{children}</main>
    </div>
  )
}
