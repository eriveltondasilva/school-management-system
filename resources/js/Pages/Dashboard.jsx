import Calendar from '@/Components/Calendar'
import AuthLayout from '@/Layouts/AuthenticatedLayout'

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
  <AuthLayout panelInfo title={pageTitle}>
    {page}
  </AuthLayout>
)
