import { Button } from 'flowbite-react'
import { Save } from 'lucide-react'

// ==============================================
export default function AcademicYearFormFooterButton({ disabled = false }) {
  const isCreate = route().current('*.create')
  const buttonText = isCreate ? 'Cadastrar' : 'Atualizar'

  return (
    <Button
      type='submit'
      disabled={disabled}
      color='blue'
      className='uppercase'
      fullSized>
      <Save className='mr-2 h-5 w-5' />
      {buttonText} ano letivo
    </Button>
  )
}
