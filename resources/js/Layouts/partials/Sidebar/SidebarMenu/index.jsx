import { Sidebar } from 'flowbite-react'
import { SidebarCollapseItems, SidebarItems } from './SidebarMenuItems.jsx'

// ====================================
export default function SidebarMenu() {
  return (
    <Sidebar.Items>
      <Sidebar.ItemGroup>
        <SidebarItems />
      </Sidebar.ItemGroup>

      <Sidebar.ItemGroup>
        <SidebarCollapseItems />
      </Sidebar.ItemGroup>
    </Sidebar.Items>
  )
}
