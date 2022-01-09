import { useContext } from "react"
import { Button } from "react-bootstrap"
import { AuthContext } from "../auth/AuthContext"

export const LoginPage = ()=>{
  
  const {login} = useContext(AuthContext)

  const handleLogin = ()=>{
    // TODO: Recuperar datos de un formulario
    login('', '')
  }
  
  return (
    <div>
      <h1>LoginPage</h1>
      <Button onClick={handleLogin}>Ingresar</Button>
    </div>
  )
}