import { Transition } from '@headlessui/react'
import { useForm } from '@inertiajs/react'
import { Button } from 'flowbite-react'
import { Save } from 'lucide-react'

import Input from '@/Components/Input'

// ============================================================================
export default function UpdatePasswordForm({ className }) {
  const { data, setData, errors, put, reset, processing, recentlySuccessful } =
    useForm({
      current_password: '',
      password: '',
      password_confirmation: '',
    })

  // ----------------------------------------------
  function handleSubmit(e) {
    e.preventDefault()

    put(route('password.update'), {
      preserveScroll: true,
      onSuccess: () => reset(),
    })
  }

  function handleChange(e) {
    setData(e.target.name, e.target.value)
  }

  return (
    <section className={className || ''}>
      <Header />

      <form onSubmit={handleSubmit} className='mt-6 space-y-6'>
        <div>
          <Input.Label htmlFor='current_password' value='Senha atual' />

          <Input
            id='current_password'
            name='current_password'
            value={data.current_password}
            onChange={handleChange}
            type='password'
            className='mt-1 block w-full'
            autoComplete='current-password'
          />

          <Input.Error message={errors.current_password} />
        </div>

        <div>
          <Input.Label htmlFor='password' value='Nova senha' />

          <Input
            id='password'
            name='password'
            value={data.password}
            onChange={handleChange}
            type='password'
            className='mt-1 block w-full'
            autoComplete='new-password'
          />

          <Input.Error message={errors.password} />
        </div>

        <div>
          <Input.Label
            htmlFor='password_confirmation'
            value='Confirme a nova senha'
          />

          <Input
            id='password_confirmation'
            name='password_confirmation'
            value={data.password_confirmation}
            onChange={handleChange}
            type='password'
            className='mt-1 block w-full'
            autoComplete='new-password'
          />

          <Input.Error message={errors.password_confirmation} />
        </div>

        <Footer
          processing={processing}
          recentlySuccessful={recentlySuccessful}
        />
      </form>
    </section>
  )
}

// ============================================================================
function Header() {
  return (
    <header>
      <h2 className='text-lg font-medium text-gray-900 dark:text-gray-100'>
        Atualizar senha
      </h2>

      <p className='mt-1 text-sm text-gray-600 dark:text-gray-400'>
        Certifique-se de que sua conta esteja usando uma senha longa e aleatória
        para permanecer segura.
      </p>
    </header>
  )
}

// ============================================================================
function Footer({ processing, recentlySuccessful }) {
  return (
    <footer className='flex items-center gap-4'>
      <Button type='submit' color='blue' disabled={processing}>
        <Save className='mr-2 h-5 w-5' />
        Salvar
      </Button>

      <Transition
        show={recentlySuccessful}
        enter='transition ease-in-out'
        enterFrom='opacity-0'
        leave='transition ease-in-out'
        leaveTo='opacity-0'>
        <p className='text-sm text-gray-600 dark:text-gray-400'>Saved.</p>
      </Transition>
    </footer>
  )
}
