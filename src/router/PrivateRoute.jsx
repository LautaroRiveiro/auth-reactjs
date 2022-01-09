import { Navigate } from "react-router-dom"
import { useAuth } from "../auth/useAuth"
import { ForbiddenPage } from "../pages/ForbiddenPage"

export const PrivateRoute = ({ hasRole: role, children }) => {

  const auth = useAuth()

  if (role && auth) {
    return auth.role === role ? children : <ForbiddenPage />
  }

  return auth ? children : <Navigate to="/login" />
}