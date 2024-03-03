import { router, usePage } from '@inertiajs/react'
import { useState } from 'react'

// ====================================
export default function useFormDate(routeName = '', item = {}) {
  const [isLoading, setIsLoading] = useState(false)
  const { errors } = usePage().props || {}

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      const formData = new FormData(e.target)
      const requestData = Object.fromEntries(formData.entries())

      if (!item.id) {
        await router.post(route(routeName), requestData)
        e.target.reset()
        return
      }

      await router.put(route(routeName, item.id), requestData)
    } catch (error) {
      console.error('Erro ao enviar formulário:', error)
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
