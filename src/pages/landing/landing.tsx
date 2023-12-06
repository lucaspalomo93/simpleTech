import { CssBaseline } from '@mui/material';
import { LANDING } from '../../constants/images';
import './landing.css';
import LandingCarousel from './landingcarousel/landingcarousel';
import LandingTopContent from './landingTopContent/landingTopContent';
import LandingBottomContent from './landingBottomContent/landingBottomContent';
import LandingFooter from './landingFooter/landingFooter';

const Landing = () => {
  return (
    <>
      <CssBaseline />
      <div id='landing-container' className='landing-container'>
        <section id='landig-top-content' className='landing-top-content'>
          <LandingTopContent />
        </section>
        <section id='landing-middle-content' className='landing-middle-content'>
          <LandingCarousel />
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
          <LandingBottomContent />
        </section>
        <footer id='landing-footer' className='landing-footer'>
          <LandingFooter />
        </footer>
      </div>
    </>
  );
};

export default Landing;
