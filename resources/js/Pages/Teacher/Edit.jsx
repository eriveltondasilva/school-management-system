import { Button } from 'flowbite-react'
import { Save, Trash2 } from 'lucide-react'

import Form from '@/Components/Form'
import useFormDate from '@/Hooks/useFormDate'
import AuthLayout from '@/Layouts/AuthLayout'

import AddressFormData from './Partials/AddressFormData'
import TeacherFormData from './Partials/TeacherFormData'
import { breadcrumbs, titles } from './data'

// ====================================
export default function TeacherEditPage({ teacher }) {
  const { errors, handleSubmit, isLoading } = useFormDate('teacher', teacher)

  return (
    <>
      <Form onSubmit={handleSubmit}>
        {/* header teacher */}
        <Form.Header>{titles.edit}</Form.Header>

        {/* form */}
        <TeacherFormData data={teacher} errors={errors} />

        {/* address teacher */}
        <AddressFormData data={teacher} errors={errors} />

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
            Atualizar professor
          </Button>
        </Form.Footer>
      </Form>
    </>
  )
}

// ------------------------------------
TeacherEditPage.layout = (page) => (
  <AuthLayout title={titles.edit} breadcrumb={breadcrumbs.edit}>
    {page}
  </AuthLayout>
)
