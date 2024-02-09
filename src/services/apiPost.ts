import axios, { AxiosError } from 'axios'
import { api } from './api'

export interface SignupProps {
  name: string
  email: string
  password: string
  passwordConfirmation: string
  profileImage?: string
  role?: string
  status?: string
}

export const postRequestSignup = async ({
  email,
  name,
  password,
  passwordConfirmation,
}: SignupProps) => {
  try {
    const response = await api.post('/users/signup', {
      name,
      email,
      password,
      passwordConfirmation,
    })

    return response
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const axiosError = error as AxiosError

      const errorMessage = axiosError.response?.data

      if (
        errorMessage &&
        typeof errorMessage === 'object' &&
        'message' in errorMessage
      ) {
        throw new Error(`${errorMessage.message}`)
      }
    }
    throw error
  }
}

export interface LoginProps {
  email: string
  password: string
}

export const postRequestLogin = async ({ email, password }: LoginProps) => {
  try {
    const response = await api.post('users/login', {
      email,
      password,
    })

    return response
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const axiosError = error as AxiosError

      const errorMessage = axiosError.response?.data

      if (
        errorMessage &&
        typeof errorMessage === 'object' &&
        'message' in errorMessage
      ) {
        throw new Error(`${errorMessage.message}`)
      }
    }
    throw error
  }
}
