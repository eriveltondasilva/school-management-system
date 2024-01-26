import { useMemo, useState } from 'react'

import TableBody from './TableBody'
import TableHeader from './TableHeader'

// ====================================
export default function Table({ items }) {
  const [filter, setfilter] = useState('')

  // ------------------------------------
  function handleFilterChange(e) {
    setfilter(e.target.value)
  }

  const itemsFiltered = useMemo(() => {
    const lowerCaseFilter = filter.toLowerCase()
    return items.filter((item) => item.user.name.toLowerCase().includes(lowerCaseFilter))
  }, [filter, items])

  console.log(items)

  return (
    <section>
      <TableHeader searchValue={filter} onSearchChange={handleFilterChange} />
      <TableBody items={itemsFiltered} />
    </section>
  )
}
