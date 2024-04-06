import { twJoin } from 'tailwind-merge'

// =========================================================
export function StatisticCardsRoot({ children }) {
  return (
    <section className='grid gap-4 sm:grid-cols-2 xl:grid-cols-4'>
      {children}
    </section>
  )
}

export function StatisticCardsItem({ children }) {
  return (
    <div
      className={twJoin(
        'flex items-center space-x-2 px-3 py-4',
        'rounded-lg border-l-4',
        'border-yellow-300 bg-gray-50 text-gray-800',
        'dark:bg-gray-800 dark:text-gray-100'
      )}>
      {children}
    </div>
  )
}

export function StatisticCardsIcon({ icon }) {
  return (
    <div className='flex justify-end'>
      <div className='rounded-full bg-gray-200 p-5 dark:bg-gray-900'>
        {icon}
      </div>
    </div>
  )
}

export function StatisticCardsBody({ value = '', title = '' }) {
  return (
    <div className='flex-col'>
      <p className='text-2xl font-bold tracking-widest'>{value}</p>
      <p className='text-lg tracking-tight'>{title}</p>
    </div>
  )
}
