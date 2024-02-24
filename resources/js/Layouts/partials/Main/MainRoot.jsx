import { twJoin } from 'tailwind-merge'

export default function MainRoot({ children }) {
  return (
    <main>
      <div
        className={twJoin(
          'flex h-full rounded-lg',
          'bg-gray-50 p-8 dark:bg-gray-800'
        )}>
        {children}
      </div>
    </main>
  )
}
