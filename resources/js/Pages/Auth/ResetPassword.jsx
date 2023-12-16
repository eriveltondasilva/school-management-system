import { Head, useForm } from '@inertiajs/react'
import { useEffect, useId } from 'react'

import Button from '@/Components/Button'
import Input from '@/Components/Input'
import GuestLayout from '@/Layouts/GuestLayout'

export default function ResetPassword({ token, email }) {
  const ID = useId()
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

  const submit = (e) => {
    e.preventDefault()

    post(route('password.store'))
  }

  return (
    <GuestLayout>
      <Head title='Reset Password' />

      <form onSubmit={submit}>
        <div>
          <Input.Label htmlFor={`${ID}-email`} value='Email' />

          <Input
            id={`${ID}-email`}
            type='email'
            name='email'
            value={data.email}
            className='mt-1 block w-full'
            autoComplete='username'
            onChange={(e) => setData('email', e.target.value)}
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
            autoFocus
          />

          <Input.Error message={errors.password} />
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
          />

          <Input.Error message={errors.password_confirmation} />
        </div>

        <div className='mt-4 flex items-center justify-end'>
          <div className='ms-4'>
            <Button type='submit' disabled={processing}>
              Reset Password
            </Button>
          </div>
        </div>
      </form>
    </GuestLayout>
  )
}
