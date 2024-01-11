import { Link } from '@inertiajs/react'
import { Sidebar } from 'flowbite-react'

// ==================================
export default function SidebarCollapseItems({ items }) {
  if (!items) return null

  return (
    <>
      {items.map(({ title, icon, routes, subItems }, i) => (
        <Sidebar.Collapse
          key={`sidebar-collapse-${i}`}
          icon={icon}
          label={title}
          open={route().current(routes)}>
          {subItems.map(({ title, route: routeName }, i) => (
            <Sidebar.Item
              key={`sidebar-subItem-${i}`}
              as={Link}
              href={route(routeName)}
              active={route().current(routeName)}>
              {title}
            </Sidebar.Item>
          ))}
        </Sidebar.Collapse>
      ))}
    </>
  )
}
