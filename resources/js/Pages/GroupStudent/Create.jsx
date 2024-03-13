import { usePage } from '@inertiajs/react'
import { Button } from 'flowbite-react'
import { Save, Search, XCircle } from 'lucide-react'

import Alert from '@/Components/Alert'
import Form from '@/Components/Form'
import Input from '@/Components/Input'
import NotFound from '@/Components/NotFound'
import Searchbar from '@/Components/Searchbar'
import Title from '@/Components/Title'

import useFormDate from '@/Hooks/useFormDate'
import AuthLayout from '@/Layouts/AuthLayout'

import GroupStudentFormData from './Partials/GroupStudentFormData'
import { breadcrumbs, titles } from './data'

// ==============================================
export default function GroupStudentCreatePage({ group = {}, student = {} }) {
  const flash = usePage().props.flash || {}
  const searchId = route().params.search || ''
  const title = `${titles.create} - ${group.name}`

  const formDataOptions = {
    routeName: 'group-students.create',
    method: 'GET',
    id: group.id,
  }
  const { handleSubmit, isLoading } = useFormDate(formDataOptions)

  return (
    <>
      {/* Mensagem flash */}
      {flash.message && (
        <div className='max-w-xl'>
          <Alert color='success' className='mb-4'>
            {flash.message}
          </Alert>
        </div>
      )}

      {/* Título */}
      <Title>
        <Title.Left title={title} />
      </Title>

      {/* Barra de pesquisa */}
      <Searchbar onSubmit={handleSubmit}>
        <Searchbar.Left>
          <Input.Text
            id='search'
            type='text'
            className='mb-0'
            defaultValue={searchId}
            placeholder='Pesquisar pelo id do aluno...'
            autoFocus
          />
          <Button type='submit' color='blue' disabled={isLoading}>
            <Search className='h-5 w-5' />
          </Button>
        </Searchbar.Left>
      </Searchbar>

      {/* Verificar se o aluno não foi encontrado */}
      {!student && <GroupStudentNotFound />}

      {/* Formulário do aluno */}
      {student && <GroupStudentForm {...{ group, student }} />}
    </>
  )
}

// ----------------------------------------------
function GroupStudentForm({ student = {}, group = {} }) {
  const formDataOptions = {
    routeName: 'group-students.store',
    id: group.id,
  }
  const { handleSubmit, isLoading } = useFormDate(formDataOptions)

  return (
    <Form className='sm:mx-0 md:mx-0' onSubmit={handleSubmit}>
      <Form.Header>Aluno pesquisado:</Form.Header>

      <GroupStudentFormData data={student} />

      <Form.Footer>
        <Button color='blue' type='submit' disabled={isLoading} fullSized>
          <Save className='mr-2 h-5 w-5' />
          Adicionar
        </Button>
      </Form.Footer>
    </Form>
  )
}

// ----------------------------------------------
function GroupStudentNotFound() {
  const searchId = route().params.search || ''
  const notFoundText = 'Nenhum aluno encontrado...'
  const notFoundStudent = `Aluno com id ${searchId} não foi encontrado...`

  const message = searchId ? notFoundStudent : notFoundText

  return (
    <NotFound>
      <XCircle />
      {message}
    </NotFound>
  )
}

// ==============================================
GroupStudentCreatePage.layout = (page) => (
  <AuthLayout title={titles.create} breadcrumb={breadcrumbs.create}>
    {page}
  </AuthLayout>
)
