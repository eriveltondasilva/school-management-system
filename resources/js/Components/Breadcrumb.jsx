import { Link } from '@inertiajs/react'
import { Breadcrumb } from 'flowbite-react'
import { Home } from 'lucide-react'

// ===================================
export default function BreadcrumbIndex({ items }) {
  if (!items) return null

  return (
    <BreadcrumbRoot>
      {items?.map((item, index) => (
        <BreadcrumbItem key={index} item={item} />
      ))}
    </BreadcrumbRoot>
  )
}

// -----------------------------------
function BreadcrumbRoot({ children }) {
  return <Breadcrumb aria-label='breadcrumb'>{children}</Breadcrumb>
}

function BreadcrumbItem({ item }) {
  const { title, route: routeName } = item
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
