import { api } from './api'

export const cardProducts = async () => {
  try {
    const response = await api.get('products')
    const { data } = response
    console.log('data aqui', data)
    return data
  } catch (error) {
    console.log('Erro aqui na chamada ', error)
  }
}
