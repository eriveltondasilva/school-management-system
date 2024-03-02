import { Button } from 'flowbite-react'
import { Save } from 'lucide-react'

import Form from '@/Components/Form'
import useFormDate from '@/Hooks/useFormDate'
import AuthLayout from '@/Layouts/AuthLayout'

import { breadcrumbs, titles } from './data'
import AcademicYearFormData from './Partials/AcademicYearFormData'

export default function CreatePage({ academicYear }) {
  const { handleSubmit, isLoading, errors } = useFormDate('academic-year')
  return (
    <>
      {/*  CRIAR ANO LETIVO */}
      <section>
        <Form onSubmit={handleSubmit}>
          {/* header teacher */}
          <Form.Header>{titles.create}</Form.Header>

          {/* form */}
          <AcademicYearFormData data={academicYear} errors={errors} />

          {/* footer teacher */}
          <Form.Footer>
            <Button
              type='submit'
              disabled={isLoading}
              color='blue'
              className='uppercase'
              fullSized>
              <Save className='mr-2 h-5 w-5' />
              Criar Ano Letivo
            </Button>
          </Form.Footer>
        </Form>
      </section>
    </>
  )
}

// -----------------------------------
CreatePage.layout = (page) => (
  <AuthLayout title={titles.create} breadcrumb={breadcrumbs.create}>
    {page}
  </AuthLayout>
)
