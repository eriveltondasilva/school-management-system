import { Link } from '@inertiajs/react'
import { Avatar, Dropdown } from 'flowbite-react'
import { LogOut, UserRoundCog } from 'lucide-react'

// ====================================
export function HeaderDropdown({ children }) {
  return (
    <>
      {/* Trigger */}
      <Dropdown inline label={<DropdownAvatar />} className='w-48'>
        {children}
      </Dropdown>
    </>
  )
}

function DropdownAvatar() {
  return (
    <Avatar
      alt='User settings'
      img='https://flowbite.com/docs/images/people/profile-picture-5.jpg'
      rounded
    />
  )
}

// ====================================
export function HeaderDropdownHeader({ name, email }) {
  return (
    <Dropdown.Header>
      <span
        className='block truncate text-sm font-semibold'
        title={name || 'Nome'}>
        {name || 'Usuário'}
      </span>
      <span
        className='block truncate text-sm text-gray-400'
        title={email || 'Email'}>
        {email || 'exemplo@email.com'}
      </span>
    </Dropdown.Header>
  )
}

// ====================================
export function HeaderDropdownItem() {
  return (
    <>
      <Dropdown.Item as={Link} href={route('profile.edit')} icon={UserRoundCog}>
        Perfil
      </Dropdown.Item>
      <Dropdown.Item
        as='button'
        // TODO: refatorar
        // as={Link}
        method='post'
        href={route('logout')}
        icon={LogOut}>
        Sair
      </Dropdown.Item>
      {/* <Dropdown.Divider /> */}
    </>
  )
}
