import { Button } from 'flowbite-react'
import { Save, Trash2 } from 'lucide-react'

// ====================================
export default function StudentFormFooterButtons({ disabled }) {
  const isCreate = route().current('*.create')

  return (
    <>
      <Button
        type='reset'
        disabled={isLoading}
        color='light'
        className='uppercase'>
        <Trash2 className='mr-2 h-5 w-5' />
        {isCreate ? 'limpar' : 'resetar'} campos
      </Button>
      <Button
        type='submit'
        disabled={isLoading}
        color='blue'
        className='uppercase'>
        <Save className='mr-2 h-5 w-5' />
        {isCreate ? 'salvar' : 'Atualizar'} aluno
      </Button>
    </>
  )
}
