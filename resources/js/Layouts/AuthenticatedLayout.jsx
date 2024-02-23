import { Head } from '@inertiajs/react'
import { twJoin } from 'tailwind-merge'

import Breadcrumb from '@/Components/Breadcrumb'
// import PanelInfo from '@/Components/PanelInfo'
import Footer from './partials/Footer'
import Header from './partials/Header'
import Main from './partials/Main'
import Sidebar from './partials/Sidebar'

// ====================================
export default function AuthenticatedLayout({
  title,
  breadcrumb,
  panelInfo,
  children,
}) {
  return (
    <>
      <Head title={title} />

      <Sidebar />
      <Wrapper>
        <Header title={title} />
        <Breadcrumb items={breadcrumb} />
        {/* {panelInfo && <PanelInfo />} */}
        <Main>{children}</Main>
        <Footer />
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
