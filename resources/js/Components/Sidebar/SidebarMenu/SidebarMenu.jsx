import { Link } from '@inertiajs/react'
import { Sidebar } from 'flowbite-react'

import { sidebarItems } from './data'

// ====================================
export function SidebarMenuRoot() {
  return (
    <Sidebar.Items>
      {sidebarItems?.map((group, index) => (
        <Sidebar.ItemGroup key={`sidebar-group-${index}`}>
          <SidebarMenuItems items={group} />
        </Sidebar.ItemGroup>
      ))}
    </Sidebar.Items>
  )
}

// ====================================
function SidebarMenuItems({ items }) {
  return (
    <>
      {items?.map(({ title, icon, routeName }, index) => (
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
