import { useMemo, useState } from 'react'

// ====================================
export default function useSearchbarFilteredItems(items = []) {
  const [filter, setFilter] = useState('')

  function handleFilterChange(e) {
    setFilter(e.target.value)
  }

  const filteredItems = useMemo(() => {
    return items?.filter((item) =>
      item.name.toLowerCase().startsWith(filter.toLowerCase())
    )
  }, [filter, items])

  return {
    filter,
    filteredItems,
    handleFilterChange,
  }
}
