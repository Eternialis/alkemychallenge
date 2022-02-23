import { createContext, useEffect, useReducer } from "react"
import swal from "sweetalert"

const initialState = {

    platosMenu: [],
    precioTotal: 0,
    promedioTiempoPreparacion: 0,
    promedioHealthscore: 0,
    cantPlatos: 0,
    cantPlatosVeganos: 0,
}

const reducer = (state, action) => {
    const { plato, estado } = action
    const { healthScore, readyInMinutes, pricePerServing, vegan } = plato

    switch (estado) {
        case "agregar":
            const index = state.platosMenu.findIndex((platoGuardado) => platoGuardado.id === plato.id)
            let error = state.cantPlatos === 4 ? "El menú ya cuenta con cuatro platos" :
                index !== -1 ? "El plato ya fue agregado al menu" :
                    vegan && state.cantPlatosVeganos === 2 ? "Se ha alcanzado el máximo de platos veganos" :
                        !vegan && (state.cantPlatos - state.cantPlatosVeganos) === 2 ? "Se ha alcanzado el máximo de platos no veganos" : ""

            if (error) {
                swal("Máximo alcanzado", "Se ha alcanzado el máximo de platos no veganos", "error")
                return state
            } else {
                return {
                    platosMenu: [...state.platosMenu, plato],
                    precioTotal: state.precioTotal + pricePerServing,
                    promedioTiempoPreparacion: ((state.promedioTiempoPreparacion * state.cantPlatos) + readyInMinutes) / (state.cantPlatos + 1),
                    promedioHealthscore: ((state.promedioHealthscore * state.cantPlatos) + healthScore) / (state.cantPlatos + 1),
                    cantPlatos: state.cantPlatos + 1,
                    cantPlatosVeganos: vegan ? state.cantPlatosVeganos + 1 : state.cantPlatosVeganos
                }
            }
        case "quitar":
            return {
                platosMenu: state.platosMenu.filter((i) => i.id !== plato.id),
                precioTotal: state.precioTotal - pricePerServing,
                promedioTiempoPreparacion: ((state.promedioTiempoPreparacion * state.cantPlatos) - readyInMinutes) / (state.cantPlatos - 1),
                promedioHealthscore: ((state.promedioHealthscore * state.cantPlatos) - healthScore) / (state.cantPlatos - 1),
                cantPlatos: state.cantPlatos - 1,
                cantPlatosVeganos: vegan ? state.cantPlatosVeganos - 1 : state.cantPlatosVeganos
            }
        default:
            break
    }
}

export const context = createContext()
const { Provider } = context



const MenuContext = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, initialState)

    const contextValue = {
        ...state,
        dispatch
    }

    return (
        <Provider value={contextValue}>
            {children}
        </Provider>
    )
}

export default MenuContext