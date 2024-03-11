import { Button } from 'flowbite-react'
import { Save, Search } from 'lucide-react'

import Input from '@/Components/Input'
import Searchbar from '@/Components/Searchbar'
import Title from '@/Components/Title'
import useFormDate from '@/Hooks/useFormDate'
import AuthLayout from '@/Layouts/AuthLayout'

import Form from '@/Components/Form'
import { breadcrumbs, titles } from './data'

// ====================================
export default function GroupStudentAddPage({ group = {}, student = {} }) {
  const formDataOptions = {
    routeName: 'group-students.add-students',
    method: 'GET',
    id: group.id,
  }
  const { handleSubmit, isLoading } = useFormDate(formDataOptions)

  console.log(student)
  return (
    <>
      {/* título */}
      <Title>
        <Title.Left title={titles.add} />
        {/* TODO: implementar PDF */}
      </Title>

      {/* Teacher Searchbar */}
      <Searchbar onSubmit={handleSubmit}>
        <Searchbar.Left>
          <Input.Text
            id='search'
            type='search'
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
    routeName: 'group-students.add-students',
    id: group.id,
  }
  const { handleSubmit } = useFormDate(formDataOptions)

  return (
    <Form className='sm:mx-0 md:mx-0' onSubmit={handleSubmit}>
      <Form.Header>Aluno pesquisado:</Form.Header>

      <Input.Text
        id='student_id'
        type='number'
        label='Id'
        value={id}
        className='w-16'
        readOnly
      />

      <Input.Text
        id='student_id'
        type='text'
        label='Nome do aluno'
        value={name}
        readOnly
      />

      <Input.Text
        id='student_id'
        type='text'
        label='CPF do aluno'
        value={cpf}
        readOnly
      />

      <br />

      <Form.Footer>
        <Button color='blue' type='submit' fullSized>
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
