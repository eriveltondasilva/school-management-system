import { Button } from 'flowbite-react'
import { Save, Trash2 } from 'lucide-react'

// ===================================
export default function FormFooter() {
  return (
    <footer className='flex flex-col gap-4 sm:flex-row'>
      {/* Botão de limpar */}
      <Button type='reset' color='light' fullSized>
        <Trash2 className='mr-2 h-5 w-5' />
        limpar campos
      </Button>
      {/* Botão de salvar */}
      <Button type='submit' color='blue' fullSized>
        <Save className='mr-2 h-5 w-5' />
        salvar dados
      </Button>
    </footer>
  )
}
