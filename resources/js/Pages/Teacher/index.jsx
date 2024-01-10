import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout'

// ====================================
export default function Calendar() {
  const breadcrumbItems = [
    { title: 'Painel', route: 'dashboard' },
    { title: 'Professor' },
  ]

  return (
    <AuthenticatedLayout
      breadcrumbItems={breadcrumbItems}></AuthenticatedLayout>
  )
}