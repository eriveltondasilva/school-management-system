import Form from '@/Components/Form'
import AuthLayout from '@/Layouts/AuthenticatedLayout'

const pageTitle = 'Cadastrar aluno'
const breadcrumbItems = [
  { title: 'Listar alunos', route: 'student.index' },
  { title: pageTitle },
]

// ====================================
export default function StudentCreate() {
  return <Form />
}

// ------------------------------------
StudentCreate.layout = (page) => (
  <AuthLayout title={pageTitle} breadcrumbItems={breadcrumbItems}>
    {page}
  </AuthLayout>
)
