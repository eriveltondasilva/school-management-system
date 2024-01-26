import Calendar from '@/Components/Calendar'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout'

const pageTitle = 'Painel'
// ====================================
export default function Dashboard() {
  return (
    <>
      <Calendar />
    </>
  )
}

// -----------------------------------
Dashboard.layout = (page) => (
  <AuthenticatedLayout panelInfo title={pageTitle} children={page} />
)
