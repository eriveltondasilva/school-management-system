import Calendar from '@/Components/Calendar'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout'

// ====================================
export default function Dashboard() {
  const pageTitle = 'Painel'

  const breadcrumbItems = [{ title: pageTitle }]

  return (
    <>
      <AuthenticatedLayout title={pageTitle} breadcrumbItems={breadcrumbItems} panelInfo>
        <Calendar />
      </AuthenticatedLayout>
    </>
  )
}
