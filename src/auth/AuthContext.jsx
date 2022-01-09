import { createContext, useState } from "react"

export const AuthContext = createContext()
export const AuthContextProvider = ({ children }) => {

  const [user, setUser] = useState({})

  const logout = () => setUser(null)

  const context = {
    user,
    logout
  }

  return (
    <AuthContext.Provider value={context}>
      {children}
    </AuthContext.Provider>
  )
}