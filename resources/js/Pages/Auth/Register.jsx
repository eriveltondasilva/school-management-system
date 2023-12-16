import { useEffect, useId } from 'react'
import { Head, Link, useForm } from '@inertiajs/react'

import GuestLayout from '@/Layouts/GuestLayout'
import Button from '@/Components/Button'
import Input from '@/Components/Input'

export default function Register() {
  const ID = useId()
  const { data, setData, post, processing, errors, reset } = useForm({
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
  })

  useEffect(() => {
    return () => {
      reset('password', 'password_confirmation')
    }
  }, [])

  const submit = (e) => {
    e.preventDefault()

    post(route('register'))
  }

  return (
    <GuestLayout>
      <Head title='Register' />

      <form onSubmit={submit}>
        <div>
          <Input.Label htmlFor={`${ID}-name`} value='Name' />

          <Input
            id={`${ID}-name`}
            name='name'
            value={data.name}
            className='mt-1 block w-full'
            autoComplete='name'
            onChange={(e) => setData('name', e.target.value)}
            autoFocus
            required
          />

          <Input.Error message={errors.name} />
        </div>

        <div className='mt-4'>
          <Input.Label htmlFor={`${ID}-email`} value='Email' />

          <Input
            id={`${ID}-email`}
            type='email'
            name='email'
            value={data.email}
            className='mt-1 block w-full'
            autoComplete='username'
            onChange={(e) => setData('email', e.target.value)}
            required
          />

          <Input.Error message={errors.email} />
        </div>

        <div className='mt-4'>
          <Input.Label htmlFor={`${ID}-password`} value='Password' />

          <Input
            id={`${ID}-password`}
            type='password'
            name='password'
            value={data.password}
            className='mt-1 block w-full'
            autoComplete='new-password'
            onChange={(e) => setData('password', e.target.value)}
            required
          />

          <Input.Error message={errors.password} className='mt-2' />
        </div>

        <div className='mt-4'>
          <Input.Label
            htmlFor={`${ID}-password_confirmation`}
            value='Confirm Password'
          />

          <Input
            id={`${ID}-password_confirmation`}
            type='password'
            name='password_confirmation'
            value={data.password_confirmation}
            className='mt-1 block w-full'
            autoComplete='new-password'
            onChange={(e) => setData('password_confirmation', e.target.value)}
            required
          />

          <Input.Error
            message={errors.password_confirmation}
            className='mt-2'
          />
        </div>

        <div className='mt-4 flex items-center justify-end'>
          <Link
            href={route('login')}
            className='rounded-md text-sm text-gray-600 underline hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:text-gray-400 dark:hover:text-gray-100 dark:focus:ring-offset-gray-800'>
            Already registered?
          </Link>

          <div className='ms-4'>
            <Button type='submit' disabled={processing}>
              Register
            </Button>
          </div>
        </div>
      </form>
    </GuestLayout>
  )
}
