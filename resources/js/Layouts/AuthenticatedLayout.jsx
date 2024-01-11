import { Head } from '@inertiajs/react'

import Breadcrumb from './partials/Breadcrumb'
// import Footer from './partials/Footer'
import Header from './partials/Header'
import Main from './partials/Main'
import Sidebar from './partials/Sidebar'

// ====================================
export default function AuthenticatedLayout({ title, breadcrumbItems, children }) {
  return (
    <>
      <Sidebar />
      <Wrapper>
        <Head title={title} />
        <Header title={title} />
        <Breadcrumb items={breadcrumbItems} />
        <Main>{children}</Main>
        {/* {children} */}
        {/* <Footer /> */}
      </Wrapper>
    </>
  )
}

// -----------------------------------
function Wrapper({ children }) {
  return <div className='p-4 sm:ml-64'>{children}</div>
}
