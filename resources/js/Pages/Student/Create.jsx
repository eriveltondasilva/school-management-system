import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout'

// ====================================
export default function StudentCreate() {
  const pageTitle = 'Cadastrar alunos'

  // prettier-ignore
  const breadcrumbItems = [
    { title: pageTitle }
  ]

  return (
    <AuthenticatedLayout title={pageTitle} breadcrumbItems={breadcrumbItems}></AuthenticatedLayout>
  )
}
