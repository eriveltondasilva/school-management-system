import { Link, usePage } from '@inertiajs/react'
import { Button } from 'flowbite-react'
import { PencilLine, Plus } from 'lucide-react'

import Alert from '@/Components/Alert'
import Form from '@/Components/Form'
import AuthLayout from '@/Layouts/AuthLayout'

import AddressFormData from './Partials/AddressFormData'
import TeacherFormData from './Partials/TeacherFormData'

import { breadcrumbs, titles } from './data'

// ====================================
export default function TeacherShowPage({ teacher = {} }) {
  const { flash } = usePage().props || {}

  return (
    <>
      <Form>
        {/* flash message */}
        {flash?.message && (
          <Alert color='success'>
            <span className='font-medium'>{flash.message}</span>
          </Alert>
        )}

        {/* header teacher */}
        <Form.Header>
          <span className='flex gap-4'>
            {titles.show}
            <TitleButton id={teacher.id} />
          </span>
        </Form.Header>

        {/* form */}
        <TeacherFormData data={teacher} readOnly />

        {/* address teacher */}
        <AddressFormData data={teacher} readOnly />
      </Form>
    </>
  )
}

function TitleButton({ id = '' }) {
  return (
    <Button.Group>
      <Button
        title='Editar professor'
        href={route('teacher.edit', id)}
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
        <Plus className='h-4 w-4' />
      </Button>
    </Button.Group>
  )
}

// ------------------------------------
TeacherShowPage.layout = (page) => (
  <AuthLayout title={titles.show} breadcrumb={breadcrumbs.show}>
    {page}
  </AuthLayout>
)
