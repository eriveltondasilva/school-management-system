export default function DropdownHeader(props) {
  const { name, email } = props
  
  return (
    <>
      <header className='px-4 py-3'>
        <span
          title={name}
          className='block truncate text-sm font-semibold text-gray-900 dark:text-white'>
          {name}
        </span>
        <span
          title={email}
          className='block truncate text-sm text-gray-500 dark:text-gray-400'>
          {email}
        </span>
      </header>
      <hr className='border-slate-800 dark:border-slate-400' />
    </>
  )
}
