import { DefaultTheme } from 'styled-components'

export const theme: DefaultTheme = {
  colors: {
    background: '#DADADA',
    primary: '#409A3C',
    secondary: '#52B69A',
    emphasis: {
      main: '#E82535',
      error: '#FF0000',
    },
    black: '#000000',
    white: '#FEFEFE',
    button: {
      disabled: '#6f6464',
    },
    iconColor: '#000',

    text: {
      main: '#333333',
      primaryAccent: '#000000',
      secondaryAccent: '#606060',
      light: '#ffffff',
    },
    border: {
      main: '#409A3C',
    },
  },
  fonts: {
    family: {
      primary: 'Roboto',
    },
    text: {
      errorSize: '1rem',
      extraSmall: '1.2rem',
      small: '1.4rem',
      medium: '1.6rem',
      large: '1.8rem',
    },
    header: {
      small: '2.2rem',
      medium: '2.4rem',
      large: '2.8rem',
    },

    weight: {
      light: 400,
      regular: 500,
      semiBold: 600,
      bold: 700,
    },
  },
}
