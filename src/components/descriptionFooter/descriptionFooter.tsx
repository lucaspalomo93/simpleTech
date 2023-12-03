import './descriptionFooter.css';
import { Divider, Typography } from '@mui/material';
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
      <div
        style={{
          backgroundColor: COLORS.DARK_GREY,
          paddingTop: '2rem',
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        {state.showColorPicker && (
          <Divider className='divider' color={COLORS.GREY_TEXT} />
        )}
      </div>
      <div id='description-footer' className='footer'>
        <div>
          {state.showColorPicker && (
            <div id='description-footer-arrow' className='footer-arrow'>
              <img
                className='footer-img'
                src={ICON.RIGHT_ARROW}
                alt='right_arrow'
              />
              <Typography
                fontFamily={'Montserrat, sans-serif'}
                color={COLORS.WHITE}
              >
                {text}
              </Typography>
            </div>
          )}
        </div>
        <div className='footer-dimensions' id='description-footer-dimensions'>
          <Typography
            fontFamily={'Montserrat, sans-serif'}
            color={COLORS.LIGT_GREY_TEXT}
          >
            {dimensions}
          </Typography>
        </div>
      </div>
    </>
  );
}

export default DescriptionFooter;
