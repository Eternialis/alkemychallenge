import { useContext } from "react"
import { context } from "./MenuContext"
import PlatoCard from "./PlatoCard"

const Home = () => {

    const { platosMenu, precioTotal, promedioTiempoPreparacion, promedioHealtscore, cantPlatos } = useContext(context)

    return (
        <>
            <div className="container">
                <div className="row gx-2">
                    <div className="col">
                        <div className="p-2 bg-light">Precio total: $ {precioTotal}</div>
                    </div>
                    <div className="col">
                        <div className="p-2 bg-light">Promedio de tiempo de preparación: {promedioTiempoPreparacion} min.</div>
                    </div>
                    <div className="col">
                        <div className="p-2 bg-light">Promedio Healtscore: {promedioHealtscore}</div>
                    </div>
                </div>
            </div>
            <div className="row mx-auto mt-5">
                {cantPlatos !== 0 && platosMenu.map(menuItem => <PlatoCard id={menuItem.id} title={menuItem.title} image={menuItem.image} />)}
            </div>
        </>
    )
}

export default Home