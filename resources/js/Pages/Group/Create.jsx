import Form from '@/Components/Form'
import useFormDate from '@/Hooks/useFormDate'
import AuthLayout from '@/Layouts/AuthLayout'

import GroupFormData from './Partials/GroupFormData'
import GroupFormFooterButtons from './Partials/GroupFormFooterButtons'

import { breadcrumbs, titles } from './data'

// ====================================
export default function GroupCreatePage() {
  const { handleSubmit, errors, isLoading } = useFormDate('group.store')

  return (
    <>
      {/*  CRIAR ANO LETIVO */}
      <section>
        <Form onSubmit={handleSubmit}>
          {/* header teacher */}
          <Form.Header>{titles.create}</Form.Header>

          {/* form */}
          <GroupFormData errors={errors} />

          {/* footer teacher */}
          <Form.Footer>
            <GroupFormFooterButtons disabled={isLoading} />
          </Form.Footer>
        </Form>
      </section>
    </>
  )
}

// -----------------------------------
GroupCreatePage.layout = (page) => (
  <AuthLayout title={titles.create} breadcrumb={breadcrumbs.create}>
    {page}
  </AuthLayout>
)
