import { Link, useParams } from "react-router-dom"
import { useFetch} from '../hooks/useFetch'

const BlogDetails = () => { 

    const params = useParams()

    const {data, loading, error} = useFetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
    
    if(loading) return <p>Cargando datos...</p>
    if(error)  return <p>Error...</p>


    return(
        <>
        {
        
                <>
                <h2 className="text-uppercase" key={data.id}>{data.title}</h2>
                <p className="">{data.body}</p>
                <Link to="/blog" className="btn btn-success">Volver</Link>
                </>
            
        }

        </>
    )
}

export default BlogDetails