import { usePage } from '@inertiajs/react'
import Header from './partials/Header'

export default function Authenticated({ children }) {
  const user = usePage().props.auth.user

  return (
    <>
      <Header>
        <Header.Left user={user} />
        <Header.Right user={user} />
      </Header>
      <main>{children}</main>
    </>
  )
}
