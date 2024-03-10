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

import Pagination from '@/Components/Pagination'
import { breadcrumbs, titles } from './data'

// ============================================================================
export default function StudentIndexPage({ students = [] }) {
  const paramsSearch = route().params.search || ''
  const hasStudents = students.data?.length > 0
  const [search, setSearch] = useState(paramsSearch)

  const handleChange = (e) => {
    setSearch(e.target.value)
  }

  const formDataOptions = {
    routeName: 'student.index',
  }

  const { handleSubmit, isLoading } = useFormDate(formDataOptions)

  console.log(students)

  return (
    <>
      <Title>
        <Title.Left title={titles.index} />
        <Title.Right>
          <Button
            as={Link}
            href={route('student.create')}
            color='blue'
            className=''>
            <UserRoundPlus className='mr-2 h-5 w-5' />
            Cadastrar Aluno
          </Button>
        </Title.Right>
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
            onChange={handleChange}
            autoFocus
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
      </Searchbar>

      {!hasStudents && <StudentNotFound />}

      {/* Student Table */}
      {hasStudents && <StudentTable students={students.data} />}

      {/* Student Pagination */}
      {hasStudents && <StudentPagination students={students} />}
    </>
  )
}

// ------------------------------------
function StudentTable({ students = [] }) {
  return (
    <Table>
      <Table.Header>
        <Table.HeaderCell className='w-0'>Id</Table.HeaderCell>
        <Table.HeaderCell>Nome</Table.HeaderCell>
        <Table.HeaderCell>Email</Table.HeaderCell>
        <Table.HeaderCell></Table.HeaderCell>
      </Table.Header>

      <Table.Body>
        {students.map(({ id, name, email }) => (
          <Table.Row key={id}>
            <Table.RowCell className='font-bold'>{id}</Table.RowCell>
            <Table.RowCell className='whitespace-nowrap font-medium text-gray-900 dark:text-white'>
              {name}
            </Table.RowCell>
            <Table.RowCell>{email}</Table.RowCell>
            <Table.RowCell className='flex justify-center'>
              <Button
                as={Link}
                href={route('student.show', id)}
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

function StudentNotFound() {
  return <NotFound icon>Nenhum aluno encontrado...</NotFound>
}

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

// ------------------------------------
StudentIndexPage.layout = (page) => (
  <AuthLayout title={titles.index} breadcrumb={breadcrumbs.index}>
    {page}
  </AuthLayout>
)
