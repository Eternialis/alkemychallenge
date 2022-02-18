import PlatoLista from "./PlatoLista"

const Home = () => {
    return (
        <>
            <div class="container">
                <div class="row gx-2">
                    <div class="col">
                        <div class="p-2 bg-light">Precio total:</div>
                    </div>
                    <div class="col">
                        <div class="p-2 bg-light">Promedio de tiempo de preparación:</div>
                    </div>
                    <div class="col">
                        <div class="p-2 bg-light">Promedio Healtscore:</div>
                    </div>
                </div>
            </div>
            <PlatoLista />
        </>
    )
}

export default Home