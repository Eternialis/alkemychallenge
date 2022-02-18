import PlatoLista from "./PlatoLista"


const Buscador = () => {
    return (
        <>
            <div class="input-group flex-nowrap">
                <span class="input-group-text">Buscar plato:</span>
                <input type="text" class="form-control" />
            </div>
            <PlatoLista />
        </>

    )
}

export default Buscador