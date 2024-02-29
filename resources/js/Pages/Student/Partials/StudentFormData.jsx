import { Label, Radio, TextInput, Textarea } from 'flowbite-react'

// ================================================
export default function StudentFormData({
  data = {},
  errors = {},
  onChange = () => {},
  readOnly,
}) {
  console.log(data.gender)
  return (
    <section className='mb-4'>
      {/* NOME DO ALUNO */}
      <InputField
        id='name'
        type='text'
        label='Nome completo'
        placeholder='insira o nome do aluno...'
        errors={errors}
        value={data.name}
        onChange={onChange}
        readOnly={readOnly}
      />
      {errors.name && <p className='text-sm text-red-500'>{errors.name}</p>}
      <br />

      {/* EMAIL DO ALUNO */}
      <InputField
        id='email'
        type='email'
        label='Email'
        placeholder='insira o email do aluno...'
        value={data.email}
        onChange={onChange}
        readOnly={readOnly}
      />
      <br />

      {/* TELEFONE CELULAR DO ALUNO */}
      <InputField
        id='phone'
        type='tel'
        label='Telefone celular'
        placeholder='insira o telefone do aluno...'
        value={data.phone}
        onChange={onChange}
        readOnly={readOnly}
      />
      {errors.phone && <p className='text-sm text-red-500'>{errors.phone}</p>}

      <br />

      {/* GÊNERO DO ALUNO */}
      <fieldset className='flex max-w-md flex-col gap-3'>
        <Label htmlFor='gender'>Gênero do aluno</Label>
        <div className='flex items-center gap-2'>
          <Radio
            id='gender-male'
            name='gender'
            value='Mmmm'
            defaultChecked={data.gender === 'M'}
            onClick={onChange}
            disabled={readOnly}
          />
          <Label htmlFor='gender-male'>Masculino</Label>
        </div>
        <div className='flex items-center gap-2'>
          <Radio
            id='gender-female'
            name='gender'
            value='F'
            defaultChecked={data.gender === 'F'}
            onClick={onChange}
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
        value={data.cpf}
        onChange={onChange}
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
        value={data.rg}
        onChange={onChange}
        readOnly={readOnly}
      />
      {errors.cpf && <p className='text-sm text-red-500'>{errors.cpf}</p>}

      <br />

      {/* DATA DE NASCIMENTO DO ALUNO */}
      <InputField
        id='birthday'
        type='date'
        label='Data de nascimento'
        // placeholder='insira a data de nascimento do aluno...'
        value={data.birthday}
        onChange={onChange}
        readOnly={readOnly}
      />
      {errors.birthday && (
        <p className='text-sm text-red-500'>{errors.birthday}</p>
      )}

      <br />

      {/* LOCAL DE NASCIMENTO DO ALUNO */}
      <InputField
        id='birthplace'
        type='text'
        label='Local de nascimento'
        placeholder='insira o local de nascimento do aluno...'
        value={data.birthplace}
        onChange={onChange}
        readOnly={readOnly}
      />
      {errors.birthplace && (
        <p className='text-sm text-red-500'>{errors.birthplace}</p>
      )}

      <br />

      {/* ENDEREÇO DO ALUNO */}
      <InputField
        id='address_street'
        type='text'
        label='Endereço'
        placeholder='insira o endereço do aluno...'
        value={data.address_street}
        onChange={onChange}
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
        value={data.address_city}
        onChange={onChange}
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
        value={data.address_state}
        onChange={onChange}
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
        value={data.address_zip_code}
        onChange={onChange}
        readOnly={readOnly}
      />
      {errors.address_zip_code && (
        <p className='text-sm text-red-500'>{errors.address_zip_code}</p>
      )}

      <br />

      {/* BENEFíCIO DO GOVERNO DO ALUNO */}
      <InputField
        id='gov_benefits'
        type='text'
        label='Benefício'
        placeholder='insira os benefícios do governo do aluno...'
        value={data.gov_benefits}
        onChange={onChange}
        readOnly={readOnly}
      />
      {errors.gov_benefits && (
        <p className='text-sm text-red-500'>{errors.gov_benefits}</p>
      )}

      <br />

      {/* PROBLEMAS DE SAúDE DO ALUNO */}
      <InputField
        id='health_problems'
        type='text'
        label='Problemas de saúde'
        placeholder='insira os problemas de saúde do aluno...'
        value={data.health_problems}
        onChange={onChange}
        readOnly={readOnly}
      />
      {errors.health_problems && (
        <p className='text-sm text-red-500'>{errors.health_problems}</p>
      )}

      <br />

      {/* OBSERVAÇÕES REFERENTES AO ALUNO */}
      <div className='mb-2 block'>
        <Label htmlFor='note' value='Observações' />
      </div>
      <Textarea
        id='note'
        name='note'
        placeholder='insira as observações...'
        rows={4}
        value={data.note}
        onChange={onChange}
        readOnly={readOnly}
      />
      {errors.note && <p className='text-sm text-red-500'>{errors.note}</p>}
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
