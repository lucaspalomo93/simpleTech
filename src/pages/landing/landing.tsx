import { CssBaseline, useMediaQuery, useTheme } from '@mui/material';
import { LANDING } from '../../constants/images';
import Inspiration from '../inspiration/inspiration';
import './landing.css';
import { useContext, useState } from 'react';
import { SimpleTechContext } from '../../context/context';
import { Link } from 'react-router-dom';

const Landing = () => {
  const { state, setState } = useContext(SimpleTechContext);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [showSidebar, setShowSidebar] = useState(!isMobile);

  const handleToggleSidebar = (event: any) => {
    event.stopPropagation();
    setShowSidebar(!showSidebar);
  };

  const handleInspiracionClick = () => {
    setState({
      ...state,
      sectionSelected: 'INSPIRACIÓN',
    });
  };

  return (
    <>
      <CssBaseline />
      <div id='landing-container' className='landing-container'>
        <section id='landig-top-content' className='landing-top-content'>
          <div id='top-content-left' className='top-content-left'>
            <h2 className='landing-simpletech-title'>simpletech</h2>
            <p className='landing-p1'>
              Donde <br />
              tu techo <br />
              es posible
            </p>
            <div id='top-content-button' className='button-container'>
              <Link to='/presentation' className='landing-catalogo-button'>
                VER CATÁLOGO
              </Link>
            </div>
          </div>
          <div id='top-content-right' className='top-content-right'>
            <img
              className='casa-simpletech'
              src={LANDING.CASA_SIMPLETECH}
              alt='casa_simpletech'
            />
          </div>
        </section>
        <section id='landing-middle-content' className='landing-middle-content'>
          <p className='landing-inspiration-text'>
            Inspirate con nuestros proyectos
          </p>
          <Inspiration
            handleToggleSidebar={handleToggleSidebar}
            handleInspiracionClick={handleInspiracionClick}
          />
        </section>
        <section
          id='landing-bottom-content'
          className='landing-bottom-content'
          style={{
            backgroundImage: `url(${LANDING.BOTTOM_BACKGROUND})`,
            backgroundColor: '#1E1E1E',
            backgroundSize: 'contain',
            backgroundPosition: 'center',
          }}
        >
          <div className='bottom-text-container'>
            <p className='landing-bottom-text'>
              <span className='landing-bottom-span'>Simpletech</span> es una
              solución integral para la construcción, renovación y ampliación de
              espacios en el ámbito residencial.
            </p>
          </div>
          <div id='bottom-content-button' className='button-container'>
            <Link to='/' className='landing-catalogo-button'>
              CONTACTANOS
            </Link>
          </div>
          <div></div>
        </section>
        <footer id='landing-footer' className='landing-footer'>
          Footer
        </footer>
      </div>
    </>
  );
};

export default Landing;
