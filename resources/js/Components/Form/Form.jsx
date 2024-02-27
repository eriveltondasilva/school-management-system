// ===========================================================================
export function FormRoot({ onSubmit, children }) {
  return (
    <form
      onSubmit={onSubmit}
      className='mx-2 flex max-w-lg flex-col gap-4 sm:mx-10 md:mx-20'>
      {children}
    </form>
  )
}

// ------------------------------------
export function FormHeader({ children }) {
  return (
    <header className='mb-4'>
      <h1 className='text-xl font-semibold'>{children}</h1>
    </header>
  )
}

// ------------------------------------
export function FormFooter({ children }) {
  return <footer className='flex flex-col gap-4 sm:flex-row'>{children}</footer>
}
