import BreadcrumbItem from './BreadcrumbItem'
import BreadcrumbRoot from './BreadcrumbRoot'

export default function Breadcrumb({ items }) {
  if (!items) return null

  return (
    <BreadcrumbRoot>
      {items?.map(({ title, route }) => (
        <BreadcrumbItem key={title} title={title} route={route} />
      ))}
    </BreadcrumbRoot>
  )
}
