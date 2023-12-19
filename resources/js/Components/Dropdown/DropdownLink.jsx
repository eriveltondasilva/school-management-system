import { Link } from '@inertiajs/react'
import { twJoin } from 'tailwind-merge'

// ====================================
export default function DropdownLink({ className = '', children, ...props }) {
  return (
    <Link
      className={twJoin(
        'flex w-full gap-2.5 px-4 py-2',
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
