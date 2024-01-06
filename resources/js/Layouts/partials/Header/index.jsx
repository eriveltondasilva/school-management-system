import { usePage } from '@inertiajs/react'

import HeaderLeft from './HeaderLeft'
import HeaderRight from './HeaderRight'
import HeaderRoot from './HeaderRoot'

// ====================================
export default function Header() {
  const {
    user: { name, email },
  } = usePage().props.auth

  return (
    <HeaderRoot>
      <HeaderLeft />
      <HeaderRight name={name} email={email} />
    </HeaderRoot>
  )
}
