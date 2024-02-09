import AuthLayout from '@/Layouts/AuthenticatedLayout'
import { breadcrumb, title } from './studentInfo'

// ====================================
export default function StudentShow() {
  return <div>Visualizar aluno</div>
}

// ------------------------------------
StudentShow.layout = (page) => (
  <AuthLayout title={title.show} breadcrumbItems={breadcrumb.show}>
    {page}
  </AuthLayout>
)
