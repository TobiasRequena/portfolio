import './Estilos/card.css';
import { GithubOutlined } from '@ant-design/icons';
import Boton from './Boton';

export const Card = () => {
  return (
    <div className='contenedorCard'>
      <div className='contentImg'></div>
      <div className='contentText'>
        <h3 className='tituloCard'>SodApp</h3>
        <div className='contentTec'>
          <p className='tecCard'>React</p>
          <p className='tecCard'>NodeJs</p>
          <p className='tecCard'>MySQL</p>
        </div>
        <p className='descripcionCard'>
          Software para administrar y gestionar los pedidos y las entregas de
          productos relacionados a la soderia.
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
    </div>
  );
};
