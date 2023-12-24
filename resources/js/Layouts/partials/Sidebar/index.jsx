import { Sidebar } from 'flowbite-react'
import { Calendar, Home, Backpack, Briefcase, Dot, X } from 'lucide-react'
import schoolImg from '/resources/images/school.png'

export default function SidebarIndex() {
  const largeDot = <Dot className='text-lg' />

  return (
    <aside
      id='sidebar'
      className='fixed left-0 top-0 z-40 h-screen w-64 -translate-x-full transition-transform sm:translate-x-0'
      aria-label='sidebar'>
      <Sidebar aria-label='Sidebar'>
        {/*  */}
        <div className='relative sm:hidden'>
          <button
            type='button'
            data-drawer-toggle='sidebar'
            aria-controls='sidebar'
            className='absolute -top-1 right-0 inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white'>
            <X />
            <span className='sr-only'>Close menu</span>
          </button>
        </div>
        {/*  */}

        <Sidebar.Logo img={schoolImg} imgAlt='Escola Viver'>
          Escola Viver
        </Sidebar.Logo>
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
      </Sidebar>
    </aside>
  )
}
