import { Form } from './styled'
import { MdOutlineEmail } from 'react-icons/md'
import { RiLockPasswordLine, RiGroupLine } from 'react-icons/ri'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { Link } from 'react-router-dom'
import { routes } from '../../routes'

export const Signup = () => {
  return (
    <Form>
      <h2>Cadastro</h2>
      <p>
        Já está cadastrado, faça <Link to={routes.login}>login</Link>
      </p>

      <Input Icon={RiGroupLine} placeholder="Nome completo" type="text" />
      <Input Icon={MdOutlineEmail} placeholder="E-mail" type="email" />
      <Input Icon={RiLockPasswordLine} placeholder="Senha" />
      <Input Icon={RiLockPasswordLine} placeholder="Confirme sua senha" />
      <Button size="large">Entrar</Button>
    </Form>
  )
}
