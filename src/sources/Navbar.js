import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-sm navbar-light bg-light">
            <div class="container-fluid">
                <Link to={"/"} class="navbar-brand">Hotel</Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <ul className="navbar-nav">
                        <li className="nav-item"><Link className="nav-link" to={"/"}>Home</Link></li>
                        <li className="nav-item"><Link className="nav-link" to={"/buscador"}>Buscar platos</Link></li>
                        <li className="nav-item"><Link className="nav-link" to={"/login"}>Login</Link></li>
                    </ul>
                </div>
            </div>
        </nav >
    )
}

export default Navbar