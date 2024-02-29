import { router, usePage } from '@inertiajs/react'
import { useState } from 'react'

// ====================================
export default function useFormDate(routeName, item = {}) {
  const postRoute = `${routeName}.store`
  const putRoute = `${routeName}.update`

  const [isLoading, setIsLoading] = useState(false)

  const { errors } = usePage().props || {}

  const handleSubmit = (e) => {
    e.preventDefault()

    setIsLoading(true)

    try {
      const formData = new FormData(e.target)
      if (item.id) {
        router.put(
          route(putRoute, item.id),
          Object.fromEntries(formData.entries())
        )
      } else {
        router.post(route(postRoute), Object.fromEntries(formData.entries()))
        e.target.reset()
      }
    } catch (error) {
    } finally {
      setIsLoading(false)
    }
  }

  return {
    handleSubmit,
    isLoading,
    errors,
  }
}
