import Form from '@/Components/Form'

import useFormDate from '@/Hooks/useFormDate'
import AuthLayout from '@/Layouts/AuthLayout'

import AddressFormData from './Partials/AddressFormData'
import TeacherFormData from './Partials/TeacherFormData'
import TeacherFormFooterButtons from './Partials/TeacherFormFooterButtons'

import { breadcrumbs, titles } from './data'

// ==============================================
export default function TeacherEditPage({ teacher = {} }) {
  const formDataOptions = { routeName: 'teacher.update', id: teacher.id }
  const { handleSubmit, errors, isLoading } = useFormDate(formDataOptions)

  return (
    <>
      <Form onSubmit={handleSubmit}>
        {/* header teacher */}
        <Form.Header>{titles.edit}</Form.Header>

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
TeacherEditPage.layout = (page) => (
  <AuthLayout title={titles.edit} breadcrumb={breadcrumbs.edit}>
    {page}
  </AuthLayout>
)
