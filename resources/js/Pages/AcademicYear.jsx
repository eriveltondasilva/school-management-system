import AuthLayout from '@/Layouts/AuthLayout'
import { breadcrumbs, titles } from './data'

// ====================================
export default function AcademicYearPage() {
  return null
}

// -----------------------------------
AcademicYearPage.layout = (page) => (
  <AuthLayout title={titles.academicYear} breadcrumb={breadcrumbs.academicYear}>
    {page}
  </AuthLayout>
)
