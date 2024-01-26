import AuthLayout from '@/Layouts/AuthenticatedLayout'

const pageTitle = 'Cadastrar professores'
const breadcrumbItems = [{ title: pageTitle }]

// ====================================
export default function TeacherCreate() {
  return null
}

// ------------------------------------
TeacherCreate.layout = (page) => (
  <AuthLayout title={pageTitle} breadcrumbItems={breadcrumbItems}>
    {page}
  </AuthLayout>
)
