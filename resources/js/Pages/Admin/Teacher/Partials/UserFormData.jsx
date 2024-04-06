import Input from '@/Components/Input'

export default function UserFormData({ data, errors }) {
  return (
    <section className='mb-4'>
      <h2 className='mb-5 text-lg font-medium text-gray-900 dark:text-gray-100'>
        Dados de usuário
      </h2>

      {/* EMAIL DO USUÁRIO */}
      <Input.Text
        id='email'
        type='email'
        label='Email'
        placeholder='Insira o email de usuário...'
        error={errors.email}
        defaultValue={data.email}
        readOnly={readOnly}
      />
    </section>
  )
}
