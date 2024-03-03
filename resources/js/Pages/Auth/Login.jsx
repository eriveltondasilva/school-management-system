import { Head, Link, useForm } from '@inertiajs/react'
import { Lock, Mail } from 'lucide-react'
import { useEffect } from 'react'

import Button from '@/Components/Button'
import Checkbox from '@/Components/Checkbox'
import Input from '@/Components/Input'
import GuestLayout from '@/Layouts/GuestLayout'

export default function Login({ status, canResetPassword }) {
  const { data, setData, post, processing, errors, reset } = useForm({
    email: '',
    password: '',
    remember: false,
  })

  useEffect(() => {
    return () => {
      reset('password')
    }
  }, [])

  const handleChange = (e) => {
    setData(e.target.name, e.target.value)
  }

  const submit = (e) => {
    e.preventDefault()
    post(route('login'))
  }

  return (
    <GuestLayout>
      <Head title='Log in' />

      {status && (
        <div className='mb-4 text-sm font-medium text-green-600'>{status}</div>
      )}

      <form onSubmit={submit}>
        <div className='max-w-md'>
          {/* Email Address */}
          <Input.Text
            id='email'
            type='email'
            label='Email'
            icon={Mail}
            value={data.email}
            className='mt-1 block w-full'
            autoComplete='username'
            placeholder='name@exemplo.com'
            onChange={handleChange}
            autoFocus
          />

          <Input.Error message={errors.email} />
        </div>

        <div className='mt-4'>
          {/* Password */}
          <Input.Text
            id='password'
            type='password'
            label='Senha'
            icon={Lock}
            value={data.password}
            placeholder='********'
            className='mt-1 block w-full'
            autoComplete='current-password'
            onChange={handleChange}
          />

          <Input.Error message={errors.password} />
        </div>

        <div className='mt-4 block'>
          <label className='flex items-center'>
            <Checkbox
              name='remember'
              defaultChecked={data.remember}
              onChange={handleChange}
            />
            <span className='ms-2 text-sm text-gray-600 dark:text-gray-400'>
              Lembre-me
            </span>
          </label>
        </div>

        <div className='mt-4 flex items-center justify-end'>
          {canResetPassword && (
            <Link
              href={route('password.request')}
              className='rounded-md text-sm text-gray-600 underline hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:text-gray-400 dark:hover:text-gray-100 dark:focus:ring-offset-gray-800'>
              Esqueceu sua senha?
            </Link>
          )}

          <div className='ms-4'>
            <Button
              type='submit'
              method='post'
              as='button'
              disabled={processing}>
              Log in
            </Button>
          </div>
        </div>
      </form>
    </GuestLayout>
  )
}
