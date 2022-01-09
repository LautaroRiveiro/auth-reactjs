# Sistema de autenticación básico

## Tecnologías
- ReactJs 17.0.2
- react-router-dom 6.2.1
- react-bootstrap 2.1.0

Creado con [Create React App](https://github.com/facebook/create-react-app).

## Importante
Basado en la serie [MERN Stack proyecto](https://www.youtube.com/playlist?list=PLdcAPGja1uw0LSn7kx-Plj76x8UZZLgz9)

## Incluye
- Validación de usuario autenticado: Redirección a login en caso de acceder a rutas protegidas sin estar logueado.
- Validación de usuario autenticado: Redirección a inicio en caso de entrar a login estando logueado.
- Validación de rol: Redirección a 403 en caso de no tener el rol requerido.
- Redirección a ruta original luego de haber sido enviado al login.
- Cierre de sesión.
- Página 404 en caso de ruta no válida