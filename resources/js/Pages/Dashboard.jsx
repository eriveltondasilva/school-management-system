// import Calendar from '@/Components/Calendar'
import AuthLayout from '@/Layouts/AuthLayout'
import { breadcrumbs, titles } from './data'

// ====================================
export default function Dashboard() {
  return <>{/* <Calendar /> */}</>
}

// -----------------------------------
Dashboard.layout = (page) => (
  <AuthLayout title={titles.dashboard} breadcrumb={breadcrumbs.dashboard}>
    {page}
  </AuthLayout>
)
