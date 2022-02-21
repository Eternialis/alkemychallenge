import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import swal from 'sweetalert'

const LOGIN_URL = "http://challenge-react.alkemy.org/"

const Login = () => {

    const navigate = useNavigate()

    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    const [inputs, setInputs] = useState({ email: "", password: "" })

    const handleChange = (e) => {
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!inputs.email || !inputs.password) {
            setError(true)
        } else {
            setLoading(true)
            setError(false)
            console.log(inputs)
            axios({
                method: 'post',
                url: LOGIN_URL,
                data: inputs
            })
                .then((response) => {
                    setLoading(false)
                    navigate("/")

                })
                .catch((error) => {
                    setLoading(false)
                    swal("Error", error.message, "error")
                })
        }



    }

    return (
        <div className="container-sm mt-5 loginContainer">
            <form className="container g-3 mx-auto" onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="email" className="">Email:</label>
                    <input type="text" className="form-control" id="email" name="email" aria-label="ingresar email" value={inputs.email} onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="">Contraseña:</label>
                    <input type="password" className="form-control" id="password" name="password" value={inputs.password} onChange={handleChange} />
                </div>
                <button type="submit" className="btn btn-primary mb-1 submitBtn" disabled={loading ? true : false}>{loading ? <span className="loader"></span> : "Enviar"}</button>
                {error ? <div className="alert alert-danger mt-2 mb-1" role="alert">
                    Por favor, complete ambos campos antes de continuar
                </div> : null}
            </form>
        </div>
    )
}

export default Login