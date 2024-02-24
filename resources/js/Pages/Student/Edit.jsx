import AuthLayout from '@/Layouts/AuthLayout'
import { breadcrumbs, titles } from './pagesInfo'

// ====================================
export default function StudentEdit() {
  return null
}

// ------------------------------------
StudentEdit.layout = (page) => (
  <AuthLayout title={titles.edit} breadcrumb={breadcrumbs.edit}>
    {page}
  </AuthLayout>
)
