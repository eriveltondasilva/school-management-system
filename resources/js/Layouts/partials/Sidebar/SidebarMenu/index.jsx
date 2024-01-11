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
      title: 'Alunos',
      icon: Backpack,
      routes: 'student.*',
      subItems: [
        { title: 'Listar alunos', route: 'student.index' },
        { title: 'Cadastrar aluno', route: 'student.create' },
      ],
    },
    {
      title: 'Professor',
      icon: Briefcase,
      routes: 'teacher.*',
      subItems: [
        { title: 'Listar professores', route: 'teacher.index' },
        { title: 'Listar professores', route: 'teacher.create' },
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
