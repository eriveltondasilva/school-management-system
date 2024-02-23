import { Link } from '@inertiajs/react'
import { Button } from 'flowbite-react'

import Searchbar from '@/Components/Searchbar'
import Table from '@/Components/Table'
import AuthLayout from '@/Layouts/AuthenticatedLayout'
import { breadcrumbs, titles } from './pagesInfo'

import useSearchbarFilteredItems from '@/Hooks/useSearchbarFilteredItems'

// ============================================================================
export default function StudentIndex({ students }) {
  const { filter, filteredItems, handleFilterChange } =
    useSearchbarFilteredItems(students)

  return (
    <>
      {/* Student Searchbar */}
      <Searchbar>
        <Searchbar.Left value={filter} onChange={handleFilterChange} />
        <Searchbar.Right>
          <Button as={Link} href={route('student.create')} color='blue'>
            Cadastrar aluno
          </Button>
        </Searchbar.Right>
      </Searchbar>

      {/* Student Table */}
      <StudentTable items={filteredItems} />
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
          <Table.Row key={item.id} item={item} />
        ))}
      </Table.Body>
    </Table>
  )
}

// ------------------------------------
StudentIndex.layout = (page) => (
  <AuthLayout title={titles.index} breadcrumb={breadcrumbs.index}>
    {page}
  </AuthLayout>
)
