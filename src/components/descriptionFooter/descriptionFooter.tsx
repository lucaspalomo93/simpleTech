import './descriptionFooter.css';
import { Box, Divider, Typography } from '@mui/material';
import { COLORS } from '../../constants/colors';
import { useContext } from 'react';
import { SimpleTechContext } from '../../context/context';
import { ICON } from '../../constants/images';

function DescriptionFooter() {
  const { state } = useContext(SimpleTechContext);

  const text = state.footerDescriptionText;
  const dimensions = state.footerDescriptionDimensions;

  return (
    <>
      <Box sx={{ backgroundColor: COLORS.DARK_GREY }}>
        <Divider
          style={{ width: '95%', margin: 'auto', fontWeight: 'bold' }}
          color={COLORS.GREY_TEXT}
        />
      </Box>
      <div className='footer'>
        <div>
          <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
            <img
              style={{ paddingLeft: '4rem' }}
              src={ICON.RIGHT_ARROW}
              alt='right_arrow'
            />
            <Typography color={COLORS.WHITE}>{text}</Typography>
          </div>
        </div>
        <div style={{ paddingRight: '4rem' }}>
          <Typography color={COLORS.LIGT_GREY_TEXT}>{dimensions}</Typography>
        </div>
      </div>
    </>
  );
}

export default DescriptionFooter;
