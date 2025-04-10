import './App.css'
import NavBar from './componentes/NavBar'
import Home from './sections/Home'
import Proyectos from './sections/Proyectos'
import ExperienciaLaboral from './sections/ExperienciaLaboral'

function App() {

  return (
    <div className="contenedorApp">
      <NavBar />
      <div className="contenido">
        <Home />
        <ExperienciaLaboral/>
        <Proyectos />
      </div>
    </div> 
  )
}

export default App
