import { createContext, useState } from "react"

export const AuthContext = createContext()
export const AuthContextProvider = ({ children }) => {

  const [user, setUser] = useState(null)

  const logout = () => setUser(null)
  const login = (username, password) => {
    // TODO: Validar credenciales
    if (true) {
      setUser({})
    }
  }

  const context = {
    user,
    logout,
    login
  }

  return (
    <AuthContext.Provider value={context}>
      {children}
    </AuthContext.Provider>
  )
}