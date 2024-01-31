export default function TableHeaderRoot({ children }) {
  return (
    <header className='relative mb-4 bg-slate-50 dark:bg-gray-900 sm:rounded-lg'>
      <div className='flex flex-col items-center justify-between space-y-3 p-4 md:flex-row md:space-x-4 md:space-y-0'>
        {children}
      </div>
    </header>
  )
}
