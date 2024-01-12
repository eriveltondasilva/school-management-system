import { twJoin } from 'tailwind-merge'

// ====================================
export default function Main({ children }) {
  return (
    <>
      <main
        className={twJoin(
          'h-full px-4 py-8 sm:px-8',
          'rounded-lg border-t-4 border-yellow-300',
          'bg-gray-50 text-gray-900 dark:bg-gray-800 dark:text-gray-200'
        )}>
        {children}
      </main>
      {/*  */}
      {/* <div className='mb-4 flex h-48 items-center justify-center rounded bg-gray-50 dark:bg-gray-800'>
        <p className='text-2xl text-gray-400 dark:text-gray-500'>
          <Plus />
        </p>
      </div>
      <div className='mb-4 grid grid-cols-2 gap-4'>
        <div className='flex h-28 items-center justify-center rounded bg-gray-50 dark:bg-gray-800'>
          <p className='text-2xl text-gray-400 dark:text-gray-500'>
            <Plus />
          </p>
        </div>
        <div className='flex h-28 items-center justify-center rounded bg-gray-50 dark:bg-gray-800'>
          <p className='text-2xl text-gray-400 dark:text-gray-500'>
            <Plus />
          </p>
        </div>
        <div className='flex h-28 items-center justify-center rounded bg-gray-50 dark:bg-gray-800'>
          <p className='text-2xl text-gray-400 dark:text-gray-500'>
            <Plus />
          </p>
        </div>
        <div className='flex h-28 items-center justify-center rounded bg-gray-50 dark:bg-gray-800'>
          <p className='text-2xl text-gray-400 dark:text-gray-500'>
            <Plus />
          </p>
        </div>
      </div>
      <div className='mb-4 flex h-48 items-center justify-center rounded bg-gray-50 dark:bg-gray-800'>
        <p className='text-2xl text-gray-400 dark:text-gray-500'>
          <Plus />
        </p>
      </div>
      <div className='grid grid-cols-2 gap-4'>
        <div className='flex h-28 items-center justify-center rounded bg-gray-50 dark:bg-gray-800'>
          <p className='text-2xl text-gray-400 dark:text-gray-500'>
            <Plus />
          </p>
        </div>
        <div className='flex h-28 items-center justify-center rounded bg-gray-50 dark:bg-gray-800'>
          <p className='text-2xl text-gray-400 dark:text-gray-500'>
            <Plus />
          </p>
        </div>
        <div className='flex h-28 items-center justify-center rounded bg-gray-50 dark:bg-gray-800'>
          <p className='text-2xl text-gray-400 dark:text-gray-500'>
            <Plus />
          </p>
        </div>
        <div className='flex h-28 items-center justify-center rounded bg-gray-50 dark:bg-gray-800'>
          <p className='text-2xl text-gray-400 dark:text-gray-500'>
            <Plus />
          </p>
        </div>
      </div> */}
    </>
  )
}
