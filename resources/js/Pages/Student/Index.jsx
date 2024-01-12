import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout'

// ====================================
export default function StudentIndex({students}) {
  const pageTitle = 'Listar alunos'

  // prettier-ignore
  const breadcrumbItems = [
    { title: 'Painel', route: 'dashboard' },
    { title: pageTitle }
  ]

  console.log(students)

  return (
    <AuthenticatedLayout title={pageTitle} breadcrumbItems={breadcrumbItems}>
      <div className='no-wrapper'>

      {JSON.stringify(students)}
      </div>

    </AuthenticatedLayout>
  )
}
