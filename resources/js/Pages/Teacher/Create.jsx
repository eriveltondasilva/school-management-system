import AuthLayout from '@/Layouts/AuthenticatedLayout'
import { breadcrumbs, titles } from './pagesInfo'

// ====================================
export default function TeacherCreate() {
  return null
}

// ------------------------------------
TeacherCreate.layout = (page) => (
  <AuthLayout title={titles.create} breadcrumbItems={breadcrumbs.create}>
    {page}
  </AuthLayout>
)
