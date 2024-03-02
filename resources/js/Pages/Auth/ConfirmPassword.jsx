import { Head, useForm } from '@inertiajs/react'
import { useEffect } from 'react'

import Button from '@/Components/Button'
import Input from '@/Components/Input'
import GuestLayout from '@/Layouts/GuestLayout'

// ==============================
export default function ConfirmPassword() {
  const { data, setData, post, processing, errors, reset } = useForm({
    password: '',
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
    post(route('password.confirm'))
  }

  return (
    <GuestLayout>
      <Head title='Confirm Password' />

      <div className='mb-4 text-sm text-gray-600 dark:text-gray-400'>
        Esta é uma área segura do aplicativo. Por favor confirme sua senha antes
        de continuar.
      </div>

      <form onSubmit={submit}>
        <div className='mt-4'>
          <Input.Text
            id='password'
            type='password'
            label='Password'
            value={data.password}
            className='mt-1 block w-full'
            onChange={handleChange}
            autoFocus
          />

          <Input.Error message={errors.password} />
        </div>

        <div className='mt-4 flex items-center justify-end'>
          <div className='ms-4'>
            <Button type='submit' disabled={processing}>
              Confirmar
            </Button>
          </div>
        </div>
      </form>
    </GuestLayout>
  )
}
