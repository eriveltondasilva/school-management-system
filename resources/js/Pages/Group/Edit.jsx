import { Link, usePage } from '@inertiajs/react'
import { Button } from 'flowbite-react'
import { Plus, Undo2 } from 'lucide-react'

import Alert from '@/Components/Alert'
import Form from '@/Components/Form'

import useFormHandler from '@/Hooks/useFormHandler'
import AuthLayout from '@/Layouts/AuthLayout'

import GroupFormData from './Partials/GroupFormData'
import GroupFormFooterButton from './Partials/GroupFormFooterButton'

import { breadcrumbs, titles } from './data'

// ==============================================
export default function PageGroupEdit({ group = {} }) {
  const flash = usePage().props.flash || {}

  const formDataOptions = { routeName: 'group.update', id: group.id }
  const { handleSubmit, errors, isLoading } = useFormHandler(formDataOptions)

  return (
    <Form onSubmit={handleSubmit}>
      {/* Mensagem flash */}
      {flash.message && <Alert color='success'>{flash.message}</Alert>}

      {/* Form header */}
      <Form.Header>
        <Form.HeaderTitle title={titles.edit} />
        <Button.Group>
          <Button
            href={route('group.create')}
            color='blue'
            size='xs'
            title='Cadastrar novo turma'
            as={Link}>
            <Plus className='h-4 w-4' />
          </Button>
          <Button
            title='Voltar'
            color='red'
            size='xs'
            onClick={() => history.back()}>
            <Undo2 className='mx-1 h-4 w-4' />
          </Button>
        </Button.Group>
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
PageGroupEdit.layout = (page) => (
  <AuthLayout title={titles.edit} breadcrumb={breadcrumbs.edit}>
    {page}
  </AuthLayout>
)
