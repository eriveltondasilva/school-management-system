import { Link, usePage } from '@inertiajs/react'

import Alert from '@/Components/Alert'
import Form from '@/Components/Form'
import useFormDate from '@/Hooks/useFormDate'
import AuthLayout from '@/Layouts/AuthLayout'

import AcademicYearFormData from './Partials/AcademicYearFormData'
import AcademicYearFormFooterButton from './Partials/AcademicYearFormFooterButton'

import { breadcrumbs, titles } from './data'

// ====================================
export default function AcademicYearCreatePage() {
  const { flash } = usePage().props || {}
  const formDataOptions = {
    routeName: 'academic-year.store',
  }
  const { handleSubmit, errors, isLoading } = useFormDate(formDataOptions)

  return (
    <>
      {/*  CRIAR ANO LETIVO */}
      <section>
        <Form onSubmit={handleSubmit}>
          {/* flash message */}
          {flash?.message && (
            <Alert color='success'>
              <div>{flash.message}</div>
              <Link
                href={route('academic-year.edit', flash.id)}
                className='font-medium underline'>
                Clique aqui para vê-lo.
              </Link>
            </Alert>
          )}

          {/* header teacher */}
          <Form.Header>{titles.create}</Form.Header>

          {/* form */}
          <AcademicYearFormData errors={errors} />

          {/* footer teacher */}
          <Form.Footer>
            <AcademicYearFormFooterButton disabled={isLoading} />
          </Form.Footer>
        </Form>
      </section>
    </>
  )
}

// -----------------------------------
AcademicYearCreatePage.layout = (page) => (
  <AuthLayout title={titles.create} breadcrumb={breadcrumbs.create}>
    {page}
  </AuthLayout>
)
