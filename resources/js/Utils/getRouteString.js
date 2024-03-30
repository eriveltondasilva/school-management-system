import { usePage } from '@inertiajs/react'

export default function getRouteString(route) {
  const { role } = usePage().props.auth.user || {}
  return role.name === 'user' ? role.name : `${role.name}.${route}`
}
