import { Link , NavLink} from "react-router-dom";

const Navbar = () => { 
    return(
        <>
        <div className="navbar navbar-dark bg-dark">
            <NavLink className="btn btn-outline-primary" to="/">Inicio</NavLink>
            <NavLink className="btn btn-outline-primary"  to="/nosotros">Nosotros</NavLink>
            <NavLink className="btn btn-outline-primary"  to="/blog">Blog</NavLink>
            <NavLink className="btn btn-outline-primary"  to="/contacto">Contacto</NavLink>
        </div>
        </>
    )
}

export default Navbar