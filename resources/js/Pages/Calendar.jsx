import AuthLayout from '@/Layouts/AuthenticatedLayout'
import { breadcrumbs, titles } from './pagesInfo'

// ====================================
export default function Calendar() {
  return null
}

// -----------------------------------
Calendar.layout = (page) => (
  <AuthLayout title={titles.calendar} breadcrumbItems={breadcrumbs.calendar}>
    {page}
  </AuthLayout>
)
