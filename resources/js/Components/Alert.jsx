import { Alert as FlowbiteAlert } from 'flowbite-react'
import { Check } from 'lucide-react'
import { useState } from 'react'

// ====================================
export default function Alert({ icon, children, ...props }) {
  const [isShowed, setIsShowed] = useState(true)
  const handleDismiss = () => setIsShowed(false)

  return (
    <>
      {isShowed && (
        <FlowbiteAlert
          icon={icon || Check}
          onDismiss={handleDismiss}
          {...props}>
          {children}
        </FlowbiteAlert>
      )}
    </>
  )
}
