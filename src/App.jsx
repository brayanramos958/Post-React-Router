import { Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import Inicio from "./pages/inicio"
import Nosotros from "./pages/nosotros"
import Contacto from "./pages/contacto"
import LayautPublic from "./layouts/LayaoutPublic"
import Error404 from "./pages/NotFound"
import Blog from "./pages/blog"
import BlogDetails from "./pages/blogDetails"

const App = () => { 
  return(
    <>
    <Navbar />
    <Routes>
      <Route path="/" element={<LayautPublic />}>
        <Route element={<Inicio />} index ></Route>
        <Route element={<Nosotros />} path="/nosotros"></Route>
        <Route element={<Contacto />} path="/contacto"></Route>
        <Route element={<Blog />} path="/blog"></Route>
        <Route element={<BlogDetails />} path="/blog/:id"></Route>
        <Route element={ <Error404 />} path="*"></Route>
      </Route>
    </Routes>
    </>
  )
}

export default App