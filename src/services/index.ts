import { api } from './api'

export const cardProducts = async () => {
  try {
    const response = await api.get('products')
    const { data } = response
    return data
  } catch (error) {
    console.log(error)
  }
}

// TODO Revisar ´pra ver se realmente vamos precisar
