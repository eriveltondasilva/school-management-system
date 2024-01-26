import AuthLayout from '@/Layouts/AuthenticatedLayout'

const pageTitle = 'Visualizar professor'
const breadcrumbItems = [{ title: pageTitle }]

// ====================================
export default function TeacherShow() {
  return null
}

// ------------------------------------
TeacherShow.layout = (page) => (
  <AuthLayout title={pageTitle} breadcrumbItems={breadcrumbItems}>
    {page}
  </AuthLayout>
)
