import { Label, Select, TextInput, Textarea } from 'flowbite-react'
import { twMerge } from 'tailwind-merge'

// ==============================================
export function InputText({
  id = '',
  label = '',
  error = '',
  className = '',
  type = 'text',
  ...props
}) {
  return (
    <section className={twMerge('mb-6', className)}>
      {label && <LabelText id={id} label={label} />}
      <TextInput id={id} name={id} type={type} {...props} />
      {error && <InputError message={error} />}
    </section>
  )
}

export function InputTextarea({
  id = '',
  label = '',
  error = '',
  className = '',
  ...props
}) {
  return (
    <section className={twMerge('mb-6', className)}>
      {label && <LabelText id={id} label={label} />}
      <Textarea id={id} name={id} {...props} />
      {error && <InputError message={error} />}
    </section>
  )
}

export function InputSelect({
  id = '',
  label = '',
  error = '',
  values = [],
  ...props
}) {
  return (
    <section className={twMerge('mb-6', className)}>
      {label && <LabelText id={id} label={label} />}
      <Select id={id} name={id} {...props}>
        {values.map((value, index) => (
          <option key={index} value={value}>
            {value}
          </option>
        ))}
      </Select>
      {error && <InputError message={error} />}
    </section>
  )
}

// ----------------------------------------------
export function InputError({ message = '' }) {
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
