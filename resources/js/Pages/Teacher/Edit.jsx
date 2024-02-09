import AuthLayout from '@/Layouts/AuthenticatedLayout'
import { breadcrumb, title } from './teacherTitles'

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
