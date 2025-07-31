import Titulo from '../componentes/Titulo';
import Timeline from '../componentes/Timeline';
import { FiBriefcase } from 'react-icons/fi';
import './estilos/experiencia.css';

const ExperienciaLaboral = () => {
  const experiencias = [
    {
      fecha: 'Actualmente...',
      puesto: 'Desarrollador frontend en React',
      empresa: 'Solutions Malls',
      descripcion:
        'Desarrollo software del lado del front, según los requerimientos de nuestros distintos y diversos clientes ofreciendo así la posibilidad de visualizar de manera clara distintos datos.',
    },
    {
      fecha: 'Septiembre 2024 - Diciembre 2024',
      puesto: 'Desarrollador frontend en Angular',
      empresa: 'Maser Informatica',
      descripcion:
        'Desarrollaba y mantenía aplicaciones web en Angular, sobre todo ecommerces, colaborando con el equipo de desarrollo para implementar nuevas funcionalidades y mejorar la experiencia del usuario.',
    },
    {
      fecha: '2015 - 2024',
      puesto: 'Encargado del área de producción',
      empresa: 'Metalurgica Requena',
      descripcion:
        'Me encargaba del manejo de personal, control de stock, control de calidad y producción. Ademas de la atención al clientey distintos distribuidores de materias primas.',
    }
  ];

  return (
    <div className='contenedorExperienciaLaboral' id='experiencia'>
      <Titulo text={'Experiencia laboral'} icon={<FiBriefcase />} />
      <Timeline experiencias={experiencias} />
    </div>
  );
};

export default ExperienciaLaboral;