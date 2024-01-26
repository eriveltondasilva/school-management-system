import { useForm } from '@inertiajs/react'
import { useId, useState } from 'react'

import Button from '@/Components/Button'
import * as Icon from '@/Components/Icons'
import Input from '@/Components/Input'
import Modal from '@/Components/Modal'

export default function DeleteUserForm({ className = '' }) {
  const ID = useId()
  const [confirmingUserDeletion, setConfirmingUserDeletion] = useState(false)

  const {
    data,
    setData,
    delete: destroy,
    processing,
    reset,
    errors,
  } = useForm({
    password: '',
  })

  const confirmUserDeletion = () => {
    setConfirmingUserDeletion(true)
  }

  const deleteUser = (e) => {
    e.preventDefault()

    destroy(route('profile.destroy'), {
      preserveScroll: true,
      onSuccess: () => closeModal(),
      onFinish: () => reset(),
    })
  }

  const closeModal = () => {
    setConfirmingUserDeletion(false)

    reset()
  }

  return (
    <section className={`space-y-6 ${className}`}>
      <header>
        <h2 className='text-lg font-medium text-gray-900 dark:text-gray-100'>
          Delete Account
        </h2>

        <p className='mt-1 text-sm text-gray-600 dark:text-gray-400'>
          Once your account is deleted, all of its resources and data will be
          permanently deleted. Before deleting your account, please download any
          data or information that you wish to retain.
        </p>
      </header>

      <Button variant='danger' onClick={confirmUserDeletion}>
        <Icon.Delete className='h-5 w-5' />
        Delete Account
      </Button>

      <Modal show={confirmingUserDeletion} onClose={closeModal}>
        <form onSubmit={deleteUser} className='p-6'>
          <h2 className='text-lg font-medium text-gray-900 dark:text-gray-100'>
            Are you sure you want to delete your account?
          </h2>

          <p className='mt-1 text-sm text-gray-600 dark:text-gray-400'>
            Once your account is deleted, all of its resources and data will be
            permanently deleted. Please enter your password to confirm you would
            like to permanently delete your account.
          </p>

          <div className='mt-6'>
            <Input.Label
              htmlFor={`${ID}-password`}
              value='Password'
              // className='sr-only'
            />

            <Input
              id={`${ID}-password`}
              type='password'
              name='password'
              value={data.password}
              onChange={(e) => setData('password', e.target.value)}
              className='mt-1 block w-3/4'
              placeholder='Password'
              autoFocus
            />

            <Input.Error message={errors.password} />
          </div>

          <div className='mt-6 flex justify-end'>
            <Button variant='secondary' onClick={closeModal}>
              Cancel
            </Button>

            <div className='ms-3'>
              <Button type='submit' variant='danger' disabled={processing}>
                Delete Account
              </Button>
            </div>
          </div>
        </form>
      </Modal>
    </section>
  )
}
