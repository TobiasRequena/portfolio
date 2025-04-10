import './estilos/sobremi.css';
import BotonAcc from '../componentes/Boton';
import {WhatsAppOutlined, LinkedinOutlined, DownloadOutlined } from "@ant-design/icons";

function SobreMi() {
    return(
        <div className="contenedorSobreMi" id='sobremi'>
            <div className="imagenCont">
            </div>
            <div className="title-resumen-buttons">
                <h1 className='hola'>Hola, soy Tobías!</h1>
                <p className='presentation'>
                    +6 meses de experiencia. <span>Desarrollador Frontend en React</span>. Especializado en la creación de webs únicas.
                </p>
                <div className="buttons" style={{display: "flex", gap: "10px"}}>
                    <BotonAcc
                        texto={"Contáctame"}
                        onClick={() => window.open("https://wa.me/543534019186", "_blank")}
                        icon={<WhatsAppOutlined/>}
                    />
                    <BotonAcc
                        texto={"Linkedin"}
                        onClick={() => window.open("https://www.linkedin.com/in/tobias-requena-800400262/")}
                        icon={<LinkedinOutlined/>}
                    />
                    <a href="../../assets/TOBÍAS_REQUENA_FS.pdf" download>
                        <BotonAcc
                            texto={"Ver CV"}
                            icon={<DownloadOutlined />}
                        />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default SobreMi;
