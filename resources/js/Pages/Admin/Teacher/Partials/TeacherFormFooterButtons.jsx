import { Button } from 'flowbite-react'
import { Save, Trash2 } from 'lucide-react'

// ====================================
export default function TeacherFormFooterButtons({ disabled = false }) {
  const isCreate = route().current('*.create')

  const submitButtonText = isCreate ? 'Cadastrar' : 'Atualizar'
  const resetButtonText = isCreate ? 'Limpar' : 'Resetar'

  return (
    <>
      <Button
        type='reset'
        disabled={disabled}
        color='light'
        className='uppercase'
        fullSized>
        <Trash2 className='mr-2 h-5 w-5' />
        {resetButtonText} Campos
      </Button>
      <Button
        type='submit'
        disabled={disabled}
        color='blue'
        className='uppercase'
        fullSized>
        <Save className='mr-2 h-5 w-5' />
        {submitButtonText} Professor
      </Button>
    </>
  )
}
