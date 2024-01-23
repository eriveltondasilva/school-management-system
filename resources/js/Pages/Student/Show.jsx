import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout'

// ====================================
export default function StudentCreate() {
  const pageTitle = 'Visualizar aluno'

  // prettier-ignore
  const breadcrumbItems = [
    { title: pageTitle }
  ]

  return (
    <AuthenticatedLayout title={pageTitle} breadcrumbItems={breadcrumbItems}></AuthenticatedLayout>
  )
}
