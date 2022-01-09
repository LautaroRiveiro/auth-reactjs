import { Navigate } from "react-router-dom"
import { useAuth } from "../auth/useAuth"

export const PublicRoute = ({ children }) => {

  const auth = useAuth()

  return auth ? <Navigate to="/" /> : children
}