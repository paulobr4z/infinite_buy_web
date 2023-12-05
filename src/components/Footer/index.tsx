import * as S from './styled'

export const Footer = () => {
  return (
    <S.Footer>
      <div className="container">
        <S.List>
          <S.ListLink>
            <S.Title>Institucional</S.Title>
          </S.ListLink>

          <S.ListLink>
            <a href="#">Trabalhe Conosco</a>
          </S.ListLink>
          <S.ListLink>
            <a href="#">Venda conosco</a>
          </S.ListLink>
          <S.ListLink>
            <a href="#">Trabalhe Conosco</a>
          </S.ListLink>
          <S.ListLink>
            <a href="#">Quem somos</a>
          </S.ListLink>
          <S.ListLink>
            <a href="#">Trabalhe Conosco</a>
          </S.ListLink>
          <S.ListLink>
            <a href="#">Quem somos</a>
          </S.ListLink>
        </S.List>

        <S.List>
          <S.Title>Categorias</S.Title>
          <S.ListLink>
            <a href="#">Alimentos</a>
          </S.ListLink>
          <S.ListLink>
            <a href="#">Beleza e perfumaria</a>
          </S.ListLink>
          <S.ListLink>
            <a href="#">Limpeza</a>
          </S.ListLink>
          <S.ListLink>
            <a href="#">Cuidados pessoais</a>
          </S.ListLink>
          <S.ListLink>
            <a href="#">Alimentos</a>
          </S.ListLink>
          <S.ListLink>
            <a href="#">Hortfruti</a>
          </S.ListLink>
        </S.List>
      </div>
    </S.Footer>
  )
}
