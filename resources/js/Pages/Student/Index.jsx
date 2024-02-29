import { Link } from '@inertiajs/react'
import { Button, Tooltip } from 'flowbite-react'
import { Eye, Pencil, UserRoundPlus } from 'lucide-react'

import Searchbar from '@/Components/Searchbar'
import Table from '@/Components/Table'
import AuthLayout from '@/Layouts/AuthLayout'

import { breadcrumbs, titles } from './data'

import useSearchbarFilteredItems from '@/Hooks/useSearchbarFilteredItems'

// ============================================================================
export default function StudentIndexPage({ students }) {
  const { filter, filteredItems, handleFilterChange } =
    useSearchbarFilteredItems(students)

  return (
    <>
      {/* Student Searchbar */}
      <Searchbar>
        <Searchbar.Left value={filter} onChange={handleFilterChange} />
        <Searchbar.Right>
          <Button as={Link} href={route('student.create')} color='blue'>
            <UserRoundPlus className='mr-2 h-5 w-5' />
            cadastrar aluno
          </Button>
        </Searchbar.Right>
      </Searchbar>

      {/* Student Table */}
      <StudentTable items={filteredItems} filter={filter} />
    </>
  )
}

// ------------------------------------
function StudentTable({ items }) {
  if (!items?.length) {
    return <Table.NotFoundItems text='Nenhum aluno encontrado...' />
  }

  return (
    <Table>
      <Table.Header />
      <Table.Body>
        {items.map((item) => (
          <Table.Row key={item.id} item={item}>
            {/* Botão de visualizar */}
            <ButtonIndex
              text='visualizar aluno'
              href={route('student.show', item)}>
              <Eye className='h-4 w-4' />
            </ButtonIndex>

            {/* Botão de editar */}
            <ButtonIndex text='editar aluno' href={route('student.edit', item)}>
              <Pencil className='h-4 w-4' />
            </ButtonIndex>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  )
}

function ButtonIndex({ text, href, children }) {
  return (
    <Tooltip content={text}>
      <Button href={href} color='blue' size='xs' as={Link}>
        {children}
      </Button>
    </Tooltip>
  )
}

// ------------------------------------
StudentIndexPage.layout = (page) => (
  <AuthLayout title={titles.index} breadcrumb={breadcrumbs.index}>
    {page}
  </AuthLayout>
)
