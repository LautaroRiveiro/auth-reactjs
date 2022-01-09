import { createContext, useState } from "react"

export const AuthContext = createContext()
export const AuthContextProvider = ({ children }) => {

  const [user, setUser] = useState(null)

  const context = {
    user,
    setUser
  }

  return (
    <AuthContext.Provider value={context}>
      {children}
    </AuthContext.Provider>
  )
}