import { Link } from "react-router-dom"

const Navbar = () => {

    return (
        <nav className="navbar navbar-expand-sm navbar-light bg-light">
            <div className="container-fluid">
                <Link to={"/"} className="navbar-brand">Hotel</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item"><Link className="nav-link" to={"/"}>Home</Link></li>
                        <li className="nav-item"><Link className="nav-link" to={"/buscador"}>Buscar platos</Link></li>
                    </ul>
                </div>
            </div>
        </nav >
    )
}

export default Navbar