import './defaultSolutionDisplay.css';
import { ICON } from '../../../constants/images';

function DefaultSolutionDisplay() {


  return (
    <div className='default-container'>
      <div id='default-solution-arrow' className='icon-img'>
        <img src={ICON.DOWN_ARROW} alt='down_arrow' />
      </div>
      <div className='default-solution-text' id='default-solution-text'>
        <p style={{fontFamily: 'Raleway, sans-serif', fontWeight: 'bold'}} className='text' content='h3'>
          Te presentamos <br></br>nuestras soluciones
        </p>
      </div>
    </div>
  );
}

export default DefaultSolutionDisplay;
