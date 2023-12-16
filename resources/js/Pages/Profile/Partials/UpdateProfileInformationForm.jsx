import { Transition } from '@headlessui/react'
import { Link, useForm, usePage } from '@inertiajs/react'
import { useId } from 'react'

import Button from '@/Components/Button'
import Input from '@/Components/Input'

export default function UpdateProfileInformation({
  mustVerifyEmail,
  status,
  className = '',
}) {
  const ID = useId()
  const user = usePage().props.auth.user

  const { data, setData, patch, errors, processing, recentlySuccessful } =
    useForm({
      name: user.name,
      email: user.email,
    })

  const submit = (e) => {
    e.preventDefault()

    patch(route('profile.update'))
  }

  return (
    <section className={className}>
      <header>
        <h2 className='text-lg font-medium text-gray-900 dark:text-gray-100'>
          Profile Information
        </h2>

        <p className='mt-1 text-sm text-gray-600 dark:text-gray-400'>
          Update your account's profile information and email address.
        </p>
      </header>

      <form onSubmit={submit} className='mt-6 space-y-6'>
        <div>
          <Input.Label htmlFor={`${ID}-name`} value='Name' />

          <Input
            id={`${ID}-name`}
            className='mt-1 block w-full'
            value={data.name}
            onChange={(e) => setData('name', e.target.value)}
            autoComplete='name'
            autoFocus
            required
          />

          <Input.Error message={errors.name} />
        </div>

        <div>
          <Input.Label htmlFor={`${ID}-email`} value='Email' />

          <Input
            id={`${ID}-email`}
            type='email'
            className='mt-1 block w-full'
            value={data.email}
            onChange={(e) => setData('email', e.target.value)}
            required
            autoComplete='username'
          />

          <Input.Error message={errors.email} />
        </div>

        {mustVerifyEmail && user.email_verified_at === null && (
          <div>
            <p className='mt-2 text-sm text-gray-800 dark:text-gray-200'>
              Your email address is unverified.
              <Link
                href={route('verification.send')}
                method='post'
                as='button'
                className='rounded-md text-sm text-gray-600 underline hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:text-gray-400 dark:hover:text-gray-100 dark:focus:ring-offset-gray-800'>
                Click here to re-send the verification email.
              </Link>
            </p>

            {status === 'verification-link-sent' && (
              <div className='mt-2 text-sm font-medium text-green-600 dark:text-green-400'>
                A new verification link has been sent to your email address.
              </div>
            )}
          </div>
        )}

        <div className='flex items-center gap-4'>
          <Button type='submit' disabled={processing}>
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
