import { createContext, useState } from 'react'

export const DropdownContext = createContext('')

// ====================================
export default function DropdownProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false)

  function handleToggleOpen() {
    setIsOpen((prevState) => !prevState)
  }

  return (
    <DropdownContext.Provider value={{ isOpen, setIsOpen, handleToggleOpen }}>
      {children}
    </DropdownContext.Provider>
  )
}
