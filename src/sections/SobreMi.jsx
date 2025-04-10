import './estilos/sobremi.css';
import Titulo from '../componentes/Titulo';
import { FiUserCheck } from "react-icons/fi";

function SobreMi() {
    return(
        <div className="contenedorSobreMi" id='sobremi'>
            <Titulo text={"Sobre mí"} icon={<FiUserCheck />}/>
            <div className="contentChamuyo">
                <p>Me llamo Tobías Requena, <strong>soy desarrollador frontend</strong> y ya hace 2 años que me empece a formar y a construir productos a través del software. </p>
                <p>Crecí trabajando en la empresa familiar como herrero, por lo que me gusta el <strong>trabajo manual</strong>. Esto me permitió crecer en la <strong>atención al cliente</strong> y poder comprender sus necesidades.</p>
                <p>Actualmente en <strong>Solutions Malls</strong> me dedico a desarrollar diferentes pantallas <strong>utilizando React</strong>.</p>
                <p>Me fascina y apasiona el código, pero también <strong>disfruto del deporte y el compartir con pares</strong>.</p>
                <p>Mas y mejor software, para <strong>mas y mejor producto</strong>.</p>
            </div>
        </div>
    )
}

export default SobreMi;
