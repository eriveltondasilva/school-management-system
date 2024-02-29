import { Link, usePage } from '@inertiajs/react'
import { Alert, Button } from 'flowbite-react'
import { CheckCircle, Save, Trash2 } from 'lucide-react'

import Form from '@/Components/Form'
import useFormDate from '@/Hooks/useFormDate'
import AuthLayout from '@/Layouts/AuthLayout'

import StudentFormData from './Partials/StudentFormData'
import { breadcrumbs, titles } from './data'

// ==============================================
export default function StudentCreatePage() {
  const { flash } = usePage().props || {}
  const { errors, handleChange, handleSubmit, processing } =
    useFormDate('student')
  return (
    <>
      <Form onSubmit={handleSubmit}>
        {flash?.message && (
          <AlertCreate id={flash.id} message={flash.message} />
        )}
        <Form.Header>{titles.create}</Form.Header>
        <StudentFormData onChange={handleChange} errors={errors} />
        <Form.Footer>
          <Button
            type='reset'
            disabled={processing}
            color='light'
            className='uppercase'
            fullSized>
            <Trash2 className='mr-2 h-5 w-5' />
            Limpar campos
          </Button>
          <Button
            type='submit'
            disabled={processing}
            color='blue'
            className='uppercase'
            fullSized>
            <Save className='mr-2 h-5 w-5' />
            Salvar aluno
          </Button>
        </Form.Footer>
      </Form>
    </>
  )
}

// ----------------------------------------------
function AlertCreate({ id, message }) {
  return (
    <Alert color='success' icon={CheckCircle}>
      <div>{message}</div>
      <Link href={route('student.show', id)} className='font-medium underline'>
        Clique aqui para vê-lo.
      </Link>
    </Alert>
  )
}

// ----------------------------------------------
StudentCreatePage.layout = (page) => (
  <AuthLayout title={titles.create} breadcrumb={breadcrumbs.create}>
    {page}
  </AuthLayout>
)
