import AuthLayout from '@/Layouts/AuthLayout'
import { breadcrumbs, titles } from './pagesInfo'

// ====================================
export default function TeacherShow() {
  return null
}

// ------------------------------------
TeacherShow.layout = (page) => (
  <AuthLayout title={titles.show} breadcrumb={breadcrumbs.show}>
    {page}
  </AuthLayout>
)
