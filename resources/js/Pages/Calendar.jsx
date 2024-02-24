import AuthLayout from '@/Layouts/AuthLayout'
import { breadcrumbs, titles } from './pagesInfo'

// ====================================
export default function Calendar() {
  return null
}

// -----------------------------------
Calendar.layout = (page) => (
  <AuthLayout title={titles.calendar} breadcrumb={breadcrumbs.calendar}>
    {page}
  </AuthLayout>
)
