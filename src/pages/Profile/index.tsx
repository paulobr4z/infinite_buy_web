import { ProfileSideBar } from '../../components/ProfileSideBar'
import * as S from './styled'

export const Profile = () => {
  return (
    <S.Content>
      <main>
        <h3>Home &gt; Dados</h3>
        <ProfileSideBar />
      </main>
    </S.Content>
  )
}
