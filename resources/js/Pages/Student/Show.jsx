import { Link, usePage } from '@inertiajs/react'
import { Alert, Button, Tooltip } from 'flowbite-react'
import { Check, Pencil, Plus } from 'lucide-react'
import { useState } from 'react'

import Form from '@/Components/Form'
import AuthLayout from '@/Layouts/AuthLayout'

import { breadcrumbs, titles } from './data'
import StudentFormData from './Partials/StudentFormData'

// ====================================
export default function StudentShowPage({ student }) {
  const { flash } = usePage().props || {}

  return (
    <Form>
      {/* flash message */}
      {flash?.message && <ShowPageAlert>{flash.message}</ShowPageAlert>}

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

// ----------------------------------------------
function EditPageButton({ text, href, children }) {
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
