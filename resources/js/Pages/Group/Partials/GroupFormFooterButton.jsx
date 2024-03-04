import { Button } from 'flowbite-react'
import { Save } from 'lucide-react'

export default function GroupFormFooterButton({ disabled }) {
  const isCreate = route().current('*.create')

  return (
    <Button
      type='submit'
      disabled={disabled}
      color='blue'
      className='uppercase'
      fullSized>
      <Save className='mr-2 h-5 w-5' />
      {isCreate ? 'cadastrar' : 'atualizar'} turma
    </Button>
  )
}
