import { twMerge } from 'tailwind-merge'

export default function Input({ type, className, ...props }) {
  return (
    <input
      type={type || 'text'}
      className={twMerge(
        'rounded-md border-gray-300 shadow-sm',
        'focus:border-indigo-500 focus:ring-indigo-500',
        'dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300',
        'dark:focus:border-indigo-600 dark:focus:ring-indigo-600',
        className
      )}
      {...props}
    />
  )
}

Input.Label = function ({ value, children, ...props }) {
  return (
    <label
      className='block text-sm font-medium text-gray-700 dark:text-gray-300'
      {...props}>
      {value ?? children}
    </label>
  )
}

Input.Error = function ({ message, ...props }) {
  if (!message) return null

  return (
    <p {...props} className='mt-2 text-sm text-red-600 dark:text-red-400'>
      {message}
    </p>
  )
}
