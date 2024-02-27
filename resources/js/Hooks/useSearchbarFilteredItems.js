import { useMemo, useState } from 'react'

// ====================================
export default function useSearchbarFilteredItems(items) {
  if (!items) return {}

  const [filter, setfilter] = useState('')

  function handleFilterChange(e) {
    setfilter(e.target.value)
  }

  const filteredItems = useMemo(() => {
    return items.filter((item) =>
      item.name.toLowerCase().startsWith(filter.toLowerCase())
    )
  }, [filter, items])

  return {
    filter,
    filteredItems,
    handleFilterChange,
  }
}
