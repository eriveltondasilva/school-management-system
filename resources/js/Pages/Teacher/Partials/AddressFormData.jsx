import Input from '@/Components/Input'

// ==============================================
export default function AddressFormData({
  data = {},
  errors = {},
  readOnly = false,
}) {
  return (
    <section className='mb-4'>
      <h2 className='mb-5 text-lg font-medium text-gray-900 dark:text-gray-100'>
        Endereço
      </h2>

      {/* ENDEREÇO DO PROFESSOR */}
      <Input.Text
        id='address_street'
        type='text'
        label='Endereço'
        placeholder='Insira o endereço do professor...'
        defaultValue={data.address_street}
        readOnly={readOnly}
      />
      <Input.Error message={errors.address_street} />

      {/* CIDADE DO PROFESSOR */}
      <Input.Text
        id='address_city'
        type='text'
        label='Cidade'
        placeholder='Insira a cidade do professor...'
        defaultValue={data.address_city}
        readOnly={readOnly}
      />
      <Input.Error message={errors.address_city} />

      {/* ESTADO DO PROFESSOR */}
      <Input.Text
        id='address_state'
        type='text'
        label='Estado'
        placeholder='Insira o estado do professor...'
        defaultValue={data.address_state}
        readOnly={readOnly}
      />
      <Input.Error message={errors.address_state} />

      {/* CEP DO PROFESSOR */}
      <Input.Text
        id='address_zip_code'
        type='text'
        label='CEP'
        placeholder='Insira o cep do professor...'
        defaultValue={data.address_zip_code}
        readOnly={readOnly}
      />
      <Input.Error message={errors.address_zip_code} />
    </section>
  )
}
