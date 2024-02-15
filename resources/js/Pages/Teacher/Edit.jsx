import AuthLayout from '@/Layouts/AuthenticatedLayout'
import { breadcrumbs, titles } from './pagesInfo'

// ====================================
export default function TeacherEdit() {
  return null
}

// ------------------------------------
TeacherEdit.layout = (page) => (
  <AuthLayout title={titles.show} breadcrumbItems={breadcrumbs.show}>
    {page}
  </AuthLayout>
)
