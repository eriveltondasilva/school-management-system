import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout'

// ====================================
export default function Calendar() {
  const pageTitle = 'Listar professores'
  const breadcrumbItems = [{ title: pageTitle }]

  return (
    <AuthenticatedLayout title={pageTitle} breadcrumbItems={breadcrumbItems}></AuthenticatedLayout>
  )
}
