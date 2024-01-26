import { Link } from '@inertiajs/react'
import { Button, Select, TextInput } from 'flowbite-react'
import { Search } from 'lucide-react'

// ====================================
export default function TableHeader({ searchValue, onSearchChange }) {
  return (
    <HeaderContainer>
      <HeaderLeft value={searchValue} onChange={onSearchChange} />
      <HeaderRight />
    </HeaderContainer>
  )
}

// -----------------------------------
function HeaderContainer({ children }) {
  return (
    <header className='relative mb-4 bg-slate-50 dark:bg-gray-900 sm:rounded-lg'>
      <div className='flex flex-col items-center justify-between space-y-3 p-4 md:flex-row md:space-x-4 md:space-y-0'>
        {children}
      </div>
    </header>
  )
}

function HeaderLeft({ value, onChange }) {
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

function HeaderRight() {
  return (
    <div className='flex w-full items-center space-x-3 md:w-auto'>
      {/* Dropdown de ano */}
      <Select labelText='Ano' id='grades'>
        <option></option>
        <option>6° ano</option>
        <option>7° ano</option>
        <option>8° ano</option>
        <option>9° ano</option>
      </Select>
      {/* Botão para cadastrar aluno */}
      <Button as={Link} href={route('student.create')} color='blue'>
        Cadastrar aluno
      </Button>
    </div>
  )
}
