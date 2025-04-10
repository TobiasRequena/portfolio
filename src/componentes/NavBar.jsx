import './Estilos/navbar.css'
import {HomeFilled} from '@ant-design/icons'

function NavBar() {

    return(
        <div className="navbar">
            <a className="home-icon" href="#">
                <HomeFilled style={{ fontSize: '20px', color: '#000', fontWeight: 700 }} />
            </a>
            <a className='aExp' href="#experiencia">Experiencia</a>
            <a className='aPro' href="#proyectos">Proyectos</a>
            <a className='aSob' href="#sobremi">Sobre mi</a>
            <a className='aCon' href="#contacto">Contacto</a>
        </div>
    )

}

export default NavBar