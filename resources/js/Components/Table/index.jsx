import TableBody from './TableBody'
import TableHeader from './TableHeader'

// ====================================
export default function Table({ items }) {
  return (
    <>
      <TableHeader />
      <TableBody items={items} />
    </>
  )
}
