import styled from 'styled-components'

export const CardContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  gap: 0.75rem;
  padding: 0.75rem;
  width: 14rem;
  height: 18.125rem;
  border-radius: 0.375rem;
  border: 0.0625rem solid #f4f4f4;
  background: ${({ theme }) => theme.colors.white};
  box-shadow: 0 0.25rem 0.5rem 0 rgba(99, 99, 99, 0.2);

  div {
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    flex-direction: column;
    gap: 0.75rem;
  }

  img {
    width: 60%;
    height: auto;
  }

  h2 {
    color: ${({ theme }) => theme.colors.text.primaryAccent};
    font-family: ${({ theme }) => theme.fonts.family.primary};
    font-weight: ${({ theme }) => theme.fonts.weight.light};
    font-size: ${({ theme }) => theme.fonts.text.small};
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  p {
    color: ${({ theme }) => theme.colors.text.primaryAccent};
    font-family: ${({ theme }) => theme.fonts.family.primary};
    font-weight: ${({ theme }) => theme.fonts.weight.bold};
    font-size: ${({ theme }) => theme.fonts.text.medium};
  }
`
