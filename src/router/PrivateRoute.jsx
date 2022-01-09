import { Navigate } from "react-router-dom"
import { useAuth } from "../auth/useAuth"
import { ForbiddenPage } from "../pages/ForbiddenPage"

export const PrivateRoute = ({ hasRole: role, children }) => {

  const auth = useAuth()

  if (role) {
    return auth?.role === role ? children : auth ? <ForbiddenPage /> : <Navigate to="/login" />
  }

  return auth ? children : <Navigate to="/login" />
}