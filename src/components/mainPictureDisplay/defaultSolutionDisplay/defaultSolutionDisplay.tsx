import './defaultSolutionDisplay.css';
import { ICON } from '../../../constants/images';
import { Typography } from '@mui/material';
import { COLORS } from '../../../constants/colors';

function DefaultSolutionDisplay() {
  return (
    <>
      <div className='icon-img'>
        <img src={ICON.DOWN_ARROW} alt='down_arrow' />
      </div>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          paddingTop: '5rem',
        }}
      >
        <Typography
          variant='h3'
          content='h3'
          textAlign={'left'}
          justifyContent={'center'}
          color={COLORS.ORANGE}
          fontWeight={'bold'}
          fontSize={'4rem'}
        >
          Te presentamos <br></br>nuestras soluciones
        </Typography>
      </div>
    </>
  );
}

export default DefaultSolutionDisplay;
