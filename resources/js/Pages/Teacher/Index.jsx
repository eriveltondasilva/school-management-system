import AuthLayout from '@/Layouts/AuthenticatedLayout'
import { breadcrumbs, titles } from './pagesInfo'

// ====================================
export default function TeacherIndex() {
  return null
}

// ------------------------------------
TeacherIndex.layout = (page) => (
  <AuthLayout title={titles.index} breadcrumbItems={breadcrumbs.index}>
    {page}
  </AuthLayout>
)
