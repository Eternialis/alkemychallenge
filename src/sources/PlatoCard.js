import { Link, useLocation } from "react-router-dom"
import swal from "sweetalert"

const PlatoCard = ({ id, title, image, summary }) => {

    let location = useLocation();

    const handleClick = () => {
        // setMenus([
        //     ...menus,
        //     { id, title, image }
        // ])
        swal("Agregado", `${title} añadido correctamente`, "success")
    }

    return (
        <Link to={`/plato/${id}`} className="col-xxl-2 col-xl-3 col-md-4 col-sm-6 mb-4" >
            <div className="card mx-auto menuCard">
                <img src={image} className="card-img-top" alt={title} />
                <div className="card-body">
                    <h5 className="card-title text-decoration-none menuCard__title">{title}</h5>
                    <p className="card-text text-decoration-none menuCard__text" dangerouslySetInnerHTML={{ __html: summary }}></p>

                    <div className="btnContainer">
                        {location.pathname === "/buscador" ?
                            <button onClick={handleClick} id="agregarAlMenu" className="btn btn-primary">Agregar al menú</button> :
                            <button id="eliminar" className="btn btn-primary">Eliminar</button>}
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default PlatoCard