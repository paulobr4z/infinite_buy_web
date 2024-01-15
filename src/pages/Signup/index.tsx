import { Form } from './styled'
import { MdOutlineEmail } from 'react-icons/md'
import { RiLockPasswordLine, RiGroupLine } from 'react-icons/ri'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { Link, useNavigate } from 'react-router-dom'
import { routes } from '../../routes'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import { MessageErrors } from '../../components/MessageErrors'
import { SignupProps, postRequestSignup } from '../../services/apiPost'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { schemaValidationRegister } from '../../utils/schemaValidation'
import { CircularSpinner } from '../../components/CircularSpinner'
import { useState } from 'react'

export const Signup = () => {
  const navigate = useNavigate()
  const [loading, setLoading] = useState<boolean>(false)

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
      <ToastContainer autoClose={3000} />
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
        />
        <MessageErrors>{errors.password?.message}</MessageErrors>
        <Input
          {...register('passwordConfirmation')}
          Icon={RiLockPasswordLine}
          placeholder="Confirme sua senha"
        />
        <MessageErrors>{errors.passwordConfirmation?.message}</MessageErrors>
        <Button size="large" type="submit">
          {loading ? <CircularSpinner /> : 'Cadastrar'}
        </Button>
      </Form>
    </>
  )
}
