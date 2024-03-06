import { Table } from 'flowbite-react'

// ====================================
export function TableRoot({ children }) {
  return (
    <div className='overflow-x-auto'>
      <Table hoverable>{children}</Table>
    </div>
  )
}

// ====================================
export function TableHeader({ children }) {
  return <Table.Head>{children}</Table.Head>
}

// ====================================
export function TableHeaderCell({ children, ...props }) {
  return <Table.HeadCell {...props}>{children}</Table.HeadCell>
}

// ====================================
export function TableBody({ children }) {
  return <Table.Body className='divide-y'>{children}</Table.Body>
}

// ====================================
export function TableRow({ children }) {
  return (
    <Table.Row className='bg-white dark:border-gray-700 dark:bg-gray-800'>
      {children}
    </Table.Row>
  )
}

export function TableRowCell({ children, ...props }) {
  return <Table.Cell {...props}>{children}</Table.Cell>
}
// export const TableRow = memo(function TableRow({ teacher = {}, children }) {
//   const { id, name, email } = teacher

//   return (
//     <Table.Row className='bg-white dark:border-gray-700 dark:bg-gray-800'>
//       <Table.Cell className='whitespace-nowrap font-medium text-gray-900/50 dark:text-white/50'>
//         {id}
//       </Table.Cell>
//       <Table.Cell className='whitespace-nowrap font-medium text-gray-900 dark:text-white'>
//         {name}
//       </Table.Cell>
//       <Table.Cell>{email}</Table.Cell>
//       <Table.Cell className='flex justify-center space-x-2'>
//         {children}
//       </Table.Cell>
//     </Table.Row>
//   )
// })
