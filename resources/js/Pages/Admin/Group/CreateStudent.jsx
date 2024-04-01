import { Link, router, usePage } from '@inertiajs/react'
import { Button, Tooltip } from 'flowbite-react'
import { Eye, Plus, Search, XCircle } from 'lucide-react'
import { useState } from 'react'
import { twJoin } from 'tailwind-merge'

import Alert from '@/Components/Alert'
import Input from '@/Components/Input'
import NotFound from '@/Components/NotFound'
import Pagination from '@/Components/Pagination'
import Searchbar from '@/Components/Searchbar'
import Table from '@/Components/Table'
import Title from '@/Components/Title'

import AuthLayout from '@/Layouts/AuthLayout'

import formatId from '@/Utils/formatId'
import getGenderName from '@/Utils/getGenderName'

import useActionsHandler from '@/Hooks/useActionsHandler'
import { breadcrumbs, titles } from './data'

// ==============================================
export default function PageGroupCreateStudent({ group = {}, students = [] }) {
  const [isLoading, setIsLoading] = useState(false)
  const { message } = usePage().props || {}
  const searchId = route().params.search || ''

  const pageTitle = `${titles.create} - ${group.name}`

  const hasStudents = students.data.length > 0
  const hasPagination = students.total > students.data.length

  const handleSearchStudent = async (e) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      await router.get(
        route('admin.groups.students.index', { group: group.id })
      )
    } catch (error) {
      console.log(error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <>
      {/* Mensagem flash */}
      {message && (
        <Alert color='success' className='mb-4'>
          {message}
        </Alert>
      )}

      {/* Título */}
      <Title>
        <Title.Left title={pageTitle} />
      </Title>

      {/* Barra de pesquisa */}
      <Searchbar onSubmit={handleSearchStudent}>
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
      {!hasStudents && <StudentNotFound />}

      {/* Formulário do aluno */}
      {hasStudents && <StudentTable {...{ group, students: students.data }} />}

      {/* Pagination */}
      {hasPagination && <StudentPagination {...{ students }} />}
    </>
  )
}

// ----------------------------------------------
function StudentTable({ group = {}, students = [] }) {
  const actionOptions = {
    route: 'admin.groups.students.store',
    message: 'Tem certeza que deseja adicionar o aluno(a)?',
  }
  const { isLoading, handleStoreItem } = useActionsHandler(actionOptions)

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
        {students.map((student, index) => (
          <Table.Row key={student.id}>
            <Table.RowCell className='font-bold'>{++index}</Table.RowCell>
            <Table.RowCell
              className={twJoin(
                'whitespace-nowrap font-medium',
                'text-gray-900 dark:text-white'
              )}>
              {student.name}
            </Table.RowCell>
            <Table.RowCell>{formatId(student.id)}</Table.RowCell>
            <Table.RowCell>{getGenderName(student.gender)}</Table.RowCell>
            <Table.RowCell className='flex justify-end'>
              <Button.Group>
                <Button
                  as={Link}
                  href={route('admin.students.show', { student: student.id })}
                  color='green'
                  size='xs'>
                  <Tooltip content='Visualizar Aluno'>
                    <Eye className='h-4 w-4' />
                  </Tooltip>
                </Button>
                <Button
                  as='button'
                  color='blue'
                  onClick={() =>
                    handleStoreItem({ group: group.id, student: student.id })
                  }
                  disabled={isLoading}
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
function StudentNotFound() {
  return (
    <NotFound>
      <XCircle />
      Nenhum aluno disponível para adicionar à turma...
    </NotFound>
  )
}

// ----------------------------------------------
function StudentPagination({ students = {} }) {
  const { total, from, to, next_page_url, prev_page_url } = students

  return (
    <Pagination>
      <Pagination.Left to={to} from={from} total={total} />
      <Pagination.Right>
        <Pagination.Previous href={prev_page_url} />
        <Pagination.Next href={next_page_url} />
      </Pagination.Right>
    </Pagination>
  )
}

// ==============================================
PageGroupCreateStudent.layout = (page) => (
  <AuthLayout
    title={titles.createStudent}
    breadcrumb={breadcrumbs.createStudent}
    children={page}
  />
)
