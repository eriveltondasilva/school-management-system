import { Label, TextInput } from 'flowbite-react'

// ================================================
export default function AddressFormData({ data = {}, errors = {}, readOnly }) {
  return (
    <section className='mb-4'>
      <h2 className='mb-5 text-lg font-medium text-gray-900 dark:text-gray-100'>
        Endereço
      </h2>

      {/* ENDEREÇO DO PROFESSOR */}
      <InputField
        id='address_street'
        type='text'
        label='Endereço'
        placeholder='insira o endereço do professor...'
        defaultValue={data.address_street}
        readOnly={readOnly}
      />
      {errors.address_street && (
        <p className='text-sm text-red-500'>{errors.address_street}</p>
      )}

      <br />

      {/* CIDADE DO PROFESSOR */}
      <InputField
        id='address_city'
        type='text'
        label='Cidade'
        placeholder='insira a cidade do professor...'
        defaultValue={data.address_city}
        readOnly={readOnly}
      />
      {errors.address_city && (
        <p className='text-sm text-red-500'>{errors.address_city}</p>
      )}

      <br />

      {/* ESTADO DO PROFESSOR */}
      <InputField
        id='address_state'
        type='text'
        label='Estado'
        placeholder='insira o estado do professor...'
        defaultValue={data.address_state}
        readOnly={readOnly}
      />
      {errors.address_state && (
        <p className='text-sm text-red-500'>{errors.address_state}</p>
      )}

      <br />

      {/* CEP DO PROFESSOR */}
      <InputField
        id='address_zip_code'
        type='text'
        label='CEP'
        placeholder='insira o cep do professor...'
        defaultValue={data.address_zip_code}
        readOnly={readOnly}
      />
      {errors.address_zip_code && (
        <p className='text-sm text-red-500'>{errors.address_zip_code}</p>
      )}

      <br />
    </section>
  )
}

// ----------------------------------------------
function InputField({ id = '', label = '', type = 'text', ...props }) {
  return (
    <>
      <div className='mb-2 block'>
        <Label htmlFor={id} value={label} />
      </div>
      <TextInput id={id} name={id} type={type} {...props} />
    </>
  )
}
