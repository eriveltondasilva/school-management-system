export default function FooterRoot({ onSubmit, children }) {
  return (
    <form onSubmit={onSubmit} className='flex max-w-lg flex-col gap-4'>
      {children}
    </form>
  )
}
