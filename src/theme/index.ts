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
      errorSize: '10px',
      extraSmall: '12px',
      small: '14px',
      medium: '16px',
      large: '18px',
    },
    header: {
      small: '22px',
      medium: '24px',
      large: '28px',
    },

    weight: {
      light: 400,
      regular: 500,
      semiBold: 600,
      bold: 700,
    },
  },
}
