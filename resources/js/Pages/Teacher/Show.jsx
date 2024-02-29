import { Link, usePage } from '@inertiajs/react'
import { Alert, Button, Tooltip } from 'flowbite-react'
import { Check, Pencil, Plus } from 'lucide-react'
import { useState } from 'react'

import Form from '@/Components/Form'
import AuthLayout from '@/Layouts/AuthLayout'

import AddressFormData from './Partials/AddressFormData'
import TeacherFormData from './Partials/TeacherFormData'
import { breadcrumbs, titles } from './data'

// ====================================
export default function TeacherShowPage({ teacher }) {
  const { flash } = usePage().props || {}

  return (
    <>
      <Form>
        {/* flash message */}
        {flash?.message && <ShowPageAlert>{flash.message}</ShowPageAlert>}

        {/* header teacher */}
        <Form.Header>
          <span className='flex gap-4'>
            {titles.show}
            <EditPageButton
              href={route('teacher.edit', teacher.id)}
              text='Editar aluno'>
              <Pencil className='h-4 w-4' />
            </EditPageButton>

            <EditPageButton
              href={route('teacher.create')}
              text='Cadastrar novo aluno'>
              <Plus className='h-4 w-4' />
            </EditPageButton>
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

function EditPageButton({ text, href, children }) {
  return (
    <Tooltip content={text}>
      <Button href={href} color='blue' size='xs' as={Link}>
        {children}
      </Button>
    </Tooltip>
  )
}

// ------------------------------------
TeacherShowPage.layout = (page) => (
  <AuthLayout title={titles.show} breadcrumb={breadcrumbs.show}>
    {page}
  </AuthLayout>
)
