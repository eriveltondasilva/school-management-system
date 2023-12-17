import { Transition } from '@headlessui/react'
import { Fragment } from 'react'
import { twJoin } from 'tailwind-merge'

import { useDropdownContext } from '@/Contexts/DropdownContext'

// ====================================
export default function DropdownContent({
  align = 'right',
  width = '48',
  contentClasses = 'py-1 bg-white dark:bg-gray-700',
  children,
}) {
  const { isOpen, setIsOpen } = useDropdownContext()

  let alignmentClasses = 'origin-top'

  alignmentClasses = {
    left: 'ltr:origin-top-left rtl:origin-top-right start-0',
    right: 'ltr:origin-top-right rtl:origin-top-left end-0',
  }[align]

  return (
    <>
      <Transition
        as={Fragment}
        show={isOpen}
        enter='transition ease-out duration-200'
        enterFrom='opacity-0 scale-95'
        enterTo='opacity-100 scale-100'
        leave='transition ease-in duration-75'
        leaveFrom='opacity-100 scale-100'
        leaveTo='opacity-0 scale-95'>
        <div
          className={twJoin(
            'absolute z-50 mt-2 rounded-md shadow-lg',
            width && 'w-48',
            alignmentClasses
          )}
          onClick={() => setIsOpen(false)}>
          <div
            className={twJoin(
              'rounded-md ring-1 ring-black ring-opacity-5',
              contentClasses
            )}>
            {children}
          </div>
        </div>
      </Transition>
    </>
  )
}
