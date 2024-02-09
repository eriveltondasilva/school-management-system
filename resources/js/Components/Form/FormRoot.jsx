export default function FooterRoot({ onSubmit, children }) {
  return (
    <form
      onSubmit={onSubmit}
      className='mx-2 flex max-w-lg flex-col gap-4 sm:mx-10 md:mx-20'>
      {children}
    </form>
  )
}
