import { usePage } from '@inertiajs/react'

import HeaderLeft from './HeaderLeft'
import HeaderRight from './HeaderRight'
import HeaderRoot from './HeaderRoot'

// ====================================
export default function Header({title}) {
  const { name, email } = usePage().props.auth.user

  return (
    <HeaderRoot>
      <HeaderLeft title={title}/>
      <HeaderRight name={name} email={email} />
    </HeaderRoot>
  )
}
