import './landingBottomContent.css';
import { Link } from 'react-router-dom';

const LandingBottomContent = () => {
  return (
    <>
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
    </>
  );
};

export default LandingBottomContent;
