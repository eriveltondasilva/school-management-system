import { DarkThemeToggle } from 'flowbite-react'

// ====================================
export default function HeaderRight({ children }) {
  return (
    <div className='mr-2 flex space-x-2'>
      {/* Botão tema escuro */}
      <DarkThemeToggle />
      {children}
    </div>
  )
}
