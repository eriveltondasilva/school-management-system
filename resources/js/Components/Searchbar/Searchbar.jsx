import { Link } from '@inertiajs/react'
import { Button, TextInput } from 'flowbite-react'
import { Search, UserRoundPlus } from 'lucide-react'
import { twJoin } from 'tailwind-merge'

// ====================================
export function SearchbarRoot({ children }) {
  return (
    <header className='relative mb-4 rounded-lg '>
      <div
        className={twJoin(
          'flex flex-col items-center justify-between',
          'space-y-3 py-4 md:flex-row md:space-x-4 md:space-y-0'
        )}>
        {children}
      </div>
    </header>
  )
}

// ====================================
export function SearchbarRight({ children }) {
  return (
    <div className='flex w-full items-center space-x-3 md:w-auto'>
      {children}
    </div>
  )
}

// ====================================
export function SearchbarLeft({ value, onChange }) {
  return (
    <div className='w-full md:w-1/2'>
      <div className='flex items-center'>
        <label htmlFor='simple-search' className='sr-only'>
          pesquisar aluno
        </label>
        <div className='relative w-full'>
          {/* Input de pesquisa */}
          <TextInput
            type='search'
            placeholder='pesquisar'
            icon={Search}
            value={value}
            onChange={onChange}
          />
        </div>
      </div>
    </div>
  )
}

export function SearchbarRightButton({ href, children }) {
  return (
    <>
      {/* Botão de cadastrar */}
      <Button as={Link} href={href} color='blue'>
        <UserRoundPlus className='mr-2 h-5 w-5' />
        {children}
      </Button>
    </>
  )
}
