import { createContext, useContext, useEffect, useState } from 'react'

export interface UserProps {
  email: string
  name: string
  profileImage?: string
  role?: string
  status?: string
  _id: string
}

export interface AuthContextProps {
  user: UserProps | null
  setUser: (user: UserProps) => void
  isAuthenticated: boolean
  setIsAuthenticated: (isAuthenticated: boolean) => void
}

export const AuthContext = createContext<AuthContextProps>(
  {} as AuthContextProps,
)

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<UserProps | null>(null)
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false)

  useEffect(() => {
    const tokenUser = localStorage.getItem('token')
    const userData = localStorage.getItem('user')

    if (tokenUser) {
      setIsAuthenticated(true)
    } else {
      setIsAuthenticated(false)
    }

    if (userData) {
      setUser(JSON.parse(userData))
    }
  }, [])

  return (
    <AuthContext.Provider
      value={{ user, setUser, isAuthenticated, setIsAuthenticated }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export const useAuthContext = () => {
  const context = useContext(AuthContext)

  if (context === undefined) {
    throw new Error('Fora do AuthProvider')
  }

  return context
}
