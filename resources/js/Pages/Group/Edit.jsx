import { Link, usePage } from '@inertiajs/react'
import { Button, Tooltip } from 'flowbite-react'
import { Plus } from 'lucide-react'

import Alert from '@/Components/Alert'
import Form from '@/Components/Form'
import useFormDate from '@/Hooks/useFormDate'
import AuthLayout from '@/Layouts/AuthLayout'

import GroupFormData from './Partials/GroupFormData'
import GroupFormFooterButton from './Partials/GroupFormFooterButton'

import { breadcrumbs, titles } from './data'

// ====================================
export default function GroupEditPage({ group = {} }) {
  const { flash } = usePage().props || {}
  const { handleSubmit, errors, isLoading } = useFormDate('group.update', group)

  return (
    <Form onSubmit={handleSubmit}>
      {/* flash message */}
      {flash?.message && (
        <Alert color='success'>
          <span className='font-medium'>{flash.message}</span>
        </Alert>
      )}

      {/*  */}
      <Form.Header>
        <span className='flex gap-4'>
          {titles.edit}
          {/*  */}
          <Tooltip content='Cadastrar novo turma'>
            <Button
              href={route('group.create')}
              color='blue'
              size='xs'
              as={Link}>
              <Plus className='h-4 w-4' />
            </Button>
          </Tooltip>
        </span>
      </Form.Header>

      {/*  */}
      <GroupFormData data={group} errors={errors} />

      {/*  */}
      <Form.Footer>
        <GroupFormFooterButton disabled={isLoading} />
      </Form.Footer>
    </Form>
  )
}

// -----------------------------------
GroupEditPage.layout = (page) => (
  <AuthLayout title={titles.edit} breadcrumb={breadcrumbs.edit}>
    {page}
  </AuthLayout>
)
