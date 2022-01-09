import { Navigate } from "react-router-dom"
import { useAuth } from "../auth/useAuth"

export const PrivateRoute = ({ children }) => {

  const auth = useAuth()

  return auth ? children : <Navigate to="/login" />
}