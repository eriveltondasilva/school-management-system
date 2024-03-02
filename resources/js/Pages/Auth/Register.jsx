import { Head, Link, useForm } from '@inertiajs/react'
import { useEffect } from 'react'

import Button from '@/Components/Button'
import Input from '@/Components/Input'
import GuestLayout from '@/Layouts/GuestLayout'

// ==============================
export default function Register() {
  const { data, setData, post, processing, errors, reset } = useForm({
    nickname: '',
    email: '',
    password: '',
    password_confirmation: '',
  })

  useEffect(() => {
    return () => {
      reset('password', 'password_confirmation')
    }
  }, [])

  const handleChange = (e) => {
    setData(e.target.name, e.target.value)
  }

  const submit = (e) => {
    e.preventDefault()
    post(route('register'))
  }

  return (
    <GuestLayout>
      <Head title='Register' />

      <form onSubmit={submit}>
        <div>
          <Input.Text
            id='nickname'
            type='text'
            label='Nickname'
            value={data.nickname}
            className='mt-1 block w-full'
            autoComplete='name'
            onChange={handleChange}
            autoFocus
            required
          />

          <Input.Error message={errors.nickname} />
        </div>

        <div className='mt-4'>
          <Input.Text
            id='email'
            type='email'
            label='Email'
            value={data.email}
            className='mt-1 block w-full'
            autoComplete='username'
            onChange={handleChange}
            required
          />

          <Input.Error message={errors.email} />
        </div>

        <div className='mt-4'>
          <Input.Text
            id='password'
            type='password'
            label='Senha'
            value={data.password}
            className='mt-1 block w-full'
            autoComplete='new-password'
            onChange={handleChange}
            required
          />

          <Input.Error message={errors.password} />
        </div>

        <div className='mt-4'>
          <Input.Text
            id='password_confirmation'
            type='password'
            label='Confirme sua senha'
            value={data.password_confirmation}
            className='mt-1 block w-full'
            autoComplete='new-password'
            onChange={handleChange}
            required
          />

          <Input.Error message={errors.password_confirmation} />
        </div>

        <div className='mt-4 flex items-center justify-end'>
          <Link
            href={route('login')}
            className='rounded-md text-sm text-gray-600 underline hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:text-gray-400 dark:hover:text-gray-100 dark:focus:ring-offset-gray-800'>
            Já registrado?
          </Link>

          <div className='ms-4'>
            <Button type='submit' disabled={processing}>
              Registrar
            </Button>
          </div>
        </div>
      </form>
    </GuestLayout>
  )
}
