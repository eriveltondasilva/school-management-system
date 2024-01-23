import Table from '@/Components/Table'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout'

// ====================================
export default function StudentIndex({ students }) {
  const pageTitle = 'Listar alunos'

  // prettier-ignore
  const breadcrumbItems = [
    { title: pageTitle }
  ]

  return (
    <AuthenticatedLayout title={pageTitle} breadcrumbItems={breadcrumbItems}>
      <Table items={students} />
    </AuthenticatedLayout>
  )
}
