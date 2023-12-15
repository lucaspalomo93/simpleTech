import './landingTopContent.css';
import { Link } from 'react-router-dom';
import { LANDING } from '../../../constants/images';
import { useMediaQuery, useTheme } from '@mui/material';

const LandingTopContent = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const topContentLeftStyle = {
    backgroundImage: isMobile ? `url(${LANDING.CASA_SIMPLETECH})` : 'none',
    backgroundSize: isMobile ? 'cover' : 'auto',
  };
  return (
    <>
      <div className='main-top-content-container'>
        <div
          id='top-content-left'
          className='top-content-left'
          style={topContentLeftStyle}
        >
          <div id='simpletech-logo-top-content'>
            <img src={LANDING.SIMPLETECH_TEXT_LOGO} alt='simpletech_logo' />
          </div>
          <div className='landing-p1-container'>
            <p className='landing-p1'>Donde</p>
            <p className='landing-p1'>tu techo</p>
            <p className='landing-p1'> es posible</p>
          </div>
          <div
            id='top-content-button'
            className='button-container top-button-container'
          >
            <Link to='/presentation' className='landing-catalogo-button'>
              VER CATÁLOGO
            </Link>
          </div>
        </div>
        {!isMobile && (
          <div id='top-content-right' className='top-content-right'>
            <img
              className='casa-simpletech'
              src={LANDING.CASA_SIMPLETECH}
              alt='casa_simpletech'
            />
          </div>
        )}
      </div>
      <div className='top-content-detail-container'>
        <img
          className='top-content-detail-img'
          src={LANDING.LANDING_RED_DETAIL}
          alt=''
        />
      </div>
    </>
  );
};

export default LandingTopContent;
