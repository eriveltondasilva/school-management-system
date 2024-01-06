import { Link } from '@inertiajs/react'
import { Sidebar } from 'flowbite-react'

import { sidebarCollapseItems, sidebarItems } from './itemList'

// ====================================
export function SidebarItems() {
  return (
    <>
      {sidebarItems.map(({ title, icon, route: routeName }, i) => (
        <Sidebar.Item
          key={`sidebar-item-${i}`}
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

// ---------------------------------
export function SidebarCollapseItems() {
  return (
    <>
      {sidebarCollapseItems.map(({ title, icon, subItems }, i) => (
        <Sidebar.Collapse key={`sidebar-collapse-${i}`} icon={icon} label={title}>
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
