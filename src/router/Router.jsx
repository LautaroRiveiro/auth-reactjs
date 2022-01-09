import { Route, Routes } from "react-router-dom"
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