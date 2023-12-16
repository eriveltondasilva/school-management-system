import { Head, useForm } from '@inertiajs/react'
import { useEffect, useId } from 'react'

import Button from '@/Components/Button'
import Input from '@/Components/Input'
import GuestLayout from '@/Layouts/GuestLayout'

export default function ConfirmPassword() {
  const ID = useId()
  const { data, setData, post, processing, errors, reset } = useForm({
    password: '',
  })

  useEffect(() => {
    return () => {
      reset('password')
    }
  }, [])

  const submit = (e) => {
    e.preventDefault()

    post(route('password.confirm'))
  }

  return (
    <GuestLayout>
      <Head title='Confirm Password' />

      <div className='mb-4 text-sm text-gray-600 dark:text-gray-400'>
        This is a secure area of the application. Please confirm your password
        before continuing.
      </div>

      <form onSubmit={submit}>
        <div className='mt-4'>
          <Input.Label htmlFor={`${ID}-password`} value='Password' />

          <Input
            id={`${ID}-password`}
            type='password'
            name='password'
            value={data.password}
            className='mt-1 block w-full'
            onChange={(e) => setData('password', e.target.value)}
            autoFocus
          />

          <Input.Error message={errors.password} />
        </div>

        <div className='mt-4 flex items-center justify-end'>
          <div className='ms-4'>
            <Button type='submit' disabled={processing}>
              Confirm
            </Button>
          </div>
        </div>
      </form>
    </GuestLayout>
  )
}
