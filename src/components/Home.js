import { useContext } from "react"
import { context } from "./MenuContext"
import PlatoCard from "./PlatoCard"

const Home = () => {

    const { platosMenu, precioTotal, promedioTiempoPreparacion, promedioHealthscore, cantPlatos } = useContext(context)

    return (
        <>
            <div className="container">
                <div className="row gx-2">
                    <div className="col">
                        <div className="p-2 bg-light">Precio total: $ {precioTotal}</div>
                    </div>
                    <div className="col">
                        <div className="p-2 bg-light">Promedio de tiempo de preparación: {promedioTiempoPreparacion.toFixed(2)} min.</div>
                    </div>
                    <div className="col">
                        <div className="p-2 bg-light">Promedio Healtscore: {promedioHealthscore.toFixed(2)}</div>
                    </div>
                </div>
            </div>
            <div className="row mx-auto mt-5">
                {cantPlatos !== 0 && platosMenu.map(menuItem => <PlatoCard key={menuItem.id} id={menuItem.id} title={menuItem.title} image={menuItem.image} summary={menuItem.summary} healthScore={menuItem.healthScore} readyInMinutes={menuItem.readyInMinutes} pricePerServing={menuItem.pricePerServing} vegan={menuItem.vegan} />)}
            </div>
        </>
    )
}

export default Home