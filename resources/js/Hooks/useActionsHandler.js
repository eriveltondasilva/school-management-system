import { router } from '@inertiajs/react'
import { useState } from 'react'

// ===============================================
export default function useActionsHandler({
  route: routeName = '',
  message = '',
}) {
  const [isLoading, setIsLoading] = useState(false)

  //
  const handleStoreItem = async (params = {}) => {
    setIsLoading(true)

    return await router.post(route(routeName, params), {
      onFinish: () => setIsLoading(false),
      onBefore: () => {
        if (!confirm(message)) {
          setIsLoading(false)
          return false
        }
      },
    })
  }

  //
  const handleDeleteItem = async (params = {}) => {
    setIsLoading(true)

    return await router.delete(route(routeName, params), {
      onFinish: () => setIsLoading(false),
      onBefore: () => {
        if (!confirm(message)) {
          setIsLoading(false)
          return false
        }
      },
    })
  }

  return {
    isLoading,
    handleStoreItem,
    handleDeleteItem,
  }
}
