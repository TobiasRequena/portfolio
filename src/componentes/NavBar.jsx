import './Estilos/navbar.css';
import { useEffect, useState } from 'react';
import { HomeFilled } from '@ant-design/icons';

const Navbar = () => {
  const [hidden, setHidden] = useState(false);
  const [prevScroll, setPrevScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      const isScrollingDown = currentScroll > prevScroll;

      if (isScrollingDown && currentScroll > 50) {
        setHidden(true);
      } else {
        setHidden(false);
      }

      setPrevScroll(currentScroll);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScroll]);

  return (
    <div
      className={`navbar ${hidden ? 'hidden' : 'visible'}`}
    >
      <a className="home-icon" href="#">
        <HomeFilled style={{ fontSize: '20px', color: '#000', fontWeight: 700 }} />
      </a>
      <a className='aExp' href="#experiencia">Experiencia</a>
      <a className='aPro' href="#proyectos">Proyectos</a>
      <a className='aSob' href="#sobremi">Sobre mí</a>
      <a className='aCon' href="#contacto">Contacto</a>
    </div>
  );
};

export default Navbar;
