import { Outlet } from "react-router-dom"

const LayautPublic = () => { 
    return(
        <div className="container">

            <Outlet  />
            <footer>Footer</footer>
        </div>
    )
}

export default LayautPublic