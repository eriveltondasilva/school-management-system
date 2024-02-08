import Form from '@/Components/Form'
import AuthLayout from '@/Layouts/AuthenticatedLayout'

const pageTitle = 'Cadastrar aluno'
const breadcrumbItems = [
  { title: 'Listar alunos', route: 'student.index' },
  { title: pageTitle },
]

// ====================================
export default function StudentCreate() {
  function handleSubmit(e) {
    e.preventDefault()
    alert('submit')
  }
  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Header text='Formulário de Cadastro de Aluno' />

        <Form.Footer />
      </Form>
    </>
  )
}

// ------------------------------------
StudentCreate.layout = (page) => (
  <AuthLayout title={pageTitle} breadcrumbItems={breadcrumbItems}>
    {page}
  </AuthLayout>
)
