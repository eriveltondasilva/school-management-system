import Dropdown from '@/Components/Dropdown'
import * as Icon from '@/Components/Icon'

export default function DropdownLayoutPartial({ user }) {
  const { name } = user

  return (
    <div className='hidden sm:ms-6 sm:flex sm:items-center'>
      <div className='relative ms-3'>
        <Dropdown>
          <Dropdown.Trigger>
            <span className='inline-flex rounded-md'>
              <button
                type='button'
                className='inline-flex items-center rounded-md border border-transparent bg-white px-3 py-2 text-sm font-medium leading-4 text-gray-500 transition duration-150 ease-in-out hover:text-gray-700 focus:outline-none dark:bg-gray-800 dark:text-gray-400 dark:hover:text-gray-300'>
                {name}
                <Icon.ChevronDown className='-me-0.5 ms-2 h-4 w-4' />
              </button>
            </span>
          </Dropdown.Trigger>

          <Dropdown.Content>
            <Dropdown.Link href={route('profile.edit')}>Perfil</Dropdown.Link>
            <Dropdown.Link href={route('logout')} method='post' as='button'>
              Sair
            </Dropdown.Link>
          </Dropdown.Content>
        </Dropdown>
      </div>
    </div>
  )
}
