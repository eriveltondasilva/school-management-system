import { Head, usePage } from '@inertiajs/react'
import { twJoin } from 'tailwind-merge'

import Breadcrumb from '@/Components/Breadcrumb'
// import PanelInfo from '@/Components/PanelInfo'
import Footer from '@/Components/Footer'
import Header from '@/Components/Header'
import Sidebar from '@/Components/Sidebar'
import Main from './partials/Main'

import schoolImg from '/resources/images/school.png'

// ============================================================================
export default function AuthenticatedLayout({ title, breadcrumb, children }) {
  const { user, activeAcademicYear } = usePage().props.auth || {}

  return (
    <>
      <Head title={title} />

      {/* #sidebar */}
      <Sidebar>
        <Sidebar.Logo img={schoolImg} imgAlt='Escola Viver'>
          Escola Viver
        </Sidebar.Logo>
        <Sidebar.BtnClose />
        <Sidebar.Menu />
      </Sidebar>

      <Wrapper>
        {/* #header */}
        <Header>
          <Header.Left title={title} />
          <Header.Right activeAcademicYear={activeAcademicYear}>
            <Header.Dropdown>
              <Header.DropdownHeader
                username={user.username}
                email={user.email}
              />
              <Header.DropdownItem />
            </Header.Dropdown>
          </Header.Right>
        </Header>

        {/* #breadcrumb */}
        <Breadcrumb items={breadcrumb} />

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
