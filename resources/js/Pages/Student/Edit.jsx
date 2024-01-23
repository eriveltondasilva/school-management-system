import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout'

// ====================================
export default function StudentCreate() {
  const pageTitle = 'Editar aluno'

  // prettier-ignore
  const breadcrumbItems = [
    { title: pageTitle }
  ]

  return (
    <AuthenticatedLayout title={pageTitle} breadcrumbItems={breadcrumbItems}></AuthenticatedLayout>
  )
}
