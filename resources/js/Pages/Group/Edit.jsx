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

// ==============================================
export default function GroupEditPage({ group = {} }) {
  const flash = usePage().props.flash || {}

  const formDataOptions = {
    routeName: 'group.update',
    id: group.id,
  }
  const { handleSubmit, errors, isLoading } = useFormDate(formDataOptions)

  return (
    <Form onSubmit={handleSubmit}>
      {/* Mensagem flash */}
      {flash.message && <Alert color='success'>{flash.message}</Alert>}

      {/* Form header */}
      <Form.Header>
        <span className='flex gap-4'>
          {titles.edit}
          <Tooltip content='Cadastrar nova turma'>
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

      {/* Formulário */}
      <GroupFormData {...{ data: group, errors }} />

      {/*  */}
      <Form.Footer>
        <GroupFormFooterButton disabled={isLoading} />
      </Form.Footer>
    </Form>
  )
}

// ==============================================
GroupEditPage.layout = (page) => (
  <AuthLayout title={titles.edit} breadcrumb={breadcrumbs.edit}>
    {page}
  </AuthLayout>
)
