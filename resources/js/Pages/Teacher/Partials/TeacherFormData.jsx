import { Label, Radio, TextInput } from 'flowbite-react'

// ================================================
export default function TeacherFormData({ data = {}, errors = {}, readOnly }) {
  return (
    <section className='mb-4'>
      {/* NOME DO PROFESSOR */}
      <InputField
        id='name'
        type='text'
        label='Nome completo'
        placeholder='insira o nome do professor...'
        defaultValue={data.name}
        readOnly={readOnly}
      />
      {errors.name && <p className='text-sm text-red-500'>{errors.name}</p>}
      <br />

      {/* EMAIL DO PROFESSOR */}
      <InputField
        id='email'
        type='email'
        label='Email'
        placeholder='insira o email do professor...'
        defaultValue={data.email}
        readOnly={readOnly}
      />
      <br />

      {/* TELEFONE CELULAR DO ALUNO */}
      <InputField
        id='phone'
        type='tel'
        label='Telefone celular'
        placeholder='insira o telefone do professor...'
        defaultValue={data.phone}
        readOnly={readOnly}
      />
      {errors.phone && <p className='text-sm text-red-500'>{errors.phone}</p>}

      <br />

      {/* GÊNERO DO PROFESSOR */}
      <fieldset className='flex max-w-md flex-col gap-3'>
        <Label htmlFor='gender'>Gênero do Professor</Label>
        <div className='flex items-center gap-2'>
          <Radio
            id='gender-male'
            name='gender'
            defaultValue='M'
            defaultChecked={data.gender === 'M'}
            disabled={readOnly}
          />
          <Label htmlFor='gender-male'>Masculino</Label>
        </div>
        <div className='flex items-center gap-2'>
          <Radio
            id='gender-female'
            name='gender'
            defaultValue='F'
            defaultChecked={data.gender === 'F'}
            disabled={readOnly}
          />
          <Label htmlFor='gender-female'>Feminino</Label>
        </div>
      </fieldset>
      <br />

      {/* CPF DO ALUNO */}
      <InputField
        id='cpf'
        type='text'
        label='CPF'
        placeholder='insira o cpf do aluno...'
        defaultValue={data.cpf}
        readOnly={readOnly}
      />
      {errors.email && <p className='text-sm text-red-500'>{errors.name}</p>}

      <br />

      {/* RG DO ALUNO */}
      <InputField
        id='rg'
        type='text'
        label='RG'
        placeholder='insira o rg do aluno...'
        defaultValue={data.rg}
        readOnly={readOnly}
      />
      {errors.cpf && <p className='text-sm text-red-500'>{errors.cpf}</p>}

      <br />

      {/* DATA DE NASCIMENTO DO ALUNO */}
      <InputField
        id='birthday'
        type='date'
        label='Data de nascimento'
        // placeholder='insira a data de nascimento do professor...'
        defaultValue={data.birthday}
        readOnly={readOnly}
      />
      {errors.birthday && (
        <p className='text-sm text-red-500'>{errors.birthday}</p>
      )}

      {/* ENDEREÇO DO ALUNO */}
      <InputField
        id='address_street'
        type='text'
        label='Endereço'
        placeholder='insira o endereço do aluno...'
        defaultValue={data.address_street}
        readOnly={readOnly}
      />
      {errors.address_street && (
        <p className='text-sm text-red-500'>{errors.address_street}</p>
      )}

      <br />

      {/* CIDADE DO ALUNO */}
      <InputField
        id='address_city'
        type='text'
        label='Cidade'
        placeholder='insira a cidade do aluno...'
        defaultValue={data.address_city}
        readOnly={readOnly}
      />
      {errors.address_city && (
        <p className='text-sm text-red-500'>{errors.address_city}</p>
      )}

      <br />

      {/* ESTADO DO ALUNO */}
      <InputField
        id='address_state'
        type='text'
        label='Estado'
        placeholder='insira o estado do aluno...'
        defaultValue={data.address_state}
        readOnly={readOnly}
      />
      {errors.address_state && (
        <p className='text-sm text-red-500'>{errors.address_state}</p>
      )}

      <br />

      {/* CEP DO ALUNO */}
      <InputField
        id='address_zip_code'
        type='text'
        label='CEP'
        placeholder='insira o cep do aluno...'
        defaultValue={data.address_zip_code}
        readOnly={readOnly}
      />
      {errors.address_zip_code && (
        <p className='text-sm text-red-500'>{errors.address_zip_code}</p>
      )}

      <br />

      <br />
    </section>
  )
}

// ----------------------------------------------
function InputField({ id, label, type, errors, ...props }) {
  return (
    <>
      <div className='mb-2 block'>
        <Label htmlFor={id || ''} value={label || ''} />
      </div>
      <TextInput
        id={id || ''}
        name={id || ''}
        type={type || 'text'}
        {...props}
      />
    </>
  )
}
