import { Link } from '@inertiajs/react'
import { Button } from 'flowbite-react'
import { useMemo, useState } from 'react'

import Searchbar from '@/Components/Searchbar'
// import Table from '@/Components/Table'
import AuthLayout from '@/Layouts/AuthenticatedLayout'
import { breadcrumbs, titles } from './pagesInfo'

// ====================================
export default function StudentIndex({ students }) {
  const [filter, setfilter] = useState('')

  // ------------------------------------
  function handleFilterChange(e) {
    setfilter(e.target.value)
  }

  const filteredStudents = useMemo(() => {
    return students.filter((item) =>
      item.user.name.toLowerCase().includes(filter.toLowerCase())
    )
  }, [filter, students])
  return (
    <>
      {/* Searchbar */}
      <Searchbar>
        <Searchbar.Left value={filter} onChange={handleFilterChange} />
        <Searchbar.Right>
          <Button as={Link} href={route('student.create')} color='blue'>
            Cadastrar aluno
          </Button>
        </Searchbar.Right>
      </Searchbar>
      {/* Tabela */}
      <div className=''>
        {/* <Table>
          <Table.Header />
          <Table.Body>
            {filteredStudents?.map((item) => (
              <Table.Row key={item.id} item={item} />
            ))}
          </Table.Body>
        </Table> */}
      </div>
    </>
  )
}

// ------------------------------------
StudentIndex.layout = (page) => (
  <AuthLayout title={titles.index} breadcrumb={breadcrumbs.index}>
    {page}
  </AuthLayout>
)
