import { router, usePage } from '@inertiajs/react'
import { useState } from 'react'

// ====================================
export default function useFormDate({ routeName = '', id = '', method = '' }) {
  const [isLoading, setIsLoading] = useState(false)
  const { errors } = usePage().props || {}

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      const formData = new FormData(e.target)
      const requestData = Object.fromEntries(formData.entries())

      if (method === 'get' || route().current('*.index')) {
        await router.get(route(routeName), requestData)
        return
      }

      if (method === 'post' || route().current('*.create')) {
        await router.post(route(routeName), requestData)
        e.target.reset()
        return
      }

      if (method === 'put' || route().current('*.edit')) {
        await router.put(route(routeName, id), requestData)
        return
      }

      if (method === 'delete' || route().current('*.destroy')) {
        await router.delete(route(routeName, id))
        return
      }

      return console.error('Método de envio inválido')
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
