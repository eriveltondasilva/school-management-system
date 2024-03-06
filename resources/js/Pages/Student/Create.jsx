import { Link, usePage } from '@inertiajs/react'

import Alert from '@/Components/Alert'
import Form from '@/Components/Form'
import useFormDate from '@/Hooks/useFormDate'
import AuthLayout from '@/Layouts/AuthLayout'

import StudentFormData from './Partials/StudentFormData'
import StudentFormFooterButtons from './Partials/StudentFormFooterButtons'

import { breadcrumbs, titles } from './data'

// ==============================================
export default function StudentCreatePage() {
  const { flash } = usePage().props || {}
  const formDataOptions = {
    routeName: 'student.store',
  }
  const { handleSubmit, errors, isLoading } = useFormDate(formDataOptions)

  return (
    <>
      <Form onSubmit={handleSubmit}>
        {/* flash message */}
        {flash?.message && (
          <Alert color='success'>
            <div>{flash.message}</div>
            <Link
              href={route('student.show', flash.id)}
              className='font-medium underline'>
              Clique aqui para vê-lo.
            </Link>
          </Alert>
        )}

        {/* header student */}
        <Form.Header>{titles.create}</Form.Header>

        {/*  */}
        <StudentFormData errors={errors} />

        {/* footer student */}
        <Form.Footer>
          <StudentFormFooterButtons disabled={isLoading} />
        </Form.Footer>
      </Form>
    </>
  )
}

// ----------------------------------------------
StudentCreatePage.layout = (page) => (
  <AuthLayout title={titles.create} breadcrumb={breadcrumbs.create}>
    {page}
  </AuthLayout>
)
