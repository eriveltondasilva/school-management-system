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

// ====================================
export default function TeacherIndexPage({ teachers = [] }) {
  const paramsSearch = route().params.search || ''
  const hasTeachers = teachers.data?.length > 0
  const [search, setSearch] = useState(paramsSearch)

  const formDataOptions = {
    routeName: 'teacher.index',
  }
  const { handleSubmit, isLoading } = useFormDate(formDataOptions)

  console.log(search)
  return (
    <>
      {/* título */}
      <Title>
        <Title.Left title={titles.index} />
        {/* TODO: implementar PDF */}
      </Title>

      {/* Teacher Searchbar */}
      <Searchbar onSubmit={handleSubmit}>
        <Searchbar.Left>
          <Input.Text
            id='search'
            type='search'
            placeholder='Pesquisar professor...'
            defaultValue={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <Button.Group>
            <Button type='submit' color='blue' disabled={isLoading || !search}>
              <Search className='h-5 w-5' />
            </Button>
            <Button
              as={Link}
              href={route('teacher.index')}
              color='blue'
              disabled={isLoading}>
              <Undo2 className='h-5 w-5' />
            </Button>
          </Button.Group>
        </Searchbar.Left>

        <Searchbar.Right>
          <Button
            as={Link}
            href={route('teacher.create')}
            color='blue'
            className='uppercase'>
            <UserRoundPlus className='mr-2 h-5 w-5' />
            cadastrar professor
          </Button>
        </Searchbar.Right>
      </Searchbar>

      {!hasTeachers && <NotFound icon>Nenhum professor encontrado...</NotFound>}

      {/* Teacher Table */}
      {hasTeachers && <TeacherTable teachers={teachers.data} />}
    </>
  )
}

// ------------------------------------
function TeacherTable({ teachers = [] }) {
  return (
    <Table>
      <Table.Header>
        <Table.HeaderCell>Id</Table.HeaderCell>
        <Table.HeaderCell>Nome</Table.HeaderCell>
        <Table.HeaderCell>Email</Table.HeaderCell>
        <Table.HeaderCell className='text-center'>AÇÃO</Table.HeaderCell>
      </Table.Header>

      <Table.Body>
        {teachers.map((teacher) => (
          <Table.Row key={teacher.id}>
            <Table.RowCell>{teacher.id}</Table.RowCell>
            <Table.RowCell className='whitespace-nowrap font-medium text-gray-900 dark:text-white'>
              {teacher.name}
            </Table.RowCell>
            <Table.RowCell>{teacher.email}</Table.RowCell>
            <Table.RowCell className='flex justify-center'>
              <Button
                as={Link}
                href={route('teacher.show', teacher.id)}
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
TeacherIndexPage.layout = (page) => (
  <AuthLayout title={titles.index} breadcrumb={breadcrumbs.index}>
    {page}
  </AuthLayout>
)
