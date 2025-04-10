import './App.css'
import NavBar from './componentes/NavBar'
import SobreMi from './sections/SobreMi'
import { ExperienciaLaboral } from './sections/ExperienciaLaboral'

function App() {

  return (
    <div className="contenedorApp">
      <NavBar />
      <div className="contenido">
        <SobreMi />
        <ExperienciaLaboral/>
      </div>
    </div> 
  )
}

export default App
