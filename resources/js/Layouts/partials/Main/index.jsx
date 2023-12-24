import { Plus } from 'lucide-react'

export default function Main({ children }) {
  return (
    <MainRoot>
      {children}
      {/*  */}
      <div className='mb-4 grid grid-cols-3 gap-4'>
        <div className='flex h-24 items-center justify-center rounded bg-gray-50 dark:bg-gray-800'>
          <p className='text-2xl text-gray-400 dark:text-gray-500'>
            <Plus />
          </p>
        </div>
        <div className='flex h-24 items-center justify-center rounded bg-gray-50 dark:bg-gray-800'>
          <p className='text-2xl text-gray-400 dark:text-gray-500'>
            <Plus />
          </p>
        </div>
        <div className='flex h-24 items-center justify-center rounded bg-gray-50 dark:bg-gray-800'>
          <p className='text-2xl text-gray-400 dark:text-gray-500'>
            <Plus />
          </p>
        </div>
      </div>
      {/*  */}
      <div className='mb-4 flex h-48 items-center justify-center rounded bg-gray-50 dark:bg-gray-800'>
        <p className='text-2xl text-gray-400 dark:text-gray-500'>
          <Plus />
        </p>
      </div>
      {/*  */}
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
      {/*  */}
      <div className='mb-4 flex h-48 items-center justify-center rounded bg-gray-50 dark:bg-gray-800'>
        <p className='text-2xl text-gray-400 dark:text-gray-500'>
          <Plus />
        </p>
      </div>
      {/*  */}
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
      </div>
    </MainRoot>
  )
}

function MainRoot({ children }) {
  return (
    <>
      <div className='rounded-lg py-4'>
        {children}
      </div>
    </>
  )
}
