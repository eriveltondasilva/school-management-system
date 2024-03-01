import { Button, Label, TextInput } from 'flowbite-react'
import { Save } from 'lucide-react'

import Form from '@/Components/Form'
import useFormDate from '@/Hooks/useFormDate'
import AuthLayout from '@/Layouts/AuthLayout'

import { breadcrumbs, titles } from './data'

export default function CreatePage({ academicYear }) {
  const { handleSubmit, isLoading, errors } = useFormDate('academicYear')
  return (
    <>
      {/*  CRIAR ANO LETIVO */}
      <section>
        {/* <TitleAcademicYearPage>Criar Ano Letivo</TitleAcademicYearPage> */}

        <Form onSubmit={handleSubmit}>
          <InputField
            id='year'
            name='year'
            type='number'
            label='Ano Letivo'
            placeholder='insira o ano letivo...'
            defaultValue={new Date().getFullYear()}
            pattern='[0-9]{4}'
            maxLength='4'
            minLength='4'
          />
          {errors.year && <p className='text-sm text-red-500'>{errors.year}</p>}

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

function InputField({ id = '', label = '', type = 'text', ...props }) {
  return (
    <>
      <div className='mb-2 block'>
        <Label htmlFor={id} value={label} />
      </div>
      <TextInput id={id} name={id} type={type} {...props} />
    </>
  )
}

// -----------------------------------
CreatePage.layout = (page) => (
  <AuthLayout title={titles.create} breadcrumb={breadcrumbs.create}>
    {page}
  </AuthLayout>
)
