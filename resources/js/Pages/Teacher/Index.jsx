import AuthLayout from '@/Layouts/AuthenticatedLayout'
import { breadcrumb, title } from './teacherInfo'

// ====================================
export default function TeacherIndex() {
  return null
}

// ------------------------------------
TeacherIndex.layout = (page) => (
  <AuthLayout title={title.index} breadcrumbItems={breadcrumb.index}>
    {page}
  </AuthLayout>
)
