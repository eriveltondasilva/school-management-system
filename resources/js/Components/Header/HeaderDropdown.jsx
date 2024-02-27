import { Link } from '@inertiajs/react'
import { Avatar, Dropdown } from 'flowbite-react'
import { LogOut, UserRoundCog } from 'lucide-react'

// ====================================
export function HeaderDropdown({ children }) {
  const image = 'https://flowbite.com/docs/images/people/profile-picture-5.jpg'
  const DropdownAvatar = <Avatar alt='User settings' img={image} rounded />

  return (
    <>
      {/* Trigger */}
      <Dropdown inline label={DropdownAvatar} className='w-48'>
        {children}
      </Dropdown>
    </>
  )
}

// ====================================
export function HeaderDropdownHeader({ nickname, email }) {
  return (
    <Dropdown.Header>
      <span
        className='block truncate text-sm font-semibold'
        title={nickname || 'Nome'}>
        {nickname || 'Usuário'}
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
