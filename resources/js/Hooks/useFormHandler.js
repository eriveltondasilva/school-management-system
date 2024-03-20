import { router, usePage } from '@inertiajs/react'
import { useState } from 'react'

// ===============================================
export default function useFormHandler({
  routeName = '',
  method = '',
  id = '',
}) {
  const [isLoading, setIsLoading] = useState(false)
  const { errors } = usePage().props || {}

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      const formData = new FormData(e.target)
      const requestData = Object.fromEntries(formData.entries())

      if (method === 'GET' || route().current('*.index')) {
        await router.get(route(routeName, id), requestData)
        return
      }

      if (method === 'POST' || route().current('*.create')) {
        await router.post(route(routeName, id), requestData)
        e.target.reset()
        return
      }

      if (method === 'PUT' || route().current('*.edit')) {
        await router.put(route(routeName, id), requestData)
        return
      }

      if (method === 'DELETE' || route().current('*.destroy')) {
        await router.delete(route(routeName, id))
        return
      }

      throw new Error('Método de envio inválido')
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
