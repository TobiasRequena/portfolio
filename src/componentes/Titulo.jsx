import './Estilos/titulo.css'

const Titulo = ({ text, icon}) => {
    return (
        <div className="contenedorTitulo">
            <div className="iconoContenedor">
                {icon}
            </div>
            <h1 className="tituloC">
                {text}
            </h1>
        </div>
    )
}

export default Titulo;