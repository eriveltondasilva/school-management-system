import { Link } from '@inertiajs/react'
import { Button } from 'flowbite-react'
import { Eye, Search, Undo2, UserRoundPlus } from 'lucide-react'
import { useState } from 'react'

import Input from '@/Components/Input'
import NotFound from '@/Components/NotFound'
import Searchbar from '@/Components/Searchbar'
import Table from '@/Components/Table'
import Title from '@/Components/Title'
import useFormDate from '@/Hooks/useFormDate'
import AuthLayout from '@/Layouts/AuthLayout'

import { breadcrumbs, titles } from './data'

// ============================================================================
export default function StudentIndexPage({ students = [] }) {
  const paramsSearch = route().params.search || ''
  const hasStudents = students.data?.length > 0
  const [search, setSearch] = useState(paramsSearch)

  const formDataOptions = {
    routeName: 'student.index',
  }
  const { handleSubmit, isLoading } = useFormDate(formDataOptions)

  return (
    <>
      <Title>
        <Title.Left title={titles.index} />
        {/* TODO: implementar PDF */}
      </Title>

      {/* Student Searchbar */}
      <Searchbar onSubmit={handleSubmit}>
        <Searchbar.Left>
          <Input.Text
            id='search'
            type='search'
            placeholder='Pesquisar aluno...'
            defaultValue={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <Button.Group>
            <Button type='submit' color='blue' disabled={isLoading || !search}>
              <Search className='h-5 w-5' />
            </Button>
            <Button
              as={Link}
              href={route('student.index')}
              color='blue'
              disabled={isLoading}>
              <Undo2 className='h-5 w-5' />
            </Button>
          </Button.Group>
        </Searchbar.Left>

        <Searchbar.Right>
          <Button
            as={Link}
            href={route('student.create')}
            color='blue'
            className='uppercase'>
            <UserRoundPlus className='mr-2 h-5 w-5' />
            cadastrar aluno
          </Button>
        </Searchbar.Right>
      </Searchbar>

      {!hasStudents && <NotFound icon>Nenhum aluno encontrado...</NotFound>}

      {/* Student Table */}
      {hasStudents && <StudentTable students={students.data} />}
    </>
  )
}

// ------------------------------------
function StudentTable({ students = [] }) {
  return (
    <Table>
      <Table.Header>
        <Table.HeaderCell>Id</Table.HeaderCell>
        <Table.HeaderCell>Nome</Table.HeaderCell>
        <Table.HeaderCell>Email</Table.HeaderCell>
        <Table.HeaderCell className='text-center'>AÇÃO</Table.HeaderCell>
      </Table.Header>

      <Table.Body>
        {students.map((student) => (
          <Table.Row key={student.id}>
            <Table.RowCell>{student.id}</Table.RowCell>
            <Table.RowCell className='whitespace-nowrap font-medium text-gray-900 dark:text-white'>
              {student.name}
            </Table.RowCell>
            <Table.RowCell>{student.email}</Table.RowCell>
            <Table.RowCell className='flex justify-center'>
              <Button
                as={Link}
                href={route('student.show', student.id)}
                color='blue'
                size='xs'>
                <Eye className='mr-1 h-4 w-4' />
                visualizar
              </Button>
            </Table.RowCell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  )
}

// ------------------------------------
StudentIndexPage.layout = (page) => (
  <AuthLayout title={titles.index} breadcrumb={breadcrumbs.index}>
    {page}
  </AuthLayout>
)
