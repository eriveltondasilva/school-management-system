import { twJoin } from 'tailwind-merge'

export default function Button({
  variant,
  size,
  full,
  disabled,
  children,
  ...props
}) {
  const BUTTON_VARIANTS = {
    primary: [
      'bg-gray-800 text-white hover:bg-gray-700 focus:bg-gray-700 focus:ring-indigo-500 active:bg-gray-900',
      'dark:bg-gray-200 dark:text-gray-800 dark:hover:bg-white dark:focus:bg-white dark:focus:ring-offset-gray-800 dark:active:bg-gray-300',
    ],
    secondary: [
      'bg-white text-gray-700 hover:bg-gray-50 focus:ring-indigo-500 border-gray-300 shadow-sm',
      'dark:border-gray-500 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700 dark:focus:ring-offset-gray-800',
    ],
    danger: [
      'bg-red-600 text-white hover:bg-red-500 focus:ring-red-500 active:bg-red-700',
      'dark:focus:ring-offset-gray-800',
    ],
  }

  const SIZE_VARIANTS = {
    sm: 'px-2 py-1.5 text-xs',
    base: 'px-4 py-2 text-sm',
    lg: 'px-5 py-2 text-base',
    xl: 'px-6 py-2 text-lg',
  }

  return (
    <button
      disabled={disabled}
      className={twJoin(
        'font-semibold uppercase tracking-widest',
        'inline-flex items-center',
        'rounded-md border border-transparent',
        'transition duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2',
        SIZE_VARIANTS[size ?? 'base'],
        BUTTON_VARIANTS[variant ?? 'primary'],
        full && 'w-full',
        disabled && 'cursor-not-allowed opacity-25'
      )}
      {...props}>
      {children}
    </button>
  )
}