import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout'

const pageTitle = 'Calendário'
const breadcrumbItems = [{ title: pageTitle }]

// ====================================
export default function Calendar() {
  return null
}

// -----------------------------------
Calendar.layout = (page) => (
  <AuthenticatedLayout
    title={pageTitle}
    breadcrumbItems={breadcrumbItems}
    children={page}
  />
)
