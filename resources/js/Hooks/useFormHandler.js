import { router, usePage } from '@inertiajs/react'
import { useState } from 'react'

// ===============================================
export default function useFormHandler({
  route: routeName = '',
  method = '',
  params = {},
  options = {},
}) {
  const [isLoading, setIsLoading] = useState(false)
  const { errors } = usePage().props || {}

  const eventOptions = {
    onFinish: () => setIsLoading(false),
    ...options,
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      const formData = new FormData(e.target)
      const requestData = Object.fromEntries(formData.entries())

      const isIndex = route().current('*.index')
      const isCreate = route().current('*.create')
      const isEdit = route().current('*.edit')
      const isDestroy = route().current('*.destroy')

      if (method === 'GET' || isIndex) {
        return await router.get(
          route(routeName, params),
          requestData,
          eventOptions
        )
      }

      if (method === 'POST' || isCreate) {
        e.target.reset()
        return await router.post(
          route(routeName, params),
          requestData,
          eventOptions
        )
      }

      if (method === 'PUT' || isEdit) {
        return await router.put(
          route(routeName, params),
          requestData,
          eventOptions
        )
      }

      if (method === 'DELETE' || isDestroy) {
        return await router.delete(
          route(routeName, params),
          requestData,
          eventOptions
        )
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
