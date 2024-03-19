import { usePage } from '@inertiajs/react'
import { Button } from 'flowbite-react'
import { Save, Search, UserRoundSearch, XCircle } from 'lucide-react'

import Alert from '@/Components/Alert'
import Form from '@/Components/Form'
import Input from '@/Components/Input'
import NotFound from '@/Components/NotFound'
import Searchbar from '@/Components/Searchbar'
import Title from '@/Components/Title'

import useFormDate from '@/Hooks/useFormDate'
import AuthLayout from '@/Layouts/AuthLayout'

import GroupTeacherFormData from './Partials/GroupTeacherFormData'

import { breadcrumbs, titles } from './data'

// ==============================================
export default function PageGroupTeacherCreate({ group = {}, teacher = {} }) {
  const flash = usePage().props.flash || {}
  const searchId = route().params.search || ''

  const pageTitle = `${titles.create} - ${group.name}`

  const formDataOptions = {
    routeName: 'group-teachers.create',
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
        <Title.Left title={pageTitle} />
      </Title>

      {/* Barra de pesquisa */}
      <Searchbar onSubmit={handleSubmit}>
        <Searchbar.Left>
          <Input.Text
            id='search'
            type='text'
            className='mb-0'
            defaultValue={searchId}
            placeholder='Pesquisar pelo id do professor...'
            autoFocus
          />
          <Button type='submit' color='blue' disabled={isLoading}>
            <Search className='h-5 w-5' />
          </Button>
        </Searchbar.Left>
      </Searchbar>

      {/* Verificar se o aluno não foi encontrado */}
      {!teacher && <GroupTeacherNotFound />}

      {/* Formulário do aluno */}
      {teacher && <GroupTeacherForm {...{ group, teacher }} />}
    </>
  )
}

// ----------------------------------------------
function GroupTeacherForm({ group = {}, teacher = {} }) {
  const formDataOptions = {
    routeName: 'group-teachers.store',
    id: group.id,
  }
  const { handleSubmit, isLoading } = useFormDate(formDataOptions)

  return (
    <Form className='mt-6 sm:mx-0 md:mx-0' onSubmit={handleSubmit}>
      <header className='flex items-center'>
        <UserRoundSearch className='mr-2 h-8 w-8' />
        <h3 className='text-xl font-semibold'>Professor pesquisado:</h3>
      </header>

      <GroupTeacherFormData data={teacher} />

      <Form.Footer>
        <Button
          className='uppercase'
          color='blue'
          type='submit'
          disabled={isLoading}
          fullSized>
          <Save className='mr-2 h-5 w-5' />
          Adicionar professor à turma
        </Button>
      </Form.Footer>
    </Form>
  )
}

// ----------------------------------------------
function GroupTeacherNotFound() {
  const searchId = route().params.search || ''

  const notFoundText = 'Nenhum professor encontrado...'
  const notFoundTeacher = `Professor com id ${searchId} não foi encontrado...`

  const message = searchId ? notFoundTeacher : notFoundText

  return (
    <NotFound>
      <XCircle />
      {message}
    </NotFound>
  )
}

// ==============================================
PageGroupTeacherCreate.layout = (page) => (
  <AuthLayout title={titles.create} breadcrumb={breadcrumbs.create}>
    {page}
  </AuthLayout>
)
