import { Label, Select, TextInput, Textarea } from 'flowbite-react'

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

export function InputSelect({ id = '', label = '', values = [], ...props }) {
  return (
    <section>
      {label && <LabelText id={id} label={label} />}

      <Select id={id} name={id} {...props}>
        {values.map((value) => (
          <option key={value} value={value}>
            {value}
          </option>
        ))}
      </Select>
    </section>
  )
}

{
  /* <section>
<div className='mb-2 block'>
  <Label htmlFor='name' value='Turma' />
</div>
<Select id='name' defaultValue='8° Ano' required>
  <option>6° Ano</option>
  <option>7° Ano</option>
  <option>8° Ano</option>
  <option>9° Ano</option>
</Select>
</section>
<Input.Error message={errors.name} /> */
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
