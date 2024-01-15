import { Link, useNavigate } from 'react-router-dom'
import { Form } from './styled'
import { MdOutlineEmail } from 'react-icons/md'
import { RiLockPasswordLine } from 'react-icons/ri'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { routes } from '../../routes'
import { LoginProps, postRequestLogin } from '../../services/apiPost'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { CircularSpinner } from '../../components/CircularSpinner'
import { MessageErrors } from '../../components/MessageErrors'
import { useForm } from 'react-hook-form'
import { useState } from 'react'
import { schemaValidationLogin } from '../../utils/schemaValidation'
import { yupResolver } from '@hookform/resolvers/yup'

export const Login = () => {
  const [loading, setLoading] = useState<boolean>(false)
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schemaValidationLogin),
  })

  const onSubmit = async (data: LoginProps) => {
    try {
      setLoading(true)
      const responseApiRequest = await postRequestLogin({
        email: data.email,
        password: data.password,
      })

      if (responseApiRequest?.status === 200) {
        localStorage.setItem('token', responseApiRequest?.data.token)
        localStorage.setItem(
          'user',
          JSON.stringify(responseApiRequest?.data.user),
        )

        navigate('/home')
      }
    } catch (error) {
      console.error('Error Details:', error)
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
        <h2>Login</h2>
        <p>
          Entre ou <Link to={routes.signup}>cadastre aqui</Link>
        </p>

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

        <Button size="large" type="submit">
          {loading ? <CircularSpinner /> : 'Entrar'}
        </Button>
        <a href="#">Recuperar senha </a>
      </Form>
    </>
  )
}
