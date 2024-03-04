import { Link, usePage } from '@inertiajs/react'

import Alert from '@/Components/Alert'
import Form from '@/Components/Form'
import useFormDate from '@/Hooks/useFormDate'
import AuthLayout from '@/Layouts/AuthLayout'

import GroupFormData from './Partials/GroupFormData'
import GroupFormFooterButton from './Partials/GroupFormFooterButton'

import { breadcrumbs, titles } from './data'

// ====================================
export default function GroupCreatePage() {
  const { flash } = usePage().props || {}
  const { handleSubmit, errors, isLoading } = useFormDate('group.store')

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
                href={route('group.edit', flash.id)}
                className='font-medium underline'>
                Clique aqui para vê-lo.
              </Link>
            </Alert>
          )}

          {/* header teacher */}
          <Form.Header>{titles.create}</Form.Header>

          {/* form */}
          <GroupFormData errors={errors} />

          {/* footer teacher */}
          <Form.Footer>
            <GroupFormFooterButton disabled={isLoading} />
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
