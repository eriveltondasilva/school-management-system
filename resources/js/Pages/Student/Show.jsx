import { Link, usePage } from '@inertiajs/react'
import { Button, Tooltip } from 'flowbite-react'
import { Pencil, Plus } from 'lucide-react'

import Alert from '@/Components/Alert'
import Form from '@/Components/Form'
import AuthLayout from '@/Layouts/AuthLayout'

import { breadcrumbs, titles } from './data'
import StudentFormData from './Partials/StudentFormData'

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
          <EditPageButton
            href={route('student.edit', student.id)}
            text='Editar aluno'>
            <Pencil className='h-4 w-4' />
          </EditPageButton>

          <EditPageButton
            href={route('student.create')}
            text='Cadastrar novo aluno'>
            <Plus className='h-4 w-4' />
          </EditPageButton>
        </span>
      </Form.Header>

      {/*  */}
      <StudentFormData data={student} readOnly />
    </Form>
  )
}

// ----------------------------------------------
function EditPageButton({ text = '', href = '', children }) {
  return (
    <Tooltip content={text}>
      <Button href={href} color='blue' size='xs' as={Link}>
        {children}
      </Button>
    </Tooltip>
  )
}

// ----------------------------------------------
StudentShowPage.layout = (page) => (
  <AuthLayout title={titles.show} breadcrumb={breadcrumbs.show}>
    {page}
  </AuthLayout>
)
