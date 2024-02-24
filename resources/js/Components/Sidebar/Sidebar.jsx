import { Sidebar } from 'flowbite-react'
import { X } from 'lucide-react'
import { twJoin } from 'tailwind-merge'

// ====================================
export function SidebarRoot({ children }) {
  return (
    <aside
      id='sidebar'
      className={twJoin(
        'fixed h-screen w-64',
        'left-0 top-0 z-40',
        '-translate-x-full transition-transform md:translate-x-0'
      )}
      aria-label='sidebar'>
      <Sidebar aria-label='Sidebar' /* collapsed */>{children}</Sidebar>
    </aside>
  )
}

// ====================================
export function SidebarLogo({ img, imgAlt, children }) {
  return (
    <Sidebar.Logo img={img} imgAlt={imgAlt}>
      {children}
    </Sidebar.Logo>
  )
}

// ====================================
export function SidebarBtnClose() {
  return (
    <div className='relative sm:hidden'>
      <button
        type='button'
        data-drawer-toggle='sidebar'
        aria-controls='sidebar'
        className={twJoin(
          'absolute -top-1 right-0',
          'inline-flex items-center',
          'rounded-lg p-1.5 text-sm',
          'bg-transparent text-gray-400 hover:bg-gray-200 hover:text-gray-900',
          'dark:hover:bg-gray-600 dark:hover:text-white'
        )}>
        <X />
        <span className='sr-only'>Close menu</span>
      </button>
    </div>
  )
}
