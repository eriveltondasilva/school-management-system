import PanelInfo from '@/Components/PanelInfo'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout'

// ====================================
export default function Dashboard() {
  const pageTitle = 'Painel'

  const breadcrumbItems = [{ title: pageTitle }]

  return (
    <>
      <AuthenticatedLayout title={pageTitle} breadcrumbItems={breadcrumbItems}>
        <PanelInfo />
      </AuthenticatedLayout>
    </>
  )
}
