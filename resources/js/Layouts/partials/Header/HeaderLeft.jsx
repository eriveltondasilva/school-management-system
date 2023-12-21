import { Link } from '@inertiajs/react'
import { Menu } from 'lucide-react'
import { twJoin } from 'tailwind-merge'

export default function HeaderLeft({ user }) {
  const { name, gender } = user

  const firstName = name.split(' ')[0]
  const welcome = gender === 'M' ? 'Bem-vindo' : 'Bem-vinda'
  const date = new Date().toLocaleDateString('pt-BR', { dateStyle: 'medium' })

  return (
    <section className='flex items-center justify-start'>
      {/* <!-- Hamburger --> */}
      <button
        aria-expanded='true'
        aria-controls='sidebar'
        className={twJoin(
          'mr-2 cursor-pointer rounded-lg p-2 focus:ring-2 lg:hidden',
          'text-gray-600 hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:ring-gray-100',
          'dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:bg-gray-700 dark:focus:ring-gray-700'
        )}>
        <Menu />
        <span className='sr-only'>Toggle sidebar</span>
      </button>

      {/* <!-- Welcome --> */}
      <div className='mr-4'>
        <Link
          href={route('dashboard')}
          className='flex self-center whitespace-nowrap text-lg font-semibold lg:text-xl dark:text-white'>
          {welcome}&nbsp;
          <span className='hidden sm:block'>de volta, {firstName}</span>
        </Link>
        <div className='hidden text-xs font-medium text-slate-400 lg:block'>
          {date}
        </div>
      </div>
    </section>
  )
}
