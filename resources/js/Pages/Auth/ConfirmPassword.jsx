import Button from '@/Components/Button'
import InputError from '@/Components/InputError'
import InputLabel from '@/Components/InputLabel'
import TextInput from '@/Components/TextInput'
import GuestLayout from '@/Layouts/GuestLayout'
import { Head, useForm } from '@inertiajs/react'
import { useEffect } from 'react'

export default function ConfirmPassword() {
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
          <InputLabel htmlFor='password' value='Password' />

          <TextInput
            id='password'
            type='password'
            name='password'
            value={data.password}
            className='mt-1 block w-full'
            isFocused={true}
            onChange={(e) => setData('password', e.target.value)}
          />

          <InputError message={errors.password} className='mt-2' />
        </div>

        <div className='mt-4 flex items-center justify-end'>
          <div className='ms-4'>
            <Button disabled={processing}>Confirm</Button>
          </div>
        </div>
      </form>
    </GuestLayout>
  )
}
