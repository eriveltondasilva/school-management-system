import { Link, usePage } from '@inertiajs/react'
import { Button } from 'flowbite-react'
import { Undo2 } from 'lucide-react'

import Alert from '@/Components/Alert'
import Form from '@/Components/Form'

import useFormHandler from '@/Hooks/useFormHandler'
import AuthLayout from '@/Layouts/AuthLayout'

import GroupFormData from './Partials/GroupFormData'
import GroupFormFooterButton from './Partials/GroupFormFooterButton'

import { breadcrumbs, titles } from './data'

// ===============================================
export default function PageGroupCreate() {
  const flash = usePage().props.flash || {}

  const formDataOptions = { routeName: 'group.store' }
  const { handleSubmit, errors, isLoading } = useFormHandler(formDataOptions)

  return (
    <section>
      {/*  Criar ano letivo */}
      <Form onSubmit={handleSubmit}>
        {/* Mensagem flash */}
        {flash.message && (
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
        <Form.Header>
          <Form.HeaderTitle title={titles.create} />
          <Button
            title='Voltar'
            color='red'
            size='xs'
            onClick={() => history.back()}>
            <Undo2 className='mx-1 h-4 w-4' />
          </Button>
        </Form.Header>

        {/* form */}
        <GroupFormData errors={errors} />

        {/* footer teacher */}
        <Form.Footer>
          <GroupFormFooterButton disabled={isLoading} />
        </Form.Footer>
      </Form>
    </section>
  )
}

// ==============================================
PageGroupCreate.layout = (page) => (
  <AuthLayout
    title={titles.create}
    breadcrumb={breadcrumbs.create}
    children={page}
  />
)
