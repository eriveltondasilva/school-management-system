import { Label, TextInput, Textarea, ToggleSwitch } from 'flowbite-react'

// ============================================================================
export function InputText({
  id = '',
  label = '',
  className = '',
  type = 'text',
  ...props
}) {
  return (
    <section>
      {label && <LabelText id={id} label={label} />}
      <TextInput
        id={id}
        name={id}
        type={type}
        className={className}
        {...props}
      />
    </section>
  )
}

export function InputTextarea({ id = '', label = '', ...props }) {
  return (
    <section>
      {label && <LabelText id={id} label={label} />}
      <Textarea id={id} name={id} {...props} />
    </section>
  )
}

export function InputSwitch({ id = '', text = '', ...props }) {
  return (
    <>
      <LabelText id={id} label={text} />
      <ToggleSwitch id={id} name={id} {...props} />
    </>
  )
}

export function InputError({ message = '' }) {
  if (!message) return null

  return (
    <p className='mt-2 text-sm text-red-600 dark:text-red-400'>{message}</p>
  )
}

// ----------------------------------------------
function LabelText({ id = '', label = '' }) {
  return (
    <div className='mb-2 block'>
      <Label htmlFor={id} value={label} />
    </div>
  )
}
