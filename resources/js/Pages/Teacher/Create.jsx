import { Link, usePage } from '@inertiajs/react'
import { Button } from 'flowbite-react'
import { Undo2 } from 'lucide-react'

import Alert from '@/Components/Alert'
import Form from '@/Components/Form'

import useFormHandler from '@/Hooks/useFormHandler'
import AuthLayout from '@/Layouts/AuthLayout'

import AddressFormData from './Partials/AddressFormData'
import TeacherFormData from './Partials/TeacherFormData'
import TeacherFormFooterButtons from './Partials/TeacherFormFooterButtons'

import { breadcrumbs, titles } from './data'

// ====================================
export default function PageTeacherCreate() {
  const flash = usePage().props.flash || {}

  const formDataOptions = { routeName: 'teacher.store' }
  const { handleSubmit, errors, isLoading } = useFormHandler(formDataOptions)

  return (
    <>
      <Form onSubmit={handleSubmit}>
        {/* flash message */}
        {flash.message && (
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
PageTeacherCreate.layout = (page) => (
  <AuthLayout
    title={titles.create}
    breadcrumb={breadcrumbs.create}
    children={page}
  />
)
