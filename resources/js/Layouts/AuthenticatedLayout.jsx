import { Link } from '@inertiajs/react'
import { useState } from 'react'

import ApplicationLogo from '@/Components/ApplicationLogo'
import Dropdown from '@/Components/Dropdown'
import * as Icon from '@/Components/Icon'
import NavLink from '@/Components/NavLink'
import ResponsiveNavLink from '@/Components/ResponsiveNavLink'

export default function Authenticated({ user, header, children }) {
  const [showingNavigationDropdown, setShowingNavigationDropdown] =
    useState(false)

  return (
    <div className='min-h-screen bg-gray-100 dark:bg-gray-900'>
      <nav className='border-b border-gray-100 bg-white dark:border-gray-700 dark:bg-gray-800'>
        <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
          <div className='flex h-16 justify-between'>
            <div className='flex'>
              <div className='flex shrink-0 items-center'>
                <Link href='/'>
                  <ApplicationLogo className='block h-9 w-auto fill-current text-gray-800 dark:text-gray-200' />
                </Link>
              </div>

              <div className='hidden space-x-8 sm:-my-px sm:ms-10 sm:flex'>
                <NavLink
                  href={route('dashboard')}
                  active={route().current('dashboard')}>
                  Dashboard
                </NavLink>
              </div>
            </div>

            {/* Dropdown ->> */}
            <div className='hidden sm:ms-6 sm:flex sm:items-center'>
              <div className='relative ms-3'>
                <Dropdown>
                  <Dropdown.Trigger>
                    <span className='inline-flex rounded-md'>
                      <button
                        type='button'
                        className='inline-flex items-center rounded-md border border-transparent bg-white px-3 py-2 text-sm font-medium leading-4 text-gray-500 transition duration-150 ease-in-out hover:text-gray-700 focus:outline-none dark:bg-gray-800 dark:text-gray-400 dark:hover:text-gray-300'>
                        {user.name}
                        <Icon.ChevronDown className='-me-0.5 ms-2 h-4 w-4' />
                      </button>
                    </span>
                  </Dropdown.Trigger>

                  <Dropdown.Content>
                    <Dropdown.Link href={route('profile.edit')}>
                      Perfil
                    </Dropdown.Link>
                    <Dropdown.Link
                      href={route('logout')}
                      method='post'
                      as='button'>
                      Sair
                    </Dropdown.Link>
                  </Dropdown.Content>
                </Dropdown>
              </div>
            </div>
            {/* <<- Dropdown */}

            <div className='-me-2 flex items-center sm:hidden'>
              <button
                onClick={() =>
                  setShowingNavigationDropdown((prevState) => !prevState)
                }
                className='inline-flex items-center justify-center rounded-md p-2 text-gray-400 transition duration-150 ease-in-out hover:bg-gray-100 hover:text-gray-500 focus:bg-gray-100 focus:text-gray-500 focus:outline-none dark:text-gray-500 dark:hover:bg-gray-900 dark:hover:text-gray-400 dark:focus:bg-gray-900 dark:focus:text-gray-400'>
                {!showingNavigationDropdown ? <Icon.Menu /> : <Icon.Close />}
              </button>
            </div>
          </div>
        </div>

        <div
          className={
            (showingNavigationDropdown ? 'block' : 'hidden') + ' sm:hidden'
          }>
          <div className='space-y-1 pb-3 pt-2'>
            <ResponsiveNavLink
              href={route('dashboard')}
              active={route().current('dashboard')}>
              Dashboard
            </ResponsiveNavLink>
          </div>

          <div className='border-t border-gray-200 pb-1 pt-4 dark:border-gray-600'>
            <div className='px-4'>
              <div className='text-base font-medium text-gray-800 dark:text-gray-200'>
                {user.name}
              </div>
              <div className='text-sm font-medium text-gray-500'>
                {user.email}
              </div>
            </div>

            <div className='mt-3 space-y-1'>
              <ResponsiveNavLink href={route('profile.edit')}>
                Profile
              </ResponsiveNavLink>
              <ResponsiveNavLink
                method='post'
                href={route('logout')}
                as='button'>
                Log Out
              </ResponsiveNavLink>
            </div>
          </div>
        </div>
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
