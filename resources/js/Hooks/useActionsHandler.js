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
      onBefore: () => confirm(message),
      onFinish: () => setIsLoading(false),
    })
  }

  //
  const handleDeleteItem = async (params = {}) => {
    setIsLoading(true)

    return await router.delete(route(routeName, params), {
      onBefore: () => confirm(message),
      onFinish: () => setIsLoading(false),
    })
  }

  return {
    isLoading,
    handleStoreItem,
    handleDeleteItem,
  }
}
