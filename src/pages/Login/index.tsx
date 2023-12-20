import { Link } from 'react-router-dom'
import { Form } from './styled'
import { MdOutlineEmail } from 'react-icons/md'
import { RiLockPasswordLine } from 'react-icons/ri'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { routes } from '../../routes'

export const Login = () => {
  return (
    <Form>
      <h2>Login</h2>
      <p>
        Entre ou <Link to={routes.signup}>cadastre aqui</Link>
      </p>

      <Input Icon={MdOutlineEmail} placeholder="E-mail" type="email" />
      <Input Icon={RiLockPasswordLine} placeholder="Senha" />
      <Button size="large">Entrar</Button>

      <a href="#">Recuperar senha </a>
    </Form>
  )
}
