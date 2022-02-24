
import { useContext } from "react"
import { Link, useLocation } from "react-router-dom"
import swal from "sweetalert"
import { context } from "./MenuContext"

const PlatoCard = ({ id, title, image, summary, healthScore, readyInMinutes, pricePerServing, vegan }) => {

    let location = useLocation()

    const { dispatch } = useContext(context)

    const handleClick = (e) => {
        dispatch({
            plato: { id, title, image, summary, healthScore, readyInMinutes, pricePerServing, vegan },
            estado: e.target.value
        })
    }

    return (
        <div className="col-xxl-2 col-xl-3 col-md-4 col-sm-6 mb-4" >
            <div className="card mx-auto menuCard">
                <img src={image} className="card-img-top" alt={title} />
                <div className="card-body">
                    <h5 className="card-title text-decoration-none menuCard__title">{title}</h5>
                    <p className="card-text text-decoration-none menuCard__text" dangerouslySetInnerHTML={{ __html: summary }}></p>

                    <div className="btnContainer">
                        <Link to={`/plato/${id}`} id="verDetalle" className="btn btn-primary cardBtn">Ver detalle</Link>
                        {location.pathname === "/buscador" ?
                            <button onClick={handleClick} value="agregar" className="btn btn-primary cardBtn">Agregar al menú</button> :
                            <button onClick={handleClick} value="quitar" className="btn btn-primary cardBtn">Eliminar</button>}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PlatoCard