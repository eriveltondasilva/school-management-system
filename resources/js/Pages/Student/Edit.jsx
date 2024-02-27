import { Button } from 'flowbite-react'
import { Save, Trash2 } from 'lucide-react'

import Form from '@/Components/Form'
import AuthLayout from '@/Layouts/AuthLayout'

import useFormStudent from '@/Hooks/useFormInertiaHelper'
import StudentFormData from './Partials/StudentFormData'
import { breadcrumbs, titles } from './data'

// ====================================
export default function StudentEditPage({ student }) {
  const { handleSubmit, handleChange, data, processing } =
    useFormStudent(student) || {}

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Header>{titles.edit}</Form.Header>
        <StudentFormData data={data} onChange={handleChange} />
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
            Atualizar aluno
          </Button>
        </Form.Footer>
        <Form.Footer />
      </Form>
    </>
  )
}

// ------------------------------------
StudentEditPage.layout = (page) => (
  <AuthLayout title={titles.edit} breadcrumb={breadcrumbs.edit}>
    {page}
  </AuthLayout>
)
