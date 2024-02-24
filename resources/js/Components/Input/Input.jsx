import { twMerge } from 'tailwind-merge'

// ============================================================================
export function Input({ type, className, ...props }) {
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

// ============================================================================
export function InputLabel({ value, children, ...props }) {
  return (
    <label
      className='block text-sm font-medium text-gray-700 dark:text-gray-300'
      {...props}>
      {value ?? children}
    </label>
  )
}

// ============================================================================
export function InputError({ message, ...props }) {
  if (!message) return null

  return (
    <p className='mt-2 text-sm text-red-600 dark:text-red-400' {...props}>
      {message}
    </p>
  )
}
