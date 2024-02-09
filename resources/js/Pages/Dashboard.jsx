import Calendar from '@/Components/Calendar'
import AuthLayout from '@/Layouts/AuthenticatedLayout'
import { title } from './pageInfo'

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
  <AuthLayout panelInfo title={title.dashboard}>
    {page}
  </AuthLayout>
)
