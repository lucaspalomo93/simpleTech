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
          <h2 className='landing-simpletech-title'>simpletech</h2>
          <p className='landing-p1'>
            Donde <br />
            tu techo <br />
            es posible
          </p>
          <div id='top-content-button' className='button-container top-button-container'>
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
