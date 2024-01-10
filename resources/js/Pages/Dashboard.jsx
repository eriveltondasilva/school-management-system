import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout'

// ====================================
export default function Dashboard() {
  const breadcrumbItems = [{ title: 'Painel' }]

  return (
    <>
      <AuthenticatedLayout
        breadcrumbItems={breadcrumbItems}></AuthenticatedLayout>
    </>
  )
}
