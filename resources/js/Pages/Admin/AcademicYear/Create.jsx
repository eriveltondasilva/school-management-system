import { Link, usePage } from '@inertiajs/react'
import { Button } from 'flowbite-react'
import { Undo2 } from 'lucide-react'

import Alert from '@/Components/Alert'
import Form from '@/Components/Form'

import useFormHandler from '@/Hooks/useFormHandler'
import AuthLayout from '@/Layouts/AuthLayout'

import AcademicYearFormData from './Partials/AcademicYearFormData'
import AcademicYearFormFooterButton from './Partials/AcademicYearFormFooterButton'

import { breadcrumbs, titles } from './data'

// ==============================================
export default function PageAcademicYearCreate() {
  const { message, id } = usePage().props || {}

  const formDataOptions = { route: 'admin.academic-years.store' }
  const { handleSubmit, errors, isLoading } = useFormHandler(formDataOptions)

  return (
    <section>
      <Form onSubmit={handleSubmit}>
        {/* Mensagem flash */}
        {message && (
          <Alert color='success'>
            <div>{message}</div>
            <Link
              href={route('admin.academic-years.edit', { academicYear: id })}
              className='font-medium underline'>
              Clique aqui para vê-lo.
            </Link>
          </Alert>
        )}

        {/* header teacher */}
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

        {/* Academic year form data */}
        <AcademicYearFormData errors={errors} />

        {/* Form footer */}
        <Form.Footer>
          <AcademicYearFormFooterButton disabled={isLoading} />
        </Form.Footer>
      </Form>
    </section>
  )
}

// ==============================================
PageAcademicYearCreate.layout = (page) => (
  <AuthLayout
    title={titles.create}
    breadcrumb={breadcrumbs.create}
    children={page}
  />
)
