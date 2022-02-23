import axios from "axios"
import { useState } from "react"
import { useParams } from "react-router-dom"

const SPOONACULAR_KEY = process.env.REACT_APP_SPOONACULAR_KEY
const SPOONACULAR_URL_ITEM = process.env.REACT_APP_SPOONACULAR_URL_ITEM + SPOONACULAR_KEY

const PlatoDetalle = () => {

    let { id } = useParams()
    const [plato, setPlato] = useState({})
    const [loading, setLoading] = useState(true)

    axios.get(`${SPOONACULAR_URL_ITEM}${id}/information${SPOONACULAR_KEY}`)
        .then((result) => {
            setPlato(result.data)
        })
        .finally(() => {
            setLoading(false)
        })

    return (
        <>
            {loading ?
                <div className="loadingContainer mt-5">
                    <div className="spinner-grow  ms-2" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div><div className="spinner-grow ms-2" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div><div className="spinner-grow ms-2" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div> :
                <div className=".container-lg mx-auto d-flex p-3">
                    <img src={plato.image} alt={plato.title} className="shadow p-3 mb-5 bg-body detailContainer__img" />
                    <div className="d-flex flex-column p-4">
                        <h1>{plato.title}</h1>
                        <h3>Health Score: {plato.healthScore}</h3>
                        <h3>Tiempo de preparación: {plato.readyInMinutes}</h3>
                        <h3>Precio por plato: {plato.pricePerServing}</h3>
                        <h3>Vegano: {plato.vegan ? "Si" : "No"}</h3>
                    </div>
                </div>}
        </>
    )
}

export default PlatoDetalle