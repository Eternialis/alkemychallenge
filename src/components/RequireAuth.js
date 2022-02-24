import { Navigate } from "react-router-dom"
import swal from "sweetalert"

const RequireAuth = ({ children }) => {

    const userToken = localStorage.getItem("userToken")

    if (!userToken) {
        swal("Acceso restringido", "Inicia sesión para acceder a nuestro sitio", "warning")
        return <Navigate to="/login" />
    }

    return children
}

export default RequireAuth