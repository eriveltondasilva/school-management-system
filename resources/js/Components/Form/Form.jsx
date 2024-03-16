import { twMerge } from 'tailwind-merge'
import HorizontalLine from '../HorizontalLine'

// ===========================================================================
export function FormRoot({ className = '', onSubmit = () => {}, children }) {
  return (
    <form
      onSubmit={onSubmit}
      className={twMerge(
        'mx-2 flex max-w-lg flex-col gap-4 sm:mx-10 md:mx-20',
        className
      )}>
      {children}
    </form>
  )
}

// ------------------------------------
export function FormHeader({ className = '', children }) {
  return (
    <header className='mb-4 space-y-4'>
      <div className={twMerge('flex space-x-2', className)}>{children}</div>
      <HorizontalLine />
    </header>
  )
}

// ------------------------------------
export function FormHeaderTitle({ title = '', className = '' }) {
  return (
    <h2 className={twMerge('text-xl font-semibold', className)}>{title}</h2>
  )
}

// ------------------------------------
export function FormFooter({ children }) {
  return <footer className='flex flex-col gap-4 sm:flex-row'>{children}</footer>
}
