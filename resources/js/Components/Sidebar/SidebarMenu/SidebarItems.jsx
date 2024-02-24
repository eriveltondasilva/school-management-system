import { Link } from '@inertiajs/react'
import { Sidebar } from 'flowbite-react'

// ====================================
export default function SidebarItems({ items }) {
  if (!items) return null

  return (
    <>
      {items.map(({ title, icon, route: routeName }, index) => (
        <Sidebar.Item
          key={`sidebar-item-${index}`}
          icon={icon}
          as={Link}
          href={route(routeName)}
          active={route().current(routeName)}>
          {title}
        </Sidebar.Item>
      ))}
    </>
  )
}
