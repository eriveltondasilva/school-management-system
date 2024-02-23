import { twJoin } from 'tailwind-merge'

// ====================================
export default function Main({ children }) {
  return (
    <main
      className={twJoin(
        'px-4 py-8 sm:px-8',
        'rounded-lg border-t-4 border-yellow-300',
        'bg-gray-50 text-gray-900 dark:bg-gray-800 dark:text-gray-200'
      )}>
      {children}
    </main>
  )
}
