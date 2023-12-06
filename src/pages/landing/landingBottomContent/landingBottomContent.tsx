import { LANDING } from '../../../constants/images';
import './landingBottomContent.css';
import { Link } from 'react-router-dom';

const LandingBottomContent = () => {
  return (
    <>
      <div className='landing-bottom-blue-detail-container'>
        <img src={LANDING.LANDING_BLUE_DETAIL} alt='landing_blue_detail' />
      </div>
      <div className='bottom-content-container'>
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
      </div>
    </>
  );
};

export default LandingBottomContent;
