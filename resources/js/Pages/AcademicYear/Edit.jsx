import { Link, usePage } from '@inertiajs/react'
import { Badge, Button } from 'flowbite-react'
import { Plus, Undo2 } from 'lucide-react'

import Alert from '@/Components/Alert'
import Form from '@/Components/Form'

import useFormHandler from '@/Hooks/useFormHandler'
import AuthLayout from '@/Layouts/AuthLayout'

import AcademicYearFormData from './Partials/AcademicYearFormData'
import AcademicYearFormFooterButton from './Partials/AcademicYearFormFooterButton'
import AcademicYearModel from './Partials/AcademicYearModel'

import { breadcrumbs, titles } from './data'

// ====================================
export default function PageAcademicYearEdit({ academicYear = {} }) {
  const flash = usePage().props.flash || {}

  const formDataOptions = {
    routeName: 'academic-year.update',
    id: academicYear.id,
  }
  const { handleSubmit, errors, isLoading } = useFormHandler(formDataOptions)

  return (
    <Form onSubmit={handleSubmit}>
      {/* flash message */}
      {flash.message && <Alert color='success'>{flash.message}</Alert>}

      {/* Form header */}
      <Form.Header>
        <Form.HeaderTitle title={titles.edit} />
        <Button.Group>
          <Button
            href={route('academic-year.create')}
            color='blue'
            size='xs'
            as={Link}>
            <Plus className='h-4 w-4' />
          </Button>
          <Button
            title='Voltar'
            color='red'
            size='xs'
            onClick={() => history.back()}>
            <Undo2 className='mx-1 h-4 w-4' />
          </Button>
        </Button.Group>
      </Form.Header>

      {/* Academic year status */}
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

      {/* Academic year form data */}
      <AcademicYearFormData {...{ data: academicYear, errors }} />

      {/* Form footer */}
      <Form.Footer>
        <AcademicYearFormFooterButton disabled={isLoading} />
      </Form.Footer>

      <AcademicYearModel academicYear={academicYear} />
    </Form>
  )
}

// ==============================================
PageAcademicYearEdit.layout = (page) => (
  <AuthLayout title={titles.edit} breadcrumb={breadcrumbs.edit}>
    {page}
  </AuthLayout>
)
