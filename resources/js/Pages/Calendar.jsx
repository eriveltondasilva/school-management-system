import AuthLayout from '@/Layouts/AuthenticatedLayout'
import { breadcrumb, title } from './calendarInfo'

// ====================================
export default function Calendar() {
  return null
}

// -----------------------------------
Calendar.layout = (page) => (
  <AuthLayout title={title.calendar} breadcrumbItems={breadcrumb.calendar}>
    {page}
  </AuthLayout>
)
