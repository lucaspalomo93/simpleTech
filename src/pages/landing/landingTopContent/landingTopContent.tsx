import './landingTopContent.css';
import { Link } from 'react-router-dom';
import { LANDING } from '../../../constants/images';

const LandingTopContent = () => {
  return (
    <>
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
    </>
  );
};

export default LandingTopContent;
