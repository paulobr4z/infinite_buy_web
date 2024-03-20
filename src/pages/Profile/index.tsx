import { PiPencilSimpleLine } from 'react-icons/pi'
import { ProfileSideBar } from '../../components/ProfileSideBar'
import { ProfileInput } from '../../components/Inputs/ProfileInput'
import * as S from './styled'

export const Profile = () => {
  return (
    <S.Content>
      <main>
        <div className="profileLeft">
          <h3>Home &gt; Dados</h3>
          <ProfileSideBar />
        </div>
        <div className="profileRight">
          <h4>Meus dados</h4>
          <div className="myDataForm">
            <p>Dados cadastrado</p>
            <form>
              <ProfileInput
                Icon={PiPencilSimpleLine}
                iconRight={<PiPencilSimpleLine color={'00bea0'} size={24} />}
                placeholder="oi@email.com.br"
                title="E-mail"
              />
              <ProfileInput
                Icon={PiPencilSimpleLine}
                iconRight={<PiPencilSimpleLine color={'00bea0'} size={24} />}
                placeholder="(99) 9 9999-9999"
                title="Celular"
              />
              <ProfileInput
                Icon={PiPencilSimpleLine}
                iconRight={<PiPencilSimpleLine color={'00bea0'} size={24} />}
                placeholder="********"
                title="Senha"
                type="password"
              />
            </form>
          </div>
        </div>
      </main>
    </S.Content>
  )
}
