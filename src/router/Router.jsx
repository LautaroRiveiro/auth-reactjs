import { Route, Routes } from "react-router-dom"
import { AdminPage } from "../pages/AdminPage"
import { HomePage } from "../pages/HomePage"
import { LoginPage } from "../pages/LoginPage"
import { NotFoundPage } from "../pages/NotFoundPage"
import { PrivateRoute } from "./PrivateRoute"
import { PublicRoute } from "./PublicRoute"

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={
        <PrivateRoute>
          <HomePage />
        </PrivateRoute>
      } />

      <Route path="/admin" element={
        <PrivateRoute hasRole="admin">
          <AdminPage />
        </PrivateRoute>
      } />

      <Route path="/login" element={
        <PublicRoute>
          <LoginPage />
        </PublicRoute>
      } />

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  )
}

export default Router