import { twJoin } from 'tailwind-merge'

// ====================================
export default function PanelInfoItem({ title, number, icon }) {
  return (
    <div
      className={twJoin(
        'grid flex-1 grid-cols-2 items-center gap-5 rounded-lg py-5',
        'border-l-4 border-yellow-300',
        'bg-gray-50 text-gray-800 dark:bg-gray-800 dark:text-gray-100'
      )}>
      <div className='flex justify-end'>
        <div className='rounded-full bg-gray-200 p-5 dark:bg-gray-900'>
          {icon}
        </div>
      </div>
      <div className='flex-col'>
        <p className='text-2xl font-bold tracking-widest'>{number}</p>
        <p className='text-lg'>{title}</p>
      </div>
    </div>
  )
}
