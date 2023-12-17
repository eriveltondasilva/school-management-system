import { twJoin } from 'tailwind-merge'
import { Link } from '@inertiajs/react'

// ====================================
export default function DropdownLink({ className = '', children, ...props }) {
  return (
    <Link
      className={twJoin(
        'block w-full px-4 py-2',
        'text-start text-sm leading-5 text-gray-700',
        'transition duration-150 ease-in-out focus:outline-none',
        'hover:bg-gray-100 focus:bg-gray-100',
        'dark:text-gray-300 dark:hover:bg-gray-800 dark:focus:bg-gray-800',
        className
      )}
      {...props}>
      {children}
    </Link>
  )
}
