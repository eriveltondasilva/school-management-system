import { Button } from 'flowbite-react'
import { Save, Trash2 } from 'lucide-react'

import Form from '@/Components/Form'
import useFormDate from '@/Hooks/useFormDate'
import AuthLayout from '@/Layouts/AuthLayout'

import StudentFormData from './Partials/StudentFormData'
import { breadcrumbs, titles } from './data'

// ====================================
export default function StudentEditPage({ student }) {
  const { errors, handleSubmit, isLoading } = useFormDate('student', student)

  return (
    <>
      <Form onSubmit={handleSubmit}>
        {/* header student */}
        <Form.Header>{titles.edit}</Form.Header>

        {/* form student */}
        <StudentFormData data={student} errors={errors} />

        {/* footer student */}
        <Form.Footer>
          <Button
            type='reset'
            disabled={isLoading}
            color='light'
            className='uppercase'
            fullSized>
            <Trash2 className='mr-2 h-5 w-5' />
            Resetar campos
          </Button>
          <Button
            type='submit'
            disabled={isLoading}
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
