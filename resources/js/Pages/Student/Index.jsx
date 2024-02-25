import { Suspense } from 'react'

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
          <Searchbar.RightButton href={route('student.create')}>
            cadastrar aluno
          </Searchbar.RightButton>
        </Searchbar.Right>
      </Searchbar>

      {/* Student Table */}
      <Suspense fallback={<div>Loading...</div>}>
        <StudentTable items={filteredItems} filter={filter} />
      </Suspense>
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
            <Table.RowButtonShow routeName='student.show' item={item} />
            {/* Botão de editar */}
            <Table.RowButtonEdit routeName='student.edit' item={item} />
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
