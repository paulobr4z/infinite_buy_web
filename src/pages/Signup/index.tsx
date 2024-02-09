import { Form, ToastContainerStyled } from './styled'
import {
  MdOutlineEmail,
  MdOutlineVisibility,
  MdOutlineVisibilityOff,
} from 'react-icons/md'
import { RiLockPasswordLine, RiGroupLine } from 'react-icons/ri'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { Link, useNavigate } from 'react-router-dom'
import { routes } from '../../routes'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import { MessageErrors } from '../../components/MessageErrors'
import { SignupProps, postRequestSignup } from '../../services/apiPost'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { schemaValidationRegister } from '../../utils/schemaValidation'
import { CircularSpinner } from '../../components/CircularSpinner'
import { useState } from 'react'

export const Signup = () => {
  const navigate = useNavigate()
  const [loading, setLoading] = useState<boolean>(false)
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmationPassword, setShowConfirmationPassword] =
    useState(false)

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword)
  }
  const toggleConfirmationPasswordVisibility = () => {
    setShowConfirmationPassword(
      (prevShowConfirmationPassword) => !prevShowConfirmationPassword,
    )
  }
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schemaValidationRegister),
  })

  const onSubmit = async (data: SignupProps) => {
    try {
      setLoading(true)
      const responseApiRequest = await postRequestSignup({
        email: data.email,
        name: data.name,
        password: data.password,
        passwordConfirmation: data.passwordConfirmation,
      })
      toast.success(responseApiRequest.data.message)
      setTimeout(() => {
        navigate('/login')
      }, 3000)
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message)
      }
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <ToastContainerStyled autoClose={3000} />
      <Form onSubmit={handleSubmit(onSubmit)}>
        <h2>Cadastro</h2>
        <p>
          Já está cadastrado, faça <Link to={routes.login}>login</Link>
        </p>

        <Input
          {...register('name')}
          Icon={RiGroupLine}
          placeholder="Nome completo"
          type="text"
        />
        <MessageErrors>{errors.name?.message}</MessageErrors>
        <Input
          {...register('email')}
          Icon={MdOutlineEmail}
          placeholder="E-mail"
          type="email"
        />
        <MessageErrors>{errors.email?.message}</MessageErrors>

        <Input
          {...register('password')}
          Icon={RiLockPasswordLine}
          placeholder="Senha"
          type={showPassword ? 'text' : 'password'}
          iconRight={
            <button type="button" onClick={togglePasswordVisibility}>
              {showPassword ? (
                <MdOutlineVisibility />
              ) : (
                <MdOutlineVisibilityOff />
              )}
            </button>
          }
        />
        <MessageErrors>{errors.password?.message}</MessageErrors>
        <Input
          {...register('passwordConfirmation')}
          Icon={RiLockPasswordLine}
          type={showConfirmationPassword ? 'text' : 'password'}
          iconRight={
            <button
              type="button"
              onClick={toggleConfirmationPasswordVisibility}
            >
              {showConfirmationPassword ? (
                <MdOutlineVisibility />
              ) : (
                <MdOutlineVisibilityOff />
              )}
            </button>
          }
          placeholder="Confirme sua senha"
        />
        <MessageErrors>{errors.passwordConfirmation?.message}</MessageErrors>
        <Button size="large" type="submit">
          {loading ? <CircularSpinner cor={'white'} /> : 'Cadastrar'}
        </Button>
      </Form>
    </>
  )
}
