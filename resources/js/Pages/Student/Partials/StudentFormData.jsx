import { Label, Radio, TextInput, Textarea } from 'flowbite-react'

// ================================================
export default function StudentFormData({ data = {}, errors = {}, readOnly }) {
  return (
    <section className='mb-4'>
      {/* NOME DO ALUNO */}
      <InputField
        id='name'
        type='text'
        label='Nome completo'
        placeholder='insira o nome do aluno...'
        defaultValue={data.name}
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
        defaultValue={data.email}
        readOnly={readOnly}
      />
      {errors.email && <p className='text-sm text-red-500'>{errors.email}</p>}

      <br />

      {/* TELEFONE CELULAR DO ALUNO */}
      <InputField
        id='phone'
        type='tel'
        label='Telefone celular'
        placeholder='insira o telefone do aluno...'
        defaultValue={data.phone}
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
      {errors.cpf && <p className='text-sm text-red-500'>{errors.cpf}</p>}

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
      {errors.rg && <p className='text-sm text-red-500'>{errors.rg}</p>}

      <br />

      {/* DATA DE NASCIMENTO DO ALUNO */}
      <InputField
        id='birthday'
        type='date'
        label='Data de nascimento'
        defaultValue={data.birthday}
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
        defaultValue={data.birthplace}
        readOnly={readOnly}
      />
      {errors.birthplace && (
        <p className='text-sm text-red-500'>{errors.birthplace}</p>
      )}

      <br />

      {/* BENEFíCIO DO GOVERNO DO ALUNO */}
      <InputField
        id='gov_benefits'
        type='text'
        label='Benefício'
        placeholder='insira os benefícios do governo do aluno...'
        defaultValue={data.gov_benefits}
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
        defaultValue={data.health_problems}
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
        defaultValue={data.note}
        readOnly={readOnly}
      />
      {errors.note && <p className='text-sm text-red-500'>{errors.note}</p>}
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
