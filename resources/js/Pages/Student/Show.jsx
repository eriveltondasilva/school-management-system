import { Link, usePage } from '@inertiajs/react'
import { Button } from 'flowbite-react'
import { PencilLine, Plus } from 'lucide-react'

import Alert from '@/Components/Alert'
import Form from '@/Components/Form'
import AuthLayout from '@/Layouts/AuthLayout'

import StudentFormData from './Partials/StudentFormData'

import { breadcrumbs, titles } from './data'

// ====================================
export default function StudentShowPage({ student = {} }) {
  const { flash } = usePage().props || {}

  return (
    <Form>
      {/* flash message */}
      {flash?.message && (
        <Alert color='success'>
          <span className='font-medium'>{flash.message}</span>
        </Alert>
      )}

      {/* header student */}
      <Form.Header>
        <span className='flex gap-4'>
          {titles.show}
          <TitleButton id={student.id} />
        </span>
      </Form.Header>

      {/* student form data */}
      <StudentFormData data={student} readOnly />
    </Form>
  )
}

// ----------------------------------------------
function TitleButton({ id = '' }) {
  return (
    <Button.Group>
      <Button
        title='Editar aluno'
        href={route('student.edit', id)}
        color='blue'
        size='xs'
        as={Link}>
        <PencilLine className='h-4 w-4' />
      </Button>
      <Button
        title='Cadastrar novo aluno'
        href={route('student.create')}
        color='green'
        size='xs'
        as={Link}>
        <Plus className='h-4 w-4' />
      </Button>
    </Button.Group>
  )
}

// ----------------------------------------------
StudentShowPage.layout = (page) => (
  <AuthLayout title={titles.show} breadcrumb={breadcrumbs.show}>
    {page}
  </AuthLayout>
)
