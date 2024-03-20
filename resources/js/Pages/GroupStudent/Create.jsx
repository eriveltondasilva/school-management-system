import { Link, router, usePage } from '@inertiajs/react'
import { Button, Tooltip } from 'flowbite-react'
import { Eye, Plus, Search, XCircle } from 'lucide-react'
import { twJoin } from 'tailwind-merge'

import Alert from '@/Components/Alert'
import Input from '@/Components/Input'
import NotFound from '@/Components/NotFound'
import Searchbar from '@/Components/Searchbar'
import Table from '@/Components/Table'
import Title from '@/Components/Title'

import useFormHandler from '@/Hooks/useFormHandler'
import AuthLayout from '@/Layouts/AuthLayout'
import formatId from '@/Utils/formatId'
import getGenderName from '@/Utils/getGenderName'

import { breadcrumbs, titles } from './data'

// ==============================================
export default function PageGroupStudentCreate({ group = {}, students = [] }) {
  const flash = usePage().props.flash || {}
  const searchId = route().params.search || ''

  const pageTitle = `${titles.create} - ${group.name}`
  const hasStudents = students.length > 0

  const formDataOptions = {
    routeName: 'group-students.create',
    method: 'GET',
    id: group.id,
  }
  const { handleSubmit, isLoading } = useFormHandler(formDataOptions)

  return (
    <>
      {/* Mensagem flash */}
      {flash.message && (
        <Alert color='success' className='mb-4'>
          {flash.message}
        </Alert>
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
            type='search'
            className='mb-0 sm:w-96'
            defaultValue={searchId}
            placeholder='Pesquisar aluno...'
            autoFocus
          />
          <Button type='submit' color='blue' disabled={isLoading}>
            <Search className='h-5 w-5' />
          </Button>
        </Searchbar.Left>
      </Searchbar>

      {/* Verificar se o aluno não foi encontrado */}
      {!hasStudents && <GroupStudentNotFound />}

      {/* Formulário do aluno */}
      {hasStudents && <GroupStudentTable {...{ group, students }} />}
    </>
  )
}

// ----------------------------------------------
function GroupStudentTable({ group = {}, students = [] }) {
  const handleAddStudent = (id, name) => {
    const message = `Tem certeza que deseja adicionar aluno(a)\n${name}, matrícula ${formatId(id)},\nà turma do ${group.name}?`

    if (!confirm(message)) return

    router.post(
      route('group-students.add-student', { group: group.id, student: id })
    )
  }

  return (
    <Table>
      {/* Table Header */}
      <Table.Header>
        <Table.HeaderCell className='w-0'></Table.HeaderCell>
        <Table.HeaderCell>Nome</Table.HeaderCell>
        <Table.HeaderCell>Matrícula</Table.HeaderCell>
        <Table.HeaderCell>Gênero</Table.HeaderCell>
        <Table.HeaderCell></Table.HeaderCell>
      </Table.Header>

      {/* Table Body */}
      <Table.Body>
        {students.map(({ id, name, gender }, index) => (
          <Table.Row key={id}>
            <Table.RowCell className='font-bold'>{++index}</Table.RowCell>
            <Table.RowCell
              className={twJoin(
                'whitespace-nowrap font-medium',
                'text-gray-900 dark:text-white'
              )}>
              {name}
            </Table.RowCell>
            <Table.RowCell>{formatId(id)}</Table.RowCell>
            <Table.RowCell>{getGenderName(gender)}</Table.RowCell>
            <Table.RowCell className='flex justify-end'>
              <Button.Group>
                <Button
                  as={Link}
                  href={route('student.show', id)}
                  color='green'
                  size='xs'>
                  <Tooltip content='Visualizar Aluno'>
                    <Eye className='h-4 w-4' />
                  </Tooltip>
                </Button>
                <Button
                  as='button'
                  color='blue'
                  onClick={() => handleAddStudent(id, name, gender)}
                  size='xs'>
                  <Tooltip content='Adicionar Aluno'>
                    <Plus className='mx-1 h-4 w-4' />
                  </Tooltip>
                </Button>
              </Button.Group>
            </Table.RowCell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  )
}

// ----------------------------------------------
function GroupStudentNotFound() {
  return (
    <NotFound>
      <XCircle />
      Nenhum aluno disponível para adicionar à turma...
    </NotFound>
  )
}

// ==============================================
PageGroupStudentCreate.layout = (page) => (
  <AuthLayout title={titles.create} breadcrumb={breadcrumbs.create}>
    {page}
  </AuthLayout>
)
