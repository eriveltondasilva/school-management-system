import NavLink from '@/Components/NavLink'

export default function ResponsiveNavLayout({ user, isShown }) {
  const { name, email } = user

  return (
    <div className={(isShown ? 'block' : 'hidden') + ' sm:hidden'}>
      <div className='space-y-1 pb-3 pt-2'>
        <NavLink.Responsive
          href={route('dashboard')}
          active={route().current('dashboard')}>
          Dashboard
        </NavLink.Responsive>
      </div>

      <div className='border-t border-gray-200 pb-1 pt-4 dark:border-gray-600'>
        <div className='px-4'>
          <div className='text-base font-medium text-gray-800 dark:text-gray-200'>
            {name}
          </div>
          <div className='text-sm font-medium text-gray-500'>{email}</div>
        </div>

        <div className='mt-3 space-y-1'>
          <NavLink.Responsive href={route('profile.edit')}>
            Perfil
          </NavLink.Responsive>
          <NavLink.Responsive method='post' href={route('logout')} as='button'>
            Sair
          </NavLink.Responsive>
        </div>
      </div>
    </div>
  )
}
