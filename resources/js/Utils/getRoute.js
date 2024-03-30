import { usePage } from '@inertiajs/react'

export default function getRoute(routeName, ...params) {
  const { role } = usePage().props.auth.user || {}

  const baseRoute =
    role.name === 'user' ? role.name : `${role.name}.${routeName}`

  const hasParams = Object.keys(params).length > 0

  if (hasParams) {
    return route(baseRoute, ...params)
  }

  return route(baseRoute)
}
