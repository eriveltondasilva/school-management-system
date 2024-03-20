import { Button } from 'flowbite-react'
import { Undo2 } from 'lucide-react'

import Form from '@/Components/Form'
import useFormHandler from '@/Hooks/useFormHandler'
import AuthLayout from '@/Layouts/AuthLayout'

import StudentFormData from './Partials/StudentFormData'
import StudentFormFooterButtons from './Partials/StudentFormFooterButtons'

import { breadcrumbs, titles } from './data'

// ==============================================
export default function PageStudentEdit({ student = {} }) {
  const formDataOptions = { routeName: 'student.update', id: student.id }
  const { handleSubmit, errors, isLoading } = useFormHandler(formDataOptions)

  return (
    <Form onSubmit={handleSubmit}>
      {/* header student */}
      <Form.Header>
        <Form.HeaderTitle title={titles.edit} />
        <Button
          title='Voltar'
          color='red'
          size='xs'
          onClick={() => history.back()}>
          <Undo2 className='mx-1 h-4 w-4' />
        </Button>
      </Form.Header>

      {/* form student */}
      <StudentFormData {...{ data: student, errors }} />

      {/* footer student */}
      <Form.Footer>
        <StudentFormFooterButtons disabled={isLoading} />
      </Form.Footer>
    </Form>
  )
}

// ==============================================
PageStudentEdit.layout = (page) => (
  <AuthLayout title={titles.edit} breadcrumb={breadcrumbs.edit}>
    {page}
  </AuthLayout>
)
