import Input from '@/Components/Input'

// ================================================
export default function StudentFormData({
  data = {},
  errors = {},
  readOnly = false,
}) {
  return (
    <section className='mb-4'>
      <h2 className='mb-5 text-lg font-medium text-gray-900 dark:text-gray-100'>
        Endereço
      </h2>

      {/* ENDEREÇO DO ALUNO */}
      <Input.Text
        id='address_street'
        type='text'
        label='Endereço'
        placeholder='insira o endereço do aluno...'
        defaultValue={data.address_street}
        readOnly={readOnly}
      />
      <Input.Error message={errors.address_street} />

      <br />

      {/* CIDADE DO ALUNO */}
      <Input.Text
        id='address_city'
        type='text'
        label='Cidade'
        placeholder='insira a cidade do aluno...'
        defaultValue={data.address_city}
        readOnly={readOnly}
      />
      <Input.Error message={errors.address_city} />

      <br />

      {/* ESTADO DO ALUNO */}
      <Input.Text
        id='address_state'
        type='text'
        label='Estado'
        placeholder='insira o estado do aluno...'
        defaultValue={data.address_state}
        readOnly={readOnly}
      />
      <Input.Error message={errors.address_state} />

      <br />

      {/* CEP DO ALUNO */}
      <Input.Text
        id='address_zip_code'
        type='text'
        label='CEP'
        placeholder='insira o cep do aluno...'
        defaultValue={data.address_zip_code}
        readOnly={readOnly}
      />
      <Input.Error message={errors.address_zip_code} />

      <br />
    </section>
  )
}
