import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Loading from "./Loading"
import swal from "sweetalert"

const SPOONACULAR_KEY = process.env.REACT_APP_SPOONACULAR_KEY
const SPOONACULAR_URL_ITEM = process.env.REACT_APP_SPOONACULAR_URL_ITEM

const PlatoDetalle = () => {

    let { id } = useParams()
    const [plato, setPlato] = useState({})
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        axios.get(`${SPOONACULAR_URL_ITEM}${id}/information${SPOONACULAR_KEY}`)
            .then((result) => {
                setPlato(result.data)
            })
            .catch((error) => {
                swal("Error", error.message, "error")
            })
            .finally(() => {
                setLoading(false)
            })
    }, [])

    return (
        <>
            {loading ?
                <Loading /> :
                <>
                    <h1 className="fs-1 m-3">{plato.title}</h1>
                    <div className=".container-lg mx-auto d-flex p-3 detalleContainer">
                        <img src={plato.image} alt={plato.title} className="shadow p-3 mb-2 bg-body detailContainer__img" />
                        <div className="d-flex flex-column p-4">
                            <h3>Health Score: {plato.healthScore}</h3>
                            <h3>Tiempo de preparación: {plato.readyInMinutes} min.</h3>
                            <h3>Precio por plato: $ {plato.pricePerServing}</h3>
                            <h3>Vegano: {plato.vegan ? "Si" : "No"}</h3>
                        </div>
                    </div>
                </>}
        </>
    )
}

export default PlatoDetalle