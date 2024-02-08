import { twJoin } from 'tailwind-merge'

// ====================================
export default function TableHeaderRoot({ children }) {
  return (
    <header className='relative mb-4 rounded-lg '>
      <div
        className={twJoin(
          'flex flex-col items-center justify-between',
          'space-y-3 py-4 md:flex-row md:space-x-4 md:space-y-0'
        )}>
        {children}
      </div>
    </header>
  )
}
