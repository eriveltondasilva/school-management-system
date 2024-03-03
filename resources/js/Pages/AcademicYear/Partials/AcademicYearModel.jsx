import { router } from '@inertiajs/react'
import { Button } from 'flowbite-react'
import { AlertCircle, X } from 'lucide-react'
import { useState } from 'react'

import Modal from '@/Components/Modal'

// ====================================
export default function AcademicYearModel({ academicYear }) {
  const [isShowed, setIsShowed] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      setIsLoading(true)

      await router.put(
        route('academic-year.update-is-current', academicYear.id)
      )

      setIsShowed(false)
    } catch (error) {
      console.log(error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleToggleModal = () => setIsShowed(!isShowed)

  return (
    <>
      <Button
        color='failure'
        disabled={academicYear.is_current}
        onClick={handleToggleModal}
        className='uppercase'>
        <AlertCircle className='mr-2 h-5 w-5' />
        ativar ano letivo
      </Button>

      {/* modal */}
      <Modal show={isShowed} onClose={handleToggleModal}>
        <form onSubmit={handleSubmit} className='p-6'>
          <ModelHeader />

          <div className='mt-6 flex justify-end'>
            <Button
              color='light'
              onClick={handleToggleModal}
              disabled={isLoading}>
              <X className='mr-2 h-5 w-5' />
              cancelar
            </Button>

            <div className='ms-3'>
              <Button type='submit' color='failure' disabled={isLoading}>
                <AlertCircle className='mr-2 h-5 w-5' />
                confirmar
              </Button>
            </div>
          </div>
        </form>
      </Modal>
    </>
  )
}

function ModelHeader() {
  return (
    <>
      <h2 className='text-lg font-medium text-gray-900 dark:text-gray-100'>
        Título
      </h2>

      <p className='mt-1 text-sm text-gray-600 dark:text-gray-400'>subtítulo</p>
    </>
  )
}
