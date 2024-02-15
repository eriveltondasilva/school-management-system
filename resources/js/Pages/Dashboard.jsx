import Calendar from '@/Components/Calendar'
import AuthLayout from '@/Layouts/AuthenticatedLayout'
import { breadcrumbs, titles } from './pagesInfo'

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
  <AuthLayout
    panelInfo
    title={titles.dashboard}
    breadcrumbItems={breadcrumbs.dashboard}>
    {page}
  </AuthLayout>
)
