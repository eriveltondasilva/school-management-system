import Form from '@/Components/Form'
import useFormDate from '@/Hooks/useFormDate'
import AuthLayout from '@/Layouts/AuthLayout'

import StudentFormData from './Partials/StudentFormData'
import StudentFormFooterButtons from './Partials/StudentFormFooterButtons'

import { breadcrumbs, titles } from './data'

// ====================================
export default function StudentEditPage({ student }) {
  const { handleSubmit, errors, isLoading } = useFormDate(
    'student.update',
    student
  )

  return (
    <>
      <Form onSubmit={handleSubmit}>
        {/* header student */}
        <Form.Header>{titles.edit}</Form.Header>

        {/* form student */}
        <StudentFormData data={student} errors={errors} />

        {/* footer student */}
        <Form.Footer>
          <StudentFormFooterButtons disabled={isLoading} />
        </Form.Footer>
      </Form>
    </>
  )
}

// ------------------------------------
StudentEditPage.layout = (page) => (
  <AuthLayout title={titles.edit} breadcrumb={breadcrumbs.edit}>
    {page}
  </AuthLayout>
)
