import AuthLayout from '@/Layouts/AuthenticatedLayout'

const pageTitle = 'Calendário'
const breadcrumbItems = [{ title: pageTitle }]

// ====================================
export default function Calendar() {
  return null
}

// -----------------------------------
Calendar.layout = (page) => (
  <AuthLayout title={pageTitle} breadcrumbItems={breadcrumbItems}>
    {page}
  </AuthLayout>
)
