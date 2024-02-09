import AuthLayout from '@/Layouts/AuthenticatedLayout'
import { breadcrumb, title } from './teacherTitles'

// ====================================
export default function TeacherCreate() {
  return null
}

// ------------------------------------
TeacherCreate.layout = (page) => (
  <AuthLayout title={title.create} breadcrumbItems={breadcrumb.create}>
    {page}
  </AuthLayout>
)
