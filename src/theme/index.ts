import { DefaultTheme } from 'styled-components'

export const theme: DefaultTheme = {
  colors: {
    background: '#DADADA',
    primary: '#00BEA0',
    secondary: '#52B69A',
    headers: '#0E3C1F',
    emphasis: {
      main: '#E82535',
      error: '#FF0000',
    },
    black: '#000000',
    white: '#FEFEFE',
    button: {
      disabled: '#6f6464',
      categorie: '#0E3C1F',
    },
    iconColor: '#000',

    text: {
      main: '#333333',
      primaryAccent: '#000000',
      secondaryAccent: '#606060',
      light: '#ffffff',
    },
    border: {
      main: '#00BEA0',
    },
  },
  fonts: {
    family: {
      primary: 'Roboto',
    },
    text: {
      errorSize: '0.625rem',
      extraSmall: '0.75rem',
      small: '0.875rem',
      medium: '1rem',
      large: '1.125rem',
    },
    header: {
      small: '1.375rem',
      medium: '1.5rem',
      large: '1.75rem',
    },

    weight: {
      light: 400,
      regular: 500,
      semiBold: 600,
      bold: 700,
    },
  },
}
