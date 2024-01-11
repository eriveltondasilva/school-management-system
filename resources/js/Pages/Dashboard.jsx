import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout'

// ====================================
export default function Dashboard() {
  const pageTitle = 'Painel'

  const breadcrumbItems = [{ title: pageTitle }]

  return (
    <>
      <AuthenticatedLayout
        title={pageTitle}
        breadcrumbItems={breadcrumbItems}></AuthenticatedLayout>
    </>
  )
}
