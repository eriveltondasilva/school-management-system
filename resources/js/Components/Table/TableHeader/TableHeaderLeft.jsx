import { TextInput } from 'flowbite-react'
import { Search } from 'lucide-react'

// ====================================
export default function TableHeaderLeft({ value, onChange }) {
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
