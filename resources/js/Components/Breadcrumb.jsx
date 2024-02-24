import { Link } from '@inertiajs/react'
import { Breadcrumb } from 'flowbite-react'
import { Home } from 'lucide-react'

// ===================================
export default function BreadcrumbRoot({ items }) {
  if (!items) return null

  return (
    <Breadcrumb aria-label='breadcrumb'>
      {items?.map((item, index) => (
        <BreadcrumbItem key={index} item={item} />
      ))}
    </Breadcrumb>
  )
}

// ===================================
function BreadcrumbItem({ item }) {
  const { title, routeName } = item
  const icon = title === 'Painel' && Home
  const lowerCaseTitle = title?.toLowerCase()

  return (
    <Breadcrumb.Item icon={icon}>
      {routeName ? (
        <Link href={route(routeName)}>{lowerCaseTitle}</Link>
      ) : (
        lowerCaseTitle
      )}
    </Breadcrumb.Item>
  )
}
