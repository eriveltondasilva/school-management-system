import { Button } from 'flowbite-react'
import { Save } from 'lucide-react'

import Form from '@/Components/Form'
import useFormDate from '@/Hooks/useFormDate'
import AuthLayout from '@/Layouts/AuthLayout'

import AcademicYearFormData from './Partials/AcademicYearFormData'
import { breadcrumbs, titles } from './data'

// ====================================
export default function EditPage({ academicYear }) {
  const { handleSubmit, errors, isLoading } = useFormDate(
    'academic-year',
    academicYear
  )

  console.log(academicYear)
  return (
    <Form onSubmit={handleSubmit}>
      {/*  */}
      <Form.Header>{titles.edit}</Form.Header>

      {/*  */}
      <AcademicYearFormData data={academicYear} errors={errors} />

      {/*  */}
      <Form.Footer>
        <Button
          type='submit'
          disabled={isLoading}
          color='blue'
          className='uppercase'
          fullSized>
          <Save className='mr-2 h-5 w-5' />
          Salvar
        </Button>
      </Form.Footer>
    </Form>
  )
}

// -----------------------------------
EditPage.layout = (page) => (
  <AuthLayout title={titles.edit} breadcrumb={breadcrumbs.edit}>
    {page}
  </AuthLayout>
)
