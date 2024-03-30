import { router, usePage } from '@inertiajs/react'
import { useState } from 'react'

// ===============================================
export default function useFormHandler({
  route: routeName = '',
  method = '',
  params = {},
}) {
  const [isLoading, setIsLoading] = useState(false)
  const { errors } = usePage().props || {}

  const hasParams = Object.keys(params).length > 0
  const baseUrl = hasParams ? `${routeName}, ${params}` : routeName

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      const formData = new FormData(e.target)
      const requestData = Object.fromEntries(formData.entries())

      if (method === 'GET' || route().current('*.index')) {
        return await router.get(route(baseUrl), requestData, {
          onFinish: () => setIsLoading(false),
        })
      }

      if (method === 'POST' || route().current('*.create')) {
        e.target.reset()
        return await router.post(route(baseUrl), requestData, {
          onFinish: () => setIsLoading(false),
        })
      }

      if (method === 'PUT' || route().current('*.edit')) {
        return await router.put(route(baseUrl), requestData, {
          onFinish: () => setIsLoading(false),
        })
      }

      if (method === 'DELETE' || route().current('*.destroy')) {
        return await router.delete(route(baseUrl), requestData, {
          onFinish: () => setIsLoading(false),
        })
      }

      throw new Error('Método de envio inválido')
    } catch (error) {
      console.error('Erro ao enviar formulário:', error)
    }
  }

  return {
    handleSubmit,
    isLoading,
    errors,
  }
}
