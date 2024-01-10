import { Link } from '@inertiajs/react'
import { Breadcrumb } from 'flowbite-react'
import { Home } from 'lucide-react'

// ==================================
export default function BreadcrumbItem({ title, route: routeName }) {
  const iconMap = {
    Painel: Home,
  }[title]

  return (
    <Breadcrumb.Item icon={iconMap}>
      {routeName ? <Link href={routeName && route(routeName)}>{title}</Link> : title}
    </Breadcrumb.Item>
  )
}
