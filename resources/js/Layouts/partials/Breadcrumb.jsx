import { Link } from '@inertiajs/react'
import { Breadcrumb } from 'flowbite-react'
import { Home } from 'lucide-react'

// ===================================
export default function BreadcrumbIndex({ items }) {
  if (!items) return null

  const breadcrumbItems = [{ title: 'Painel', route: 'dashboard' }, ...items]

  return (
    <BreadcrumbRoot>
      {breadcrumbItems.map((item, index) => (
        <BreadcrumbItem key={index} item={item} />
      ))}
    </BreadcrumbRoot>
  )
}

// -----------------------------------
function BreadcrumbRoot({ children }) {
  return <Breadcrumb aria-label='breadcrumb'>{children}</Breadcrumb>
}

// -----------------------------------
function BreadcrumbItem({ item }) {
  const { title, route: routeName } = item

  const icon = title === 'Painel' ? Home : null

  const tempTitle = title.toLowerCase()

  return (
    <Breadcrumb.Item icon={icon}>
      {routeName ? <Link href={routeName && route(routeName)}>{tempTitle}</Link> : tempTitle}
    </Breadcrumb.Item>
  )
}
