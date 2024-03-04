import { Link, usePage } from '@inertiajs/react'
import { Alert, Button, Tooltip } from 'flowbite-react'
import { Check, Plus } from 'lucide-react'
import { useState } from 'react'

import Form from '@/Components/Form'
import useFormDate from '@/Hooks/useFormDate'
import AuthLayout from '@/Layouts/AuthLayout'

import GroupFormData from './Partials/GroupFormData'
import GroupFormFooterButtons from './Partials/GroupFormFooterButtons'

import { breadcrumbs, titles } from './data'

// ====================================
export default function EditGroupPage({ group }) {
  const { handleSubmit, errors, isLoading } = useFormDate('group.update', group)

  const { flash } = usePage().props || {}

  return (
    <Form onSubmit={handleSubmit}>
      {/* flash message */}
      {flash?.message && <ShowPageAlert>{flash.message}</ShowPageAlert>}

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
        <GroupFormFooterButtons disabled={isLoading} />
      </Form.Footer>
    </Form>
  )
}

function ShowPageAlert({ children }) {
  const [isShowed, setIsShowed] = useState(true)

  return (
    <>
      {isShowed && (
        <Alert
          color='success'
          icon={Check}
          onDismiss={() => setIsShowed(!isShowed)}>
          <span className='font-medium'>{children}</span>
        </Alert>
      )}
    </>
  )
}

// -----------------------------------
EditGroupPage.layout = (page) => (
  <AuthLayout title={titles.edit} breadcrumb={breadcrumbs.edit}>
    {page}
  </AuthLayout>
)
