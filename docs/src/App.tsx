import {
  Field,
  FieldGroup,
  FieldLabel,
  FieldDescription,
  FieldError
} from '@/registry/ui/field'

function App () {
  return (
    <div className='w-full h-screen flex flex-col gap-4 justify-center items-center'>
      <FieldGroup className='w-full max-w-sm'>
        <Field>
          <FieldLabel htmlFor='field-email'>Email</FieldLabel>
          <div className='w-96 h-16 bg-gray-200 rounded-2xl' />
          <FieldDescription>We'll never share your email.</FieldDescription>
        </Field>
        <Field>
          <FieldLabel htmlFor='field-username'>Username</FieldLabel>
          <div className='w-96 h-16 bg-gray-200 rounded-2xl' />
          <FieldError>This username is already taken.</FieldError>
        </Field>
      </FieldGroup>
    </div>
  )
}

export default App
