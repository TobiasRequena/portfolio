import { Timeline } from 'antd';
import './Estilos/timeline.css';

function TimelineP({ experiencias }) {
  const items = experiencias.map((exp, index) => ({
    children: (
      <div className='itemTimeline' key={index}>
        <div className='contentTitulado'>
          <h3 className='titulo'>{exp.puesto}</h3>
          <h6 className='empresa'>{exp.empresa}</h6>
          <p className='fecha'>{exp.fecha}</p>
        </div>
        <div className='contentDescri'>
          <p className='descripcion'>{exp.descripcion}</p>
        </div>
      </div>
    ),
    color: 'black',
  }));

  return <Timeline mode='left' items={items} />;
}

export default TimelineP;
