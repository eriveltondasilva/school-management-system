import Dropdown from '@/Components/Dropdown'
import * as Icon from '@/Components/Icon'
import { twJoin } from 'tailwind-merge'

export default function DropdownLayoutPartial({ user }) {
  const { name, email, role } = user

  return (
    <div className='hidden sm:ms-6 sm:flex sm:items-center'>
      <div className='relative ms-3'>
        <Dropdown>
          <Dropdown.Trigger>
            <span className='inline-flex rounded-md'>
              <button
                type='button'
                className={twJoin(
                  'text-sm font-medium leading-4',
                  'inline-flex items-center gap-2',
                  'px-3 py-2',
                  'transition duration-150 ease-in-out',
                  'rounded-md border border-transparent focus:outline-none',
                  ' bg-white text-gray-500 hover:text-gray-700 ',
                  'dark:bg-gray-800 dark:text-gray-400 dark:hover:text-gray-300'
                )}>
                <div className='uppercase tracking-wide'>{role.name}</div>

                {/* <AvatarRadix /> */}
                <Icon.ChevronDown className='h-4 w-4' />
              </button>
            </span>
          </Dropdown.Trigger>

          <Dropdown.Content>
            <Dropdown.Header name={name} email={email} />
            <Dropdown.Link href={route('profile.edit')}>
              <Icon.UserConfig className='h-4 w-4' />
              Perfil
            </Dropdown.Link>
            <Dropdown.Link href={route('logout')} method='post' as='button'>
              <Icon.LogOut className='h-4 w-4' />
              Sair
            </Dropdown.Link>
          </Dropdown.Content>
        </Dropdown>
      </div>
    </div>
  )
}
