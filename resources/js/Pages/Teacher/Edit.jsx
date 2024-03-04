import Form from '@/Components/Form'
import useFormDate from '@/Hooks/useFormDate'
import AuthLayout from '@/Layouts/AuthLayout'

import AddressFormData from './Partials/AddressFormData'
import TeacherFormData from './Partials/TeacherFormData'
import TeacherFormFooterButtons from './Partials/TeacherFormFooterButtons'

import { breadcrumbs, titles } from './data'

// ====================================
export default function TeacherEditPage({ teacher }) {
  const { handleSubmit, errors, isLoading } = useFormDate(
    'teacher.update',
    teacher
  )

  return (
    <>
      <Form onSubmit={handleSubmit}>
        {/* header teacher */}
        <Form.Header>{titles.edit}</Form.Header>

        {/* form */}
        <TeacherFormData data={teacher} errors={errors} />

        {/* address teacher */}
        <AddressFormData data={teacher} errors={errors} />

        {/* footer teacher */}
        <Form.Footer>
          <TeacherFormFooterButtons disabled={isLoading} />
        </Form.Footer>
      </Form>
    </>
  )
}

// ------------------------------------
TeacherEditPage.layout = (page) => (
  <AuthLayout title={titles.edit} breadcrumb={breadcrumbs.edit}>
    {page}
  </AuthLayout>
)
