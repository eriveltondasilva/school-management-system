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
      {errors.email && <p className='text-sm text-red-500'>{errors.email}</p>}

      <br />

      {/* TELEFONE CELULAR DO PROFESSOR */}
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

      {/* CPF DO PROFESSOR */}
      <InputField
        id='cpf'
        type='text'
        label='CPF'
        placeholder='insira o cpf do PROFESSOR...'
        defaultValue={data.cpf}
        readOnly={readOnly}
      />
      {errors.cpf && <p className='text-sm text-red-500'>{errors.cpf}</p>}

      <br />

      {/* RG DO PROFESSOR */}
      <InputField
        id='rg'
        type='text'
        label='RG'
        placeholder='insira o rg do PROFESSOR...'
        defaultValue={data.rg}
        readOnly={readOnly}
      />
      {errors.rg && <p className='text-sm text-red-500'>{errors.rg}</p>}

      <br />

      {/* DATA DE NASCIMENTO DO PROFESSOR */}
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
