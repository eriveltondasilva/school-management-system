import { Sidebar } from 'flowbite-react'
import { Backpack, Briefcase, Calendar, Home } from 'lucide-react'

// ====================================
export default function SidebarMenu() {
  // const largeDot = <Dot className='text-lg' />

  return (
    <Sidebar.Items>
      <Sidebar.ItemGroup>
        <Sidebar.Item icon={Home} active href='#'>
          Painel
        </Sidebar.Item>
        <Sidebar.Item icon={Calendar} href='#'>
          Calendário
        </Sidebar.Item>
      </Sidebar.ItemGroup>
      <Sidebar.ItemGroup>
        {/*  */}
        <Sidebar.Collapse icon={Backpack} label='Estudantes'>
          <Sidebar.Item href='#'>Products</Sidebar.Item>
          <Sidebar.Item href='#'>Sales</Sidebar.Item>
        </Sidebar.Collapse>

        <Sidebar.Collapse icon={Briefcase} label='Professor'>
          <Sidebar.Item href='#'>Products</Sidebar.Item>
          <Sidebar.Item href='#'>Sales</Sidebar.Item>
          <Sidebar.Item href='#'>Sales</Sidebar.Item>
        </Sidebar.Collapse>
      </Sidebar.ItemGroup>
    </Sidebar.Items>
  )
}
