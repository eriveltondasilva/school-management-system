import AuthLayout from '@/Layouts/AuthenticatedLayout'

const pageTitle = 'Visualizar aluno'
const breadcrumbItems = [{ title: pageTitle }]

// ====================================
export default function StudentShow() {
  return null
}

// ------------------------------------
StudentCreate.layout = (page) => (
  <AuthLayout title={pageTitle} breadcrumbItems={breadcrumbItems}>
    {page}
  </AuthLayout>
)
