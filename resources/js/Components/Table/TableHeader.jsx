import { Button, TextInput } from 'flowbite-react'
import { Plus, Search } from 'lucide-react'
import { Link } from '@inertiajs/react'

// ====================================
export default function TableHeader() {
  return (
    <div className='relative mb-4 bg-slate-50 dark:bg-gray-900 sm:rounded-lg'>
      <div className='flex flex-col items-center justify-between space-y-3 p-4 md:flex-row md:space-x-4 md:space-y-0'>
        <div className='w-full md:w-1/2'>
          <form className='flex items-center'>
            <label htmlFor='simple-search' className='sr-only'>
              Search
            </label>
            <div className='relative w-full'>
              <TextInput type='search' placeholder='pesquisar' icon={Search} />
            </div>
          </form>
        </div>
        {/* <!-- Search --> */}
        <div className='flex w-full items-center space-x-3 md:w-auto'>
          <Button as={Link} href={route('student.create')} color='blue'>
            <Plus className='mr-2 h-4 w-4' />
            adicionar aluno
          </Button>
          {/* <Select labelText='Ano' id='grades' required>
            <option></option>
            <option>6° ano</option>
            <option>7° ano</option>
            <option>8° ano</option>
            <option>9° ano</option>
          </Select> */}
          {/* <!-- Dropdown menu --> */}
        </div>
      </div>
    </div>
  )
}
