import AuthLayout from '@/Layouts/AuthenticatedLayout'

const pageTitle = 'Editar aluno'
const breadcrumbItems = [{ title: pageTitle }]

// ====================================
export default function StudentEdit() {
  return null
}

// ------------------------------------
StudentEdit.layout = (page) => (
  <AuthLayout title={pageTitle} breadcrumbItems={breadcrumbItems}>
    {page}
  </AuthLayout>
)
