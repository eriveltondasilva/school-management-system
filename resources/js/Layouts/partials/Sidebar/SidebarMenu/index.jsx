import { Sidebar } from 'flowbite-react'
import { Backpack, Briefcase, Calendar, Home } from 'lucide-react'

import SidebarItems from './SidebarItems'

// ====================================
export default function SidebarMenu() {
  const sidebarItems = [
    [{ title: 'Painel', icon: Home, route: 'dashboard' }],
    [
      { title: 'Calendário', icon: Calendar, route: 'calendar' },
      { title: 'Documentos', icon: Calendar, route: 'calendar' },
    ],
    [
      { title: 'Alunos', icon: Backpack, route: 'student.index' },
      { title: 'Professor', icon: Briefcase, route: 'teacher.index' },
    ],
    [
      { title: 'Notas', icon: Backpack, route: 'dashboard' },
      // { title: 'Frequências', icon: Briefcase, route: 'dashboard' },
    ],
  ]

  // const sidebarCollapseItems = [
  //   {
  //     title: 'Alunos',
  //     icon: Backpack,
  //     routes: 'student.*',
  //     subItems: [
  //       { title: 'Listar alunos', route: 'student.index' },
  //       { title: 'Cadastrar aluno', route: 'student.create' },
  //     ],
  //   },
  //   {
  //     title: 'Professor',
  //     icon: Briefcase,
  //     routes: 'teacher.*',
  //     subItems: [
  //       { title: 'Listar professores', route: 'teacher.index' },
  //       { title: 'Listar professores', route: 'teacher.create' },
  //     ],
  //   },
  // ]

  return (
    <Sidebar.Items>
      <Sidebar.ItemGroup>
        <SidebarItems items={sidebarItems[0]} />
      </Sidebar.ItemGroup>

      <Sidebar.ItemGroup>
        <SidebarItems items={sidebarItems[1]} />
      </Sidebar.ItemGroup>

      <Sidebar.ItemGroup>
        <SidebarItems items={sidebarItems[2]} />
      </Sidebar.ItemGroup>

      <Sidebar.ItemGroup>
        <SidebarItems items={sidebarItems[3]} />
      </Sidebar.ItemGroup>
    </Sidebar.Items>
  )
}
