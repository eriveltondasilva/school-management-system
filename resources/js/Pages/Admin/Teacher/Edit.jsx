import { Button } from 'flowbite-react'
import { Undo2 } from 'lucide-react'

import Form from '@/Components/Form'

import useFormHandler from '@/Hooks/useFormHandler'
import AuthLayout from '@/Layouts/AuthLayout'

import AddressFormData from './Partials/AddressFormData'
import TeacherFormData from './Partials/TeacherFormData'
import TeacherFormFooterButtons from './Partials/TeacherFormFooterButtons'

import { breadcrumbs, titles } from './data'

// ==============================================
export default function PageTeacherEdit({ teacher = {} }) {
  const formDataOptions = {
    method: 'PUT',
    route: 'admin.teachers.update',
    params: { teacher: teacher.id },
  }
  const { handleSubmit, errors, isLoading } = useFormHandler(formDataOptions)

  return (
    <>
      <Form onSubmit={handleSubmit}>
        {/* header teacher */}
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

        {/* form */}
        <TeacherFormData {...{ data: teacher, errors }} />

        {/* address teacher */}
        <AddressFormData {...{ data: teacher, errors }} />

        {/* footer teacher */}
        <Form.Footer>
          <TeacherFormFooterButtons disabled={isLoading} />
        </Form.Footer>
      </Form>
    </>
  )
}

// ==============================================
PageTeacherEdit.layout = (page) => (
  <AuthLayout
    title={titles.edit}
    breadcrumb={breadcrumbs.edit}
    children={page}
  />
)
