import './defaultSolutionDisplay.css';
import { ICON } from '../../../constants/images';
import { Typography } from '@mui/material';

function DefaultSolutionDisplay() {


  return (
    <div className='default-container'>
      <div id='default-solution-arrow' className='icon-img'>
        <img src={ICON.DOWN_ARROW} alt='down_arrow' />
      </div>
      <div className='default-solution-text' id='default-solution-text'>
        <Typography className='text' variant='h3' content='h3'>
          Te presentamos <br></br>nuestras soluciones
        </Typography>
      </div>
    </div>
  );
}

export default DefaultSolutionDisplay;
