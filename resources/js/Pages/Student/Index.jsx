import Table from '@/Components/Table'
import AuthLayout from '@/Layouts/AuthenticatedLayout'

const pageTitle = 'Listar alunos'
const breadcrumbItems = [{ title: pageTitle }]

// ====================================
export default function StudentIndex({ students }) {
  return <Table items={students} />
}

// ------------------------------------
StudentIndex.layout = (page) => (
  <AuthLayout title={pageTitle} breadcrumbItems={breadcrumbItems}>
    {page}
  </AuthLayout>
)
