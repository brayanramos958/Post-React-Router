import { Link, useSearchParams } from 'react-router-dom'
import { useFetch} from '../hooks/useFetch'
import { useEffect } from 'react'


const Blog = () => { 


    const [searchParams, setSearchParams] = useSearchParams()

    /*useEffect(() =>{
        console.log(searchParams.get("nombre"));
    },[searchParams])*/


    const {data, loading, error} = useFetch('https://jsonplaceholder.typicode.com/posts')

    if(loading) return <p>Cargando datos...</p>
    if(error)  return <p>Error...</p>

    const handleChange = (e) => {
        let filter = e.target.value

        if (filter) {
            setSearchParams({ filter:filter });
        } else {
            setSearchParams({});
        }
    }

    return(
        <>
        <h1>Blog</h1>
        <input className='my-2 form-control' 
        type='text' name='' 
        onChange={handleChange}
        value={searchParams.get("filter") || ""}
        
        />
        <div>
        <ul className='list-group'>
            {
                data
                
                .filter((item) => {
                    let filter = searchParams.get("filter");
                    if (!filter) return true;
                    let name = item.title.toLowerCase();
                    return name.startsWith(filter.toLowerCase());
                })
                
                .map(item =>(
                    <Link
                    className='list-group-item text-uppercase '
                    to={`/blog/${item.id}`} 
                    key={item.id}>{item.title}</Link>
                ) )
            }
        </ul>
        </div>
        </>
    )
}

export default Blog