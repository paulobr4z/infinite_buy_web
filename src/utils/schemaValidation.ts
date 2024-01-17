import * as Yup from 'yup'
import { errorsMessage } from './message'

export const schemaValidationRegister = Yup.object().shape({
  name: Yup.string()
    .matches(/^[A-Za-z]{3,}(\s+[A-Za-z]+)+$/, errorsMessage.name.required)
    .required(errorsMessage.name.required),
  email: Yup.string()
    .test('email', errorsMessage.email.invalid, (value) => {
      return /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value || '')
    })
    .required(errorsMessage.email.required),
  password: Yup.string()
    .required(errorsMessage.password.required)
    .min(8, errorsMessage.password.min),
  passwordConfirmation: Yup.string()
    .oneOf([Yup.ref('password')], errorsMessage.passwordConfirmation.ref)
    .required(errorsMessage.passwordConfirmation.required),
})

export const schemaValidationLogin = Yup.object().shape({
  email: Yup.string()
    .test('email', errorsMessage.email.invalid, (value) => {
      return /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value || '')
    })
    .required(errorsMessage.email.required),
  password: Yup.string()
    .required(errorsMessage.password.required)
    .min(8, errorsMessage.password.min),
})
