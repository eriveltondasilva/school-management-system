import { Head, usePage } from '@inertiajs/react'
import { twJoin } from 'tailwind-merge'

import Breadcrumb from '@/Components/Breadcrumb'
import Footer from '@/Components/Footer'
import Header from '@/Components/Header'
import Sidebar from '@/Components/Sidebar'

import SidebarItems from './data'
import Main from './partials/Main'
import schoolImg from '/resources/images/school.png'

// ============================================================================
export default function AuthLayout({ title, breadcrumb, children }) {
  const { user, activeYear } = usePage().props.auth || {}
  const userRole = user.role.name || 'user'

  const sidebarItemsMap = {
    admin: SidebarItems.Admin,
    teacher: SidebarItems.Teacher,
    student: SidebarItems.Student,
    user: SidebarItems.User,
  }[userRole]

  return (
    <>
      <Head title={title} />

      {/* #sidebar */}
      <Sidebar>
        <Sidebar.Logo img={schoolImg} imgAlt='Escola Viver'>
          Escola Viver
        </Sidebar.Logo>
        <Sidebar.TriggerClose />
        <Sidebar.Menu items={sidebarItemsMap} />
      </Sidebar>

      <Wrapper>
        {/* #header */}
        <Header>
          <Header.Left />
          <Header.Right activeYear={activeYear}>
            <Header.Dropdown avatar_url={user.avatar_url}>
              <Header.DropdownHeader
                role={user.role.display_name || 'user'}
                email={user.email}
              />
              <Header.DropdownItem />
            </Header.Dropdown>
          </Header.Right>
        </Header>

        {/* #breadcrumb */}
        {breadcrumb && <Breadcrumb items={breadcrumb} />}

        {/* {panelInfo && <PanelInfo />} */}

        <Main>{children}</Main>

        {/* #footer */}
        <Footer>
          <Footer.Left />
          <Footer.Right />
        </Footer>
      </Wrapper>
    </>
  )
}

// -----------------------------------
function Wrapper({ children }) {
  return (
    <div
      className={twJoin(
        'grid grid-rows-[auto_auto_1fr_auto]',
        'min-h-dvh max-w-full',
        'gap-y-3 px-4 py-2 md:ml-64'
      )}>
      {children}
    </div>
  )
}
