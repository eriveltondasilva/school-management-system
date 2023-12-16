import { twMerge } from 'tailwind-merge'

export default function PrimaryButton({
  className = '',
  disabled,
  children,
  ...props
}) {
  return (
    <button
      disabled={disabled}
      className={twMerge(
        'text-xs font-semibold uppercase tracking-widest',
        'inline-flex items-center',
        'px-4 py-2',
        'rounded-md border border-transparent',
        'transition duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2',
        'bg-gray-800 text-white hover:bg-gray-700 focus:bg-gray-700 focus:ring-indigo-500 active:bg-gray-900',
        'dark:bg-gray-200 dark:text-gray-800 dark:hover:bg-white dark:focus:bg-white dark:focus:ring-offset-gray-800 dark:active:bg-gray-300',
        disabled && 'cursor-not-allowed opacity-25',
        className
      )}
      {...props}>
      {children}
    </button>
  )
}
