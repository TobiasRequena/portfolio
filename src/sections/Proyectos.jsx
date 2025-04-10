import './estilos/proyectos.css'
import { Card } from '../componentes/Card'
import Titulo from '../componentes/Titulo'
import { FiCode } from "react-icons/fi";

const Proyectos = () => {
    return (
        <div id='proyectos' className='contenedorProyectos'>
            <Titulo text="Proyectos" icon={<FiCode />} />
            <Card/>
        </div>
    )
}

export default Proyectos;