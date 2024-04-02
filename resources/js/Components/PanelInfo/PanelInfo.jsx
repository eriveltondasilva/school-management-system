import { twJoin } from 'tailwind-merge'

// ====================================
export function PanelInfoRoot({ children }) {
  return <div className='flex flex-col gap-4 lg:flex-row'>{children}</div>
}

// ====================================
export function PanelInfoItem({ title = '', number = '', icon = '' }) {
  return (
    <div
      className={twJoin(
        'flex items-center gap-5',
        'rounded-lg border-l-4 py-5',
        'border-yellow-300 bg-gray-50 text-gray-800',
        'dark:bg-gray-800 dark:text-gray-100'
      )}>
      <div className='flex justify-end'>
        <div className='rounded-full bg-gray-200 p-5 dark:bg-gray-900'>
          {icon}
        </div>
      </div>
      <div className='flex-col'>
        <p className='text-xl font-bold tracking-widest'>{number}</p>
        <p className='text-lg'>{title}</p>
      </div>
    </div>
  )
}
