import AuthLayout from '@/Layouts/AuthenticatedLayout'

const pageTitle = 'Listar professores'
const breadcrumbItems = [{ title: pageTitle }]

// ====================================
export default function TeacherIndex() {
  return null
}

// ------------------------------------
TeacherIndex.layout = (page) => (
  <AuthLayout title={pageTitle} breadcrumbItems={breadcrumbItems}>
    {page}
  </AuthLayout>
)
