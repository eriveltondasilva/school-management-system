import { Head } from '@inertiajs/react'

import PanelInfo from '@/Components/PanelInfo'
import Breadcrumb from './partials/Breadcrumb'
import Footer from './partials/Footer'
import Header from './partials/Header'
import Main from './partials/Main'
import Sidebar from './partials/Sidebar'

// ====================================
export default function AuthenticatedLayout({
  title,
  breadcrumbItems,
  panelInfo,
  children,
}) {
  return (
    <>
      {/* # page title */}
      <Head title={title} />

      <Sidebar />
      <Wrapper>
        <Header title={title} />
        <Breadcrumb items={breadcrumbItems} />
        {panelInfo && <PanelInfo />}
        <Main>{children}</Main>
        <Footer />
      </Wrapper>
    </>
  )
}

// -----------------------------------
function Wrapper({ children }) {
  return (
    <div className='grid min-h-dvh grid-rows-[auto_auto_1fr_auto] gap-y-3 px-4 py-2 md:ml-64'>
      {children}
    </div>
  )
}
