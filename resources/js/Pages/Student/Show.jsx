import { Link } from '@inertiajs/react'
import { Button } from 'flowbite-react'
import { Pencil } from 'lucide-react'

import Form from '@/Components/Form'
import AuthLayout from '@/Layouts/AuthLayout'

import { breadcrumbs, titles } from './data'
import StudentFormData from './Partials/StudentFormData'

// ====================================
export default function StudentShowPage({ student }) {
  return (
    <>
      <Form>
        <Form.Header>
          <span className='flex gap-6'>
            {titles.show}
            <ButtonEdit id={student.id} />
          </span>
        </Form.Header>
        <StudentFormData data={student} readOnly />
      </Form>
    </>
  )
}

// ----------------------------------------------
function ButtonEdit({ id }) {
  return (
    <Button
      href={route('student.edit', id)}
      color='blue'
      size='xs'
      as={Link}
      pill>
      <Pencil className='mr-2 h-4 w-4' />
      editar
    </Button>
  )
}

// ----------------------------------------------
StudentShowPage.layout = (page) => (
  <AuthLayout title={titles.show} breadcrumb={breadcrumbs.show}>
    {page}
  </AuthLayout>
)
