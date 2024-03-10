import { Link, usePage } from '@inertiajs/react'
import { Badge, Button, Tooltip } from 'flowbite-react'
import { Plus } from 'lucide-react'

import Alert from '@/Components/Alert'
import Form from '@/Components/Form'
import useFormDate from '@/Hooks/useFormDate'
import AuthLayout from '@/Layouts/AuthLayout'

import AcademicYearFormData from './Partials/AcademicYearFormData'
import AcademicYearFormFooterButton from './Partials/AcademicYearFormFooterButton'
import AcademicYearModel from './Partials/AcademicYearModel'

import { breadcrumbs, titles } from './data'

// ====================================
export default function AcademicYearEditPage({ academicYear = {} }) {
  const { flash } = usePage().props || {}
  const formDataOptions = {
    routeName: 'academic-year.update',
    id: academicYear.id,
  }
  const { handleSubmit, errors, isLoading } = useFormDate(formDataOptions)

  console.log(academicYear)

  return (
    <Form onSubmit={handleSubmit}>
      {/* flash message */}
      {flash?.message && (
        <Alert color='success'>
          <span className='font-medium'>{flash.message}</span>
        </Alert>
      )}

      {/*  */}
      <Form.Header>
        <span className='flex gap-4'>
          {titles.edit}
          <EditPageButton
            href={route('academic-year.create')}
            text='Cadastrar novo ano letivo'>
            <Plus className='h-4 w-4' />
          </EditPageButton>
        </span>
      </Form.Header>

      {/*  */}
      <div className='text-sm font-medium text-gray-900 dark:text-white'>
        Status do Ano Letivo
      </div>
      <div className='flex'>
        <Badge
          color={academicYear.is_active ? 'success' : 'gray'}
          className='text-lg'
          size='sm'>
          {academicYear.is_active ? 'Ativo' : 'Inativo'}
        </Badge>
      </div>

      {/*  */}
      <AcademicYearFormData data={academicYear} errors={errors} />

      {/*  */}
      <Form.Footer>
        <AcademicYearFormFooterButton disabled={isLoading} />
      </Form.Footer>

      <AcademicYearModel academicYear={academicYear} />
    </Form>
  )
}

function EditPageButton({ text = '', href = '', children }) {
  return (
    <Tooltip content={text}>
      <Button href={href} color='blue' size='xs' as={Link}>
        {children}
      </Button>
    </Tooltip>
  )
}

// -----------------------------------
AcademicYearEditPage.layout = (page) => (
  <AuthLayout title={titles.edit} breadcrumb={breadcrumbs.edit}>
    {page}
  </AuthLayout>
)
