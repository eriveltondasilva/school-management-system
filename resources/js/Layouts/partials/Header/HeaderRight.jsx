import { Avatar, Dropdown } from 'flowbite-react'
import { LogOut, UserRoundCog } from 'lucide-react'

export default function HeaderRight() {
  const avatar = (
    <Avatar
      alt='User settings'
      img='https://flowbite.com/docs/images/people/profile-picture-5.jpg'
      rounded
    />
  )

  return (
    <div className='mr-2 flex'>
      {/* Trigger */}
      <Dropdown inline label={avatar}>
        {/* Dropdown */}
        <Dropdown.Header>
          <span className='block text-sm font-semibold'>Bonnie Green</span>
          <span className='block truncate text-sm'>name@flowbite.com</span>
        </Dropdown.Header>
        <Dropdown.Item icon={UserRoundCog}>Perfil</Dropdown.Item>
        <Dropdown.Item icon={LogOut}>Sair</Dropdown.Item>
        {/* <Dropdown.Divider /> */}
      </Dropdown>
    </div>
  )
}
