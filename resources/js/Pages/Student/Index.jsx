// import { useMemo, useState } from 'react'

import { Link } from '@inertiajs/react'
import { Button } from 'flowbite-react'

import Table from '@/Components/Table'
import AuthLayout from '@/Layouts/AuthenticatedLayout'

const pageTitle = 'Listar alunos'
const breadcrumbItems = [{ title: pageTitle }]

// ====================================
export default function StudentIndex({ students }) {
  // const [filter, setfilter] = useState('')

  // // ------------------------------------
  // function handleFilterChange(e) {
  //   setfilter(e.target.value)
  // }

  // const itemsFiltered = useMemo(() => {
  //   const lowerCaseFilter = filter.toLowerCase()
  //   return items.filter((item) =>
  //     item.user.name.toLowerCase().includes(lowerCaseFilter)
  //   )
  // }, [filter, items])
  return (
    <Table>
      <Table.Header>
        <Table.Header.Left />
        <Table.Header.Right>
          <Button as={Link} href={route('student.create')} color='blue'>
            Cadastrar aluno
          </Button>
        </Table.Header.Right>
      </Table.Header>
    </Table>
  )
}

// ------------------------------------
StudentIndex.layout = (page) => (
  <AuthLayout title={pageTitle} breadcrumbItems={breadcrumbItems}>
    {page}
  </AuthLayout>
)
