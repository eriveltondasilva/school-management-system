import { Link } from '@inertiajs/react'
import { Button, Tooltip } from 'flowbite-react'
import { Pencil, Plus } from 'lucide-react'

import Form from '@/Components/Form'
import AuthLayout from '@/Layouts/AuthLayout'

import { breadcrumbs, titles } from './data'
import TeacherFormData from './Partials/TeacherFormData'

// ====================================
export default function TeacherShowPage({ teacher }) {
  return (
    <>
      <Form>
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

        {/*  */}
        <TeacherFormData data={teacher} readOnly />
      </Form>
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
