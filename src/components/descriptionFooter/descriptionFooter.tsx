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
      <Box sx={{ backgroundColor: COLORS.DARK_GREY, paddingTop: '3rem'}}>
        {state.showColorPicker && (
          <Divider
            className='divider'
            color={COLORS.GREY_TEXT}
          />
        )}
      </Box>
      <div id='description-footer' className='footer'>
        <div>
          {state.showColorPicker && (
            <div
              id='description-footer-arrow'
              className='footer-arrow'
            >
              <img
              className='footer-img'
                src={ICON.RIGHT_ARROW}
                alt='right_arrow'
              />
              <Typography color={COLORS.WHITE}>{text}</Typography>
            </div>
          )}
        </div>
        <div
        className='footer-dimensions'
          id='description-footer-dimensions'
        >
          <Typography color={COLORS.LIGT_GREY_TEXT}>{dimensions}</Typography>
        </div>
      </div>
    </>
  );
}

export default DescriptionFooter;
