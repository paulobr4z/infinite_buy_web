import { Link } from 'react-router-dom'
import { Button } from '../../components/Button'
import { InProduction } from '../../components/InProduction'
import { routes } from '../../routes'
import * as S from './styled'

export const RecoverPassword = () => {
  return (
    <S.Content>
      <InProduction />
      <Button size="medium">
        <Link to={routes.login}>Voltar</Link>
      </Button>
    </S.Content>
  )
}
