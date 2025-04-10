import './App.css'
import NavBar from './componentes/NavBar'
import Home from './sections/Home'
import Proyectos from './sections/Proyectos'
import ExperienciaLaboral from './sections/ExperienciaLaboral'
import SobreMi from './sections/SobreMi'
import Footer from './componentes/Footer'
import { Analytics } from "@vercel/analytics/react"

function App() {

  return (
    <>
      <div className="contenedorApp">
        <NavBar />
        <div className="contenido">
          <Home />
          <ExperienciaLaboral/>
          <Proyectos />
          <SobreMi />
        </div>
      </div> 
      <Footer nombre={"Tobías"}/>
      <Analytics/>
    </>


  )
}

export default App
