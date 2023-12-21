import { Dropdown } from 'flowbite-react'
import { ChevronDown, LogOut, UserRoundCog } from 'lucide-react'
import { twJoin } from 'tailwind-merge'

import image from '../../../../images/profile-old.svg'

// ====================================
export default function HeaderRight({ user }) {
  const { name, email, role } = user

  const dropdownTrigger = (
    <div className='flex cursor-pointer items-center gap-1'>
      <span
        className={twJoin(
          'mr-1 hidden xs:block',
          'text-sm font-medium uppercase tracking-wider',
          'dark:text-white'
        )}>
        {role.name}
      </span>
      <span className='sr-only'>Open user menu</span>
      {/* <!-- Avatar --> */}
      <img
        className={twJoin(
          'h-9 w-9 p-1',
          'rounded-full drop-shadow-sm hover:ring-2',
          'bg-slate-100 hover:ring-blue-800 dark:bg-slate-200'
        )}
        src={image}
        alt='Rounded avatar'
      />
      <ChevronDown className='h-5 w-5 dark:text-white' />
    </div>
  )

  return (
    <div className='flex items-center'>
      {/* <!-- Profile dropdown --> */}
      <Dropdown
        id='dropdownAvatar'
        renderTrigger={() => dropdownTrigger}
        inline>
        <Dropdown.Header className='truncate'>
          <span className='block truncate text-sm font-medium'>{name}</span>
          <span className='block truncate text-sm font-medium text-gray-500 dark:text-gray-400'>
            {email}
          </span>
        </Dropdown.Header>
        <Dropdown.Item icon={UserRoundCog}>Perfil</Dropdown.Item>
        <Dropdown.Item icon={LogOut}>Sair</Dropdown.Item>
      </Dropdown>
    </div>
  )
}
