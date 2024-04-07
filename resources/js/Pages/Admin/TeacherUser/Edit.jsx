import { breadcrumbs, titles } from './data'

import Form from '@/Components/Form'
import AuthLayout from '@/Layouts/AuthLayout'
import UserFormData from './Partials/UserFormData'

import useFormHandler from '@/Hooks/useFormHandler'

export default function PageTeacherUserEdit({ teacher = {}, user = {} }) {
  const formOptions = {
    method: 'PUT',
    route: 'admin.teachers.users.update',
    params: { teacher, user },
  }
  const { handleSubmit, isLoading, errors } = useFormHandler(formOptions)

  return (
    <Form onSubmit={handleSubmit} autoComplete='false'>
      {/* header teacher */}
      <Form.Header>
        <Form.HeaderTitle title={titles.create} />
      </Form.Header>

      <UserFormData {...{ data: user, errors }} />

      {/* footer teacher */}
      <Form.Footer>
        <Form.FooterButtonReset disabled={isLoading} />
        <Form.FooterButtonSubmit disabled={isLoading} />
      </Form.Footer>
    </Form>
  )
}

// ------------------------------------
PageTeacherUserEdit.layout = (page) => (
  <AuthLayout
    title={titles.create}
    breadcrumb={breadcrumbs.create}
    children={page}
  />
)
