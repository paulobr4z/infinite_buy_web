import { styled } from 'styled-components'
import { InputContainerProps } from '../../../types'

export const InputContainer = styled.div<InputContainerProps>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  label {
    font-weight: 500;
    border-bottom: 0.25rem solid #00bea0;
    padding-right: 0.5rem;
    margin-bottom: 24px;
  }

  span {
    display: flex;
    align-items: center;
    width: 100%;
    padding-bottom: 0.625rem;
    border-bottom: 1px solid #dedede;

    input {
      width: 100%;
      border: none;
      outline: none;
      font-size: 1rem;
    }
  }
`
