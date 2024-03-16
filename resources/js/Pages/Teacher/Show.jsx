import { Link, usePage } from '@inertiajs/react'
import { Button } from 'flowbite-react'
import { PencilLine, Plus, Undo2 } from 'lucide-react'

import Alert from '@/Components/Alert'
import Form from '@/Components/Form'

import AuthLayout from '@/Layouts/AuthLayout'

import AddressFormData from './Partials/AddressFormData'
import TeacherFormData from './Partials/TeacherFormData'

import { breadcrumbs, titles } from './data'

// ====================================
export default function TeacherShowPage({ teacher = {} }) {
  const flash = usePage().props.flash || {}

  return (
    <Form>
      {/* flash message */}
      {flash.message && <Alert color='success'>{flash.message}</Alert>}

      {/* header teacher */}
      <Form.Header>
        <Form.HeaderTitle title={titles.show} />

        <Button.Group>
          <Button
            title='Editar professor'
            href={route('teacher.edit', teacher.id)}
            color='blue'
            size='xs'
            as={Link}>
            <PencilLine className='h-4 w-4' />
          </Button>

          <Button
            title='Cadastrar novo professor'
            href={route('teacher.create')}
            color='green'
            size='xs'
            as={Link}>
            <Plus className='mx-1 h-4 w-4' />
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

      {/* form */}
      <TeacherFormData data={teacher} readOnly />

      {/* address teacher */}
      <AddressFormData data={teacher} readOnly />
    </Form>
  )
}

// ------------------------------------
TeacherShowPage.layout = (page) => (
  <AuthLayout title={titles.show} breadcrumb={breadcrumbs.show}>
    {page}
  </AuthLayout>
)
