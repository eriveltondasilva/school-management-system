import AuthLayout from '@/Layouts/AuthenticatedLayout'
import { breadcrumbs, titles } from './pagesInfo'

// ====================================
export default function StudentShow() {
  return <div>Visualizar aluno</div>
}

// ------------------------------------
StudentShow.layout = (page) => (
  <AuthLayout title={titles.show} breadcrumbItems={breadcrumbs.show}>
    {page}
  </AuthLayout>
)
