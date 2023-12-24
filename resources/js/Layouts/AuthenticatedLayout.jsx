import Header from './partials/Header'
import Main from './partials/Main'
import Sidebar from './partials/Sidebar'

export default function AuthenticatedLayout({ children }) {
  return (
    <>
      <Sidebar />

      <div className='p-4 sm:ml-64'>
        <Header />
        <Main>
          <main>{children}</main>
        </Main>
      </div>
    </>
  )
}
