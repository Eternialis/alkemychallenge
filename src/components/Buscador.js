import axios from "axios"
import { Field, Form, Formik } from "formik"
import { useState } from "react"
import PlatoCard from "./PlatoCard"
import * as Yup from "yup"
import swal from "sweetalert"
import Loading from "./Loading"

const SPOONACULAR_KEY = process.env.REACT_APP_SPOONACULAR_KEY
const SPOONACULAR_URL_ALL = process.env.REACT_APP_SPOONACULAR_URL_ALL + SPOONACULAR_KEY

const Buscador = () => {

    const [recipes, setRecipes] = useState([])
    const [notFound, setnotFound] = useState(false)
    const [loading, setLoading] = useState(false)

    const getRecipes = ({ browser, vegano }) => {

        axios.get(`${SPOONACULAR_URL_ALL}&query=${browser}&number=12&addRecipeInformation=true${vegano ? "&diet=vegan" : ""}`)
            .then((result) => {
                if (result.data.results.length > 0) {
                    console.log(result.data.results)
                    setnotFound(false)
                    setRecipes(result.data.results)

                } else {
                    setRecipes({})
                    setnotFound(true)
                }
            })
            .catch((error) => {
                swal("Error", error.message, "error")
            })
            .finally(() => {
                setLoading(false)
            })
    }

    return (
        <>
            <Formik
                initialValues={{
                    browser: "",
                    vegano: false
                }}
                validationSchema={Yup.object().shape({
                    browser: Yup.string().min(3, "Ingrese al menos tres letras para realizar la búsqueda.").required("Ingrese alguna palabra clave.")
                })}
                onSubmit={(values) => {
                    setLoading(true)
                    getRecipes(values)
                }}
            >
                {({ errors, touched }) => (
                    <>
                        <Form className="input-group flex-nowrap" >
                            <span className="input-group-text">Buscar plato:</span>
                            <Field className="form-control" name="browser" />
                            <div className="dietaContainer" >
                                <Field type="checkbox" id="vegano" name="vegano" />
                                <label htmlFor="vegano">Vegano</label>
                            </div>
                            <button type="submit">Buscar</button>
                        </Form>
                        {touched.browser && errors.browser ?
                            <div className="alert alert-danger m-2" role="alert"> {errors.browser} </div> :
                            undefined}
                    </>)}
            </Formik>
            {loading ? <Loading /> :
                <div className="row mx-auto mt-5">
                    {notFound ? <h2>No se ha encontrado ningun resultado para esta búsqueda</h2> :
                        <div className="row mx-auto mt-5">
                            {Object.keys(recipes).length !== 0 &&
                                recipes.map(recipeItem => <PlatoCard key={recipeItem.id} id={recipeItem.id} title={recipeItem.title} image={recipeItem.image} summary={recipeItem.summary} healthScore={recipeItem.healthScore} readyInMinutes={recipeItem.readyInMinutes} pricePerServing={recipeItem.pricePerServing} vegan={recipeItem.vegan} />)}
                        </div>}
                </div>}
        </>

    )
}

export default Buscador