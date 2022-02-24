import PlatoCard from "./PlatoCard"


const PlatoLista = ({ menus }) => {

    return (
        <div className="row mx-auto mt-5">
            {Object.keys(menus).length !== 0 && menus.map(recipe => <PlatoCard id={recipe.id} title={recipe.title} image={recipe.image} />)}
        </div>
    )
}

export default PlatoLista