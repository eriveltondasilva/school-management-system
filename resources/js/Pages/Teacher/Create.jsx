import { Link, usePage } from '@inertiajs/react'

import Alert from '@/Components/Alert'
import Form from '@/Components/Form'
import useFormDate from '@/Hooks/useFormDate'
import AuthLayout from '@/Layouts/AuthLayout'

import AddressFormData from './Partials/AddressFormData'
import TeacherFormData from './Partials/TeacherFormData'
import TeacherFormFooterButtons from './Partials/TeacherFormFooterButtons'

import { breadcrumbs, titles } from './data'

// ====================================
export default function TeacherCreatePage() {
  const { flash } = usePage().props || {}
  const formDataOptions = {
    routeName: 'teacher.store',
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
              href={route('teacher.show', flash.id)}
              className='font-medium underline'>
              Clique aqui para vê-lo.
            </Link>
          </Alert>
        )}

        {/* header teacher */}
        <Form.Header>{titles.create}</Form.Header>

        {/* form */}
        <TeacherFormData errors={errors} />

        {/* address teacher */}
        <AddressFormData errors={errors} />

        {/* footer teacher */}
        <Form.Footer>
          <TeacherFormFooterButtons disabled={isLoading} />
        </Form.Footer>
      </Form>
    </>
  )
}

// ------------------------------------
TeacherCreatePage.layout = (page) => (
  <AuthLayout title={titles.create} breadcrumb={breadcrumbs.create}>
    {page}
  </AuthLayout>
)
