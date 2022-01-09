import { Navigate, useLocation } from "react-router-dom"
import { useAuth } from "../auth/useAuth"

export const PublicRoute = ({ children }) => {
  const location = useLocation()
  const auth = useAuth()

  return auth ? <Navigate to={location.state.from || "/"} /> : children
}