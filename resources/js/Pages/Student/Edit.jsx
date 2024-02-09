import AuthLayout from '@/Layouts/AuthenticatedLayout'
import { breadcrumb, title } from './studentInfo'

// ====================================
export default function StudentEdit() {
  return null
}

// ------------------------------------
StudentEdit.layout = (page) => (
  <AuthLayout title={title.edit} breadcrumbItems={breadcrumb.edit}>
    {page}
  </AuthLayout>
)
