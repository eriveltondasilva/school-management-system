import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout'

// ====================================
export default function Calendar() {
  const pageTitle = 'Cadastrar alunos'

  // prettier-ignore
  const breadcrumbItems = [
    { title: 'Painel', route: 'dashboard' },
    { title: pageTitle }
  ]

  return (
    <AuthenticatedLayout title={pageTitle} breadcrumbItems={breadcrumbItems}></AuthenticatedLayout>
  )
}