import './landingFooter.css';
import { LANDING } from '../../../constants/images';

const LandingFooter = () => {
  return (
    <div className='landing-footer-container'>
      <div className='ltn-icon'>
        <img src={LANDING.LANDING_LTN_ICON} alt='landing_ltn_icon' />
      </div>
      <div className='arga-text-container'>
        <p className='arga-text-p'>
          <span className='arga-text-span'>ARGA </span> Mercado de Obra Acceso
          Este y Arturo González, Maipú
        </p>
      </div>
      <div className='subscribe-inputs'>
        <div className='footer-heart-text-container'>
          <div className='footer-heart-container'>
            <img src={LANDING.LANDING_HEARTH} alt='heart_icon' />
          </div>
          <div className='subscribe-text'>
            <p className='subscribe-text-p'>Subscribite a nuestro Newsletter</p>
          </div>
        </div>
        <div className='footer-input-container'>
          <input
            className='footer-input'
            type='email'
            id='email'
            name='email'
            placeholder='Email...'
          />
          <button type='button' className='input-icon'>
            <img src={LANDING.LANDING_INPUT_ARROW} alt='Enviar' />
          </button>
        </div>
      </div>
      <div className='social-networks'>
        <p className='social-text'>Seguinos</p>
        <div className='social-networks-icons'>
          <div>
            <a href='#'>
              <img
                className='social-networks-img'
                src={LANDING.INSTAGRAM_ICON}
                alt='instagram_icon'
              />
            </a>
          </div>
          <div>
            <a href='#'>
              <img
                className='social-networks-img'
                src={LANDING.FACEBOOK_ICON}
                alt='facebook_icon'
              />
            </a>
          </div>
          <div>
            <a href='#'>
              <img
                className='social-networks-img'
                src={LANDING.YOUTUBE_ICON}
                alt='youtube_icon'
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingFooter;
