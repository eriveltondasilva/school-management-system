import { Link, usePage } from '@inertiajs/react'
import { Button } from 'flowbite-react'
import { Undo2 } from 'lucide-react'

import Alert from '@/Components/Alert'
import Form from '@/Components/Form'

import useFormHandler from '@/Hooks/useFormHandler'
import AuthLayout from '@/Layouts/AuthLayout'

import StudentFormData from './Partials/StudentFormData'
import StudentFormFooterButtons from './Partials/StudentFormFooterButtons'

import { breadcrumbs, titles } from './data'

// ==============================================
export default function PageStudentCreate() {
  const { message, id } = usePage().props.flash || {}

  const formDataOptions = {
    method: 'POST',
    route: 'admin.students.store',
  }
  const { handleSubmit, isLoading, errors } = useFormHandler(formDataOptions)

  return (
    <Form onSubmit={handleSubmit}>
      {/* flash message */}
      {message && (
        <Alert color='success'>
          <div>{message}</div>
          <Link
            href={route('admin.students.show', { student: id })}
            className='font-medium underline'>
            Clique aqui para vê-lo.
          </Link>
        </Alert>
      )}

      {/* header student */}
      <Form.Header>
        <Form.HeaderTitle title={titles.create} />
        <Button
          title='Voltar'
          color='red'
          size='xs'
          onClick={() => history.back()}>
          <Undo2 className='mx-1 h-4 w-4' />
        </Button>
      </Form.Header>

      {/* form */}
      <StudentFormData errors={errors} />

      {/* footer student */}
      <Form.Footer>
        <StudentFormFooterButtons disabled={isLoading} />
      </Form.Footer>
    </Form>
  )
}

// ----------------------------------------------
PageStudentCreate.layout = (page) => (
  <AuthLayout
    title={titles.create}
    breadcrumb={breadcrumbs.create}
    children={page}
  />
)
