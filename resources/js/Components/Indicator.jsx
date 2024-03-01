import { twJoin } from 'tailwind-merge'

export default function Indicator({ type }) {
  const colors = {
    warning: 'bg-yellow-500',
    danger: 'bg-red-500',
    info: 'bg-blue-500',
    secondary: 'bg-gray-500',
    success: 'bg-green-500',
  }

  return (
    <span
      className={twJoin(
        'absolute right-4 top-6',
        'flex h-6 w-6 rounded-full',
        colors[type]
      )}></span>
  )
}