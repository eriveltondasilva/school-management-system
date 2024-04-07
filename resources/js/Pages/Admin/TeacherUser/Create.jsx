import { breadcrumbs, titles } from './data'

import Form from '@/Components/Form'
import AuthLayout from '@/Layouts/AuthLayout'
import UserFormData from './Partials/UserFormData'

import useFormHandler from '@/Hooks/useFormHandler'

export default function PageTeacherUserCreate({ teacher = {} }) {
  const formOptions = {
    method: 'POST',
    route: 'admin.teachers.users.store',
    params: { teacher },
  }
  const { handleSubmit, isLoading, errors } = useFormHandler(formOptions)

  return (
    <Form onSubmit={handleSubmit} autoComplete='false'>
      {/* header teacher */}
      <Form.Header>
        <Form.HeaderTitle title={titles.create} />
      </Form.Header>

      <UserFormData {...{ errors }} />

      {/* footer teacher */}
      <Form.Footer>
        <Form.FooterButtonReset disabled={isLoading} />
        <Form.FooterButtonSubmit disabled={isLoading} />
      </Form.Footer>
    </Form>
  )
}

// ------------------------------------
PageTeacherUserCreate.layout = (page) => (
  <AuthLayout
    title={titles.create}
    breadcrumb={breadcrumbs.create}
    children={page}
  />
)
