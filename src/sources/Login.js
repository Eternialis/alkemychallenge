

const Login = () => {
    return (
        <div className="container-sm mt-5 loginContainer">
            <form className="container g-3 mx-auto">
                <div className="mb-3">
                    <label htmlFor="email" className="">Email:</label>
                    <input type="text" className="form-control" id="email" aria-label="ingresar email" />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="">Contraseña:</label>
                    <input type="password" className="form-control" id="password" />
                </div>
                <button type="submit" class="btn btn-primary mb-3">Confirm identity</button>
                <div id="passwordHelpBlock" class="form-text">
                    La contraseña debe poseer más de 2 caracteres.
                </div>
            </form>
        </div>
    )
}

export default Login