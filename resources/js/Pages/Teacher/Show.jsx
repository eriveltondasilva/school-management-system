import AuthLayout from '@/Layouts/AuthLayout'
import { breadcrumbs, titles } from './data'

// ====================================
export default function TeacherShowPage({ teacher }) {
  return (
    <>
      <h2>Visualizar professor</h2>
      {JSON.stringify(teacher)}
    </>
  )
}

// ------------------------------------
TeacherShowPage.layout = (page) => (
  <AuthLayout title={titles.show} breadcrumb={breadcrumbs.show}>
    {page}
  </AuthLayout>
)
