import { useContext } from 'react'

import { DropdownContext } from '@/Contexts/DropdownContext'

// ====================================
export default function useDropdownContext() {
  const context = useContext(DropdownContext)

  if (!context) {
    throw new Error('useDropdownContext must be used within a DropdownProvider')
  }

  return context
}