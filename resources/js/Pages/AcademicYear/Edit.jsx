import { Link, usePage } from '@inertiajs/react'
import { Alert, Button, Tooltip } from 'flowbite-react'
import { Check, Plus, Save } from 'lucide-react'
import { useState } from 'react'

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
  const { flash } = usePage().props || {}

  console.log(academicYear)
  return (
    <Form onSubmit={handleSubmit}>
      {/* flash message */}
      {flash?.message && <ShowPageAlert>{flash.message}</ShowPageAlert>}

      {/*  */}
      <Form.Header>
        <span className='flex gap-4'>
          {titles.show}
          <EditPageButton
            href={route('academic-year.create')}
            text='Cadastrar novo ano letivo'>
            <Plus className='h-4 w-4' />
          </EditPageButton>
        </span>
      </Form.Header>

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

// ----------------------------------------------
function EditPageButton({ text, href, children }) {
  return (
    <Tooltip content={text}>
      <Button href={href} color='blue' size='xs' as={Link}>
        {children}
      </Button>
    </Tooltip>
  )
}

// -----------------------------------
EditPage.layout = (page) => (
  <AuthLayout title={titles.edit} breadcrumb={breadcrumbs.edit}>
    {page}
  </AuthLayout>
)
