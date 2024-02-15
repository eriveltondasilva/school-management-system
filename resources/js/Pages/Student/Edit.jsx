import AuthLayout from '@/Layouts/AuthenticatedLayout'
import { breadcrumbs, titles } from './pagesInfo'

// ====================================
export default function StudentEdit() {
  return null
}

// ------------------------------------
StudentEdit.layout = (page) => (
  <AuthLayout title={titles.edit} breadcrumbItems={breadcrumbs.edit}>
    {page}
  </AuthLayout>
)
