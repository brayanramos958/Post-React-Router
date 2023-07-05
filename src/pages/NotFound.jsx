import { Link } from "react-router-dom"

const Error404 = () => { 
    return(
        <>
        <h1>Error404</h1>
        <Link className="btn btn-dark" to="/">Volver al inicio</Link>
        </>
    )
}

export default Error404