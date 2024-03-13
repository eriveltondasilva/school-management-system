import { Button } from 'flowbite-react'
import { AlertCircle, X } from 'lucide-react'
import { useState } from 'react'
import { twJoin } from 'tailwind-merge'

import Modal from '@/Components/Modal'
import useFormDate from '@/Hooks/useFormDate'

// ==============================================
export default function AcademicYearModel({ academicYear = {} }) {
  const [isShowed, setIsShowed] = useState(false)

  const formDataOptions = {
    routeName: 'academic-year.update-status',
    method: 'put',
    id: academicYear.id,
  }
  const { handleSubmit, isLoading } = useFormDate(formDataOptions)

  const handleToggleModal = () => setIsShowed(!isShowed)

  return (
    <>
      <Button
        color='failure'
        disabled={academicYear.is_active}
        onClick={handleToggleModal}
        className='uppercase'>
        <AlertCircle className='mr-2 h-5 w-5' />
        Ativar ano letivo
      </Button>

      {/* modal */}
      <Modal show={isShowed} onClose={handleToggleModal}>
        <form onSubmit={handleSubmit} className='p-6'>
          {/* model header */}
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
              <Button
                type='submit'
                color='failure'
                onClick={handleToggleModal}
                disabled={isLoading}>
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

// ----------------------------------------------
function ModelHeader() {
  return (
    <>
      <h2
        className={twJoin(
          'text-lg font-medium',
          'text-gray-900 dark:text-gray-100'
        )}>
        Título
      </h2>
      <p className={twJoin('mt-1 text-sm', 'text-gray-600 dark:text-gray-400')}>
        subtítulo
      </p>
    </>
  )
}
