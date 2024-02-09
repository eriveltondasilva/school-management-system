import AuthLayout from '@/Layouts/AuthenticatedLayout'
import { breadcrumb, title } from './teacherInfo'

// ====================================
export default function TeacherShow() {
  return null
}

// ------------------------------------
TeacherShow.layout = (page) => (
  <AuthLayout title={title.show} breadcrumbItems={breadcrumb.show}>
    {page}
  </AuthLayout>
)
