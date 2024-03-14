import { Link, router } from '@inertiajs/react'
import { Avatar, Dropdown } from 'flowbite-react'
import { LogOut, UserRoundCog } from 'lucide-react'
import { useState } from 'react'

// ==============================================
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

// ----------------------------------------------
export function HeaderDropdownHeader({ username, email }) {
  return (
    <Dropdown.Header>
      <span
        className='block truncate text-sm font-semibold'
        title={username || 'Nome'}>
        {username || 'Usuário'}
      </span>
      <span
        className='block truncate text-sm text-gray-400'
        title={email || 'Email'}>
        {email || 'exemplo@email.com'}
      </span>
    </Dropdown.Header>
  )
}

// ----------------------------------------------
export function HeaderDropdownItem() {
  const [isLoading, setIsLoading] = useState(false)

  const handleLogout = () => {
    setIsLoading(true)

    router.post(route('logout'), {
      onFinish: () => {
        setIsLoading(false)
      },
    })
  }

  return (
    <>
      <Dropdown.Item as={Link} href={route('profile.edit')} icon={UserRoundCog}>
        Perfil
      </Dropdown.Item>
      <Dropdown.Item
        as='button'
        disabled={isLoading}
        onClick={handleLogout}
        icon={LogOut}>
        Sair
      </Dropdown.Item>
    </>
  )
}
