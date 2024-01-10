import { Sidebar } from 'flowbite-react'
import { Backpack, Briefcase, Calendar, Home } from 'lucide-react'

import SidebarCollapseItems from './SidebarCollapseItems'
import SidebarItems from './SidebarItems'

// ====================================
export default function SidebarMenu() {
  const sidebarItems = [
    { title: 'Painel', icon: Home, route: 'dashboard' },
    { title: 'Calendário', icon: Calendar, route: 'calendar' },
  ]

  const sidebarCollapseItems = [
    {
      title: 'Estudantes',
      icon: Backpack,
      subItems: [
        { title: 'Listar estudantes', route: 'student.index' },
        { title: 'Frequência', route: 'calendar' },
      ],
    },
    {
      title: 'Professor',
      icon: Briefcase,
      subItems: [
        { title: 'Notas', route: 'calendar' },
        { title: 'Frequência', route: 'calendar' },
      ],
    },
  ]

  return (
    <Sidebar.Items>
      <Sidebar.ItemGroup>
        <SidebarItems items={sidebarItems} />
      </Sidebar.ItemGroup>

      <Sidebar.ItemGroup>
        <SidebarCollapseItems items={sidebarCollapseItems} />
      </Sidebar.ItemGroup>
    </Sidebar.Items>
  )
}
