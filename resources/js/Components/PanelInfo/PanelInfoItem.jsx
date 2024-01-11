import { twJoin } from 'tailwind-merge'

// ====================================
export default function PanelInfoItem({ title, number, icon }) {
  return (
    <div
      className={twJoin(
        'grid grid-cols-2 items-center gap-5 rounded-lg py-5',
        'bg-gray-50 text-gray-400 dark:bg-gray-800 dark:text-gray-100'
      )}>
      <div className='flex justify-end'>
        <div className='rounded-full bg-gray-900 p-5'>{icon}</div>
      </div>
      <div className='flex-col'>
        <p className='text-2xl font-bold tracking-widest'>{number}</p>
        <p className='text-lg'>{title}</p>
      </div>
    </div>
  )
}
