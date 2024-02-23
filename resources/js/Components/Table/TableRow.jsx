import { Table } from 'flowbite-react'
import { memo } from 'react'

// ====================================
export default memo(function TableRow({ item, children }) {
  if (!item) return null

  const { id, name, email, gender } = item.user
  const genderLabel = gender === 'M' ? 'Masculino' : 'Feminino'

  return (
    <Table.Row className='bg-white dark:border-gray-700 dark:bg-gray-800'>
      <Table.Cell className='whitespace-nowrap font-medium text-gray-900/50 dark:text-white/50'>
        {id}
      </Table.Cell>
      <Table.Cell className='whitespace-nowrap font-medium text-gray-900 dark:text-white'>
        {name}
      </Table.Cell>
      <Table.Cell>{email}</Table.Cell>
      <Table.Cell>{genderLabel}</Table.Cell>
      <Table.Cell className='flex justify-center space-x-2'>
        {/* Botão de visualizar */}
        {children}
      </Table.Cell>
    </Table.Row>
  )
})
