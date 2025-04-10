import './Estilos/footer.css'

const Footer = ({nombre}) => {
    return (
        <footer className="footer">
            <p>Desarrollado por {nombre}</p>
            <p>&copy; {new Date().getFullYear()} Todos los derechos reservados</p>
        </footer>
    );
}

export default Footer;