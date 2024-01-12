import { Sidebar } from 'flowbite-react'
import { twJoin } from 'tailwind-merge'

// ====================================
export default function SidebarRoot({ children }) {
  return (
    <aside
      id='sidebar'
      className={twJoin(
        'fixed h-screen w-64',
        'left-0 top-0 z-40',
        '-translate-x-full transition-transform sm:translate-x-0'
      )}
      aria-label='sidebar'>
      <Sidebar aria-label='Sidebar'>
        {children}
      </Sidebar>
    </aside>
  )
}
