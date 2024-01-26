import AuthLayout from '@/Layouts/AuthenticatedLayout'

const pageTitle = 'Editar professor'
const breadcrumbItems = [{ title: pageTitle }]

// ====================================
export default function TeacherEdit() {
  return null
}

// ------------------------------------
TeacherEdit.layout = (page) => (
  <AuthLayout title={pageTitle} breadcrumbItems={breadcrumbItems}>
    {page}
  </AuthLayout>
)
