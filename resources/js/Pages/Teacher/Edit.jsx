import AuthLayout from '@/Layouts/AuthenticatedLayout'
import { breadcrumb, title } from './teacherInfo'

// ====================================
export default function TeacherEdit() {
  return null
}

// ------------------------------------
TeacherEdit.layout = (page) => (
  <AuthLayout title={title.show} breadcrumbItems={breadcrumb.show}>
    {page}
  </AuthLayout>
)
