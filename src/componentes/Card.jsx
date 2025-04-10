import './Estilos/card.css';
import { GithubOutlined } from '@ant-design/icons';
import Boton from './Boton';
import img from '../assets/sodap.jpg'

export const Card = () => {
  return (
    <div className='contenedorCard'>
      <div className='contentText'>
        <h3 className='tituloCard'>SodApp</h3>
        <div className='contentTec'>
          <p className='tecCard'>React</p>
          <p className='tecCard'>NodeJs</p>
          <p className='tecCard'>MySQL</p>
        </div>
        <p className='descripcionCard'>
          Software para administrar clientes y productos, gestionando pedidos y entregas. Relacionado al rubro de la soda.
        </p>
        <div className='botonCard'>
          <Boton
            texto='Codigo'
            icon={<GithubOutlined />}
            onClick={() =>
              window.open('https://github.com/TobiasRequena/sodApp')
            }
          />
        </div>
      </div>
      <div className='contentImg'>
        <img className='imgCard' src={img} alt="SodApp" />
      </div>
    </div>
  );
};
