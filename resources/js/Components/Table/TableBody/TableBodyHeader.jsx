import { Table } from 'flowbite-react'

export default function TableBodyHeader() {
  return (
    <Table.Head>
      <Table.HeadCell>Id</Table.HeadCell>
      <Table.HeadCell>Nome</Table.HeadCell>
      <Table.HeadCell>Email</Table.HeadCell>
      <Table.HeadCell>Gênero</Table.HeadCell>
      <Table.HeadCell className='text-center'>Ações</Table.HeadCell>
    </Table.Head>
  )
}
