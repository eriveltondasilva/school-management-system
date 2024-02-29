import { Link, usePage } from '@inertiajs/react'
import { Alert, Button } from 'flowbite-react'
import { CheckCircle, Save, Trash2 } from 'lucide-react'

import Form from '@/Components/Form'
import useFormDate from '@/Hooks/useFormDate'
import AuthLayout from '@/Layouts/AuthLayout'

import { breadcrumbs, titles } from './data'
import TeacherFormData from './Partials/TeacherFormData'

// ====================================
export default function TeacherCreatePage() {
  const { flash } = usePage().props || {}
  const { errors, handleSubmit, isLoading } = useFormDate('teacher')

  return (
    <>
      <Form onSubmit={handleSubmit}>
        {/* flash message */}
        {flash?.message && (
          <Alert color='success' icon={CheckCircle}>
            <div>{flash.message}</div>
            <Link
              href={route('teacher.show', flash.id)}
              className='font-medium underline'>
              Clique aqui para vê-lo.
            </Link>
          </Alert>
        )}

        {/* header teacher */}
        <Form.Header>{titles.create}</Form.Header>

        {/*  */}
        <TeacherFormData errors={errors} />

        {/* footer teacher */}
        <Form.Footer>
          <Button
            type='reset'
            disabled={isLoading}
            color='light'
            className='uppercase'
            fullSized>
            <Trash2 className='mr-2 h-5 w-5' />
            Limpar campos
          </Button>
          <Button
            type='submit'
            disabled={isLoading}
            color='blue'
            className='uppercase'
            fullSized>
            <Save className='mr-2 h-5 w-5' />
            Salvar professor
          </Button>
        </Form.Footer>
      </Form>
    </>
  )
}

// ------------------------------------
TeacherCreatePage.layout = (page) => (
  <AuthLayout title={titles.create} breadcrumb={breadcrumbs.create}>
    {page}
  </AuthLayout>
)
