import { usePage } from '@inertiajs/react'
import { Button } from 'flowbite-react'
import { Save, Search } from 'lucide-react'

import Alert from '@/Components/Alert'
import Input from '@/Components/Input'
import Searchbar from '@/Components/Searchbar'
import Title from '@/Components/Title'
import useFormDate from '@/Hooks/useFormDate'
import AuthLayout from '@/Layouts/AuthLayout'

import Form from '@/Components/Form'
import { breadcrumbs, titles } from './data'

// ====================================
export default function GroupStudentAddPage({ group = {}, student = {} }) {
  const { flash = {} } = usePage().props || {}
  const title = `${titles.add}: ${group.name}`

  const formDataOptions = {
    routeName: 'group-students.get-student-by-id',
    method: 'GET',
    id: { group: group.id, student: student.id },
  }

  const { handleSubmit, isLoading } = useFormDate(formDataOptions)

  return (
    <>
      {/* flash message */}
      {flash?.message && (
        <div className='max-w-96'>
          <Alert color={'success'} className='mb-4' time='1'>
            <span className='font-medium'>{flash.message}</span>
          </Alert>
        </div>
      )}

      {/* título */}
      <Title>
        <Title.Left title={title} />
        {/* TODO: implementar PDF */}
      </Title>

      {/* Teacher Searchbar */}
      <Searchbar onSubmit={handleSubmit}>
        <Searchbar.Left>
          <Input.Text
            id='search'
            type='text'
            // defaultValue={param?.search}
            placeholder='Pesquisar pelo id do aluno...'
            autoFocus
          />
          <Button type='submit' color='blue' disabled={isLoading}>
            <Search className='h-5 w-5' />
          </Button>
        </Searchbar.Left>
      </Searchbar>

      <br />

      {student && <GroupStudentForm student={student} group={group} />}
    </>
  )
}

function GroupStudentForm({ student = {}, group = {} }) {
  const { name, id, cpf } = student

  const formDataOptions = {
    routeName: 'group-students.store',
    method: 'POST',
    id: group.id,
  }

  const { handleSubmit, isLoading } = useFormDate(formDataOptions)

  return (
    <Form className='sm:mx-0 md:mx-0' onSubmit={handleSubmit}>
      {/* <Alert color='failure'></Alert> */}
      <Form.Header>Aluno pesquisado:</Form.Header>

      <Input.Text
        id='id'
        type='number'
        label='Id do aluno'
        value={id}
        className='w-16'
        readOnly
      />

      <Input.Text
        id='name'
        type='text'
        label='Nome do aluno'
        value={name}
        readOnly
      />

      <Input.Text
        id='cpf'
        type='text'
        label='CPF do aluno'
        value={cpf}
        readOnly
      />

      <br />

      <Form.Footer>
        <Button color='blue' type='submit' disabled={isLoading} fullSized>
          <Save className='mr-2 h-5 w-5' />
          Adicionar
        </Button>
      </Form.Footer>
    </Form>
  )
}

GroupStudentAddPage.layout = (page) => (
  <AuthLayout title={titles.add} breadcrumb={breadcrumbs.add}>
    {page}
  </AuthLayout>
)
