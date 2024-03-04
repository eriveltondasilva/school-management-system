import { Link, usePage } from '@inertiajs/react'
import { Alert, Badge, Button, Tooltip } from 'flowbite-react'
import { Check, Plus } from 'lucide-react'
import { useState } from 'react'

import Form from '@/Components/Form'
import useFormDate from '@/Hooks/useFormDate'
import AuthLayout from '@/Layouts/AuthLayout'

import AcademicYearFormData from './Partials/AcademicYearFormData'
import AcademicYearFormFooterButton from './Partials/AcademicYearFormFooterButton'
import AcademicYearModel from './Partials/AcademicYearModel'

import { breadcrumbs, titles } from './data'

// ====================================
export default function AcademicYearEditPage({ academicYear }) {
  const { handleSubmit, errors, isLoading } = useFormDate(
    'academic-year.update',
    academicYear
  )
  const { flash } = usePage().props || {}

  return (
    <Form onSubmit={handleSubmit}>
      {/* flash message */}
      {flash?.message && <ShowPageAlert>{flash.message}</ShowPageAlert>}

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
          color={academicYear.is_current ? 'success' : 'gray'}
          className='text-lg'
          size='sm'>
          {academicYear.is_current ? 'Ativo' : 'Inativo'}
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
AcademicYearEditPage.layout = (page) => (
  <AuthLayout title={titles.edit} breadcrumb={breadcrumbs.edit}>
    {page}
  </AuthLayout>
)
