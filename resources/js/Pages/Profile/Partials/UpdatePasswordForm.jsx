import { Transition } from '@headlessui/react'
import { useForm } from '@inertiajs/react'
import { useId } from 'react'

import Button from '@/Components/Button'
import * as Icon from '@/Components/Icons'
import Input from '@/Components/Input'

export default function UpdatePasswordForm({ className = '' }) {
  const ID = useId()

  const { data, setData, errors, put, reset, processing, recentlySuccessful } =
    useForm({
      current_password: '',
      password: '',
      password_confirmation: '',
    })

  const updatePassword = (e) => {
    e.preventDefault()

    put(route('password.update'), {
      preserveScroll: true,
      onSuccess: () => reset(),
    })
  }

  return (
    <section className={className}>
      <header>
        <h2 className='text-lg font-medium text-gray-900 dark:text-gray-100'>
          Update Password
        </h2>

        <p className='mt-1 text-sm text-gray-600 dark:text-gray-400'>
          Ensure your account is using a long, random password to stay secure.
        </p>
      </header>

      <form onSubmit={updatePassword} className='mt-6 space-y-6'>
        <div>
          <Input.Label
            htmlFor={`${ID}-current_password`}
            value='Current Password'
          />

          <Input
            id={`${ID}-current_password`}
            value={data.current_password}
            onChange={(e) => setData('current_password', e.target.value)}
            type='password'
            className='mt-1 block w-full'
            autoComplete='current-password'
          />

          <Input.Error message={errors.current_password} />
        </div>

        <div>
          <Input.Label htmlFor={`${ID}-password`} value='New Password' />

          <Input
            id={`${ID}-password`}
            value={data.password}
            onChange={(e) => setData('password', e.target.value)}
            type='password'
            className='mt-1 block w-full'
            autoComplete='new-password'
          />

          <Input.Error message={errors.password} />
        </div>

        <div>
          <Input.Label
            htmlFor={`${ID}-password_confirmation`}
            value='Confirm Password'
          />

          <Input
            id={`${ID}-password_confirmation`}
            value={data.password_confirmation}
            onChange={(e) => setData('password_confirmation', e.target.value)}
            type='password'
            className='mt-1 block w-full'
            autoComplete='new-password'
          />

          <Input.Error message={errors.password_confirmation} />
        </div>

        <div className='flex items-center gap-4'>
          <Button type='submit' disabled={processing}>
            <Icon.Save className='h-5 w-5' />
            Save
          </Button>

          <Transition
            show={recentlySuccessful}
            enter='transition ease-in-out'
            enterFrom='opacity-0'
            leave='transition ease-in-out'
            leaveTo='opacity-0'>
            <p className='text-sm text-gray-600 dark:text-gray-400'>Saved.</p>
          </Transition>
        </div>
      </form>
    </section>
  )
}
