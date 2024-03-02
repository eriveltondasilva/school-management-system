import { Head, useForm } from '@inertiajs/react'
import { useEffect } from 'react'

import Button from '@/Components/Button'
import Input from '@/Components/Input'
import GuestLayout from '@/Layouts/GuestLayout'

export default function ResetPassword({ token, email }) {
  const { data, setData, post, processing, errors, reset } = useForm({
    token: token,
    email: email,
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

    post(route('password.store'))
  }

  return (
    <GuestLayout>
      <Head title='Reset Password' />

      <form onSubmit={submit}>
        <div>
          <Input.Text
            id='email'
            type='email'
            label='Email'
            value={data.email}
            className='mt-1 block w-full'
            autoComplete='username'
            onChange={handleChange}
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
            autoFocus
          />

          <Input.Error message={errors.password} />
        </div>

        <div className='mt-4'>
          <Input.Text
            id='password_confirmation'
            type='password'
            label='Confirmar senha'
            value={data.password_confirmation}
            className='mt-1 block w-full'
            autoComplete='new-password'
            onChange={handleChange}
          />

          <Input.Error message={errors.password_confirmation} />
        </div>

        <div className='mt-4 flex items-center justify-end'>
          <div className='ms-4'>
            <Button type='submit' disabled={processing}>
              Resetar sua senha
            </Button>
          </div>
        </div>
      </form>
    </GuestLayout>
  )
}
