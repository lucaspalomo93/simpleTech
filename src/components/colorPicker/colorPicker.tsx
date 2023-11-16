import { Container, Typography } from '@mui/material';
import { COLORS } from '../../constants/colors';
import { PICKERS } from '../../constants/images';

function ColorPicker() {
  return (
    <div
      style={{
        backgroundColor: COLORS.DARK_GREY,
        height: '100%',
        width: '100%',
      }}
    >
      <Container>
        <div style={{ display: 'flex', alignContent: 'center'}}>
          <Typography color={COLORS.LIGT_GREY_TEXT} sx={{ padding: '4rem 1rem 4rem 6rem' }}>
            Color
          </Typography>
          <div style={{display: 'flex', gap: '1rem', alignItems: 'center'}}>
            <img src={PICKERS.DARK_GREY_PICKER} alt="picker"/>
            <img src={PICKERS.BLACK_PICKER} alt="picker" />
            <img src={PICKERS.CREAM_PICKER} alt="picker" />
            <img src={PICKERS.WHITE_PICKER} alt="picker" />
            <img src={PICKERS.LIGHT_GREY_PICKER} alt="picker" />
            <img src={PICKERS.BROWN_PICKER} alt="picker" />
          </div>
        </div>
      </Container>
    </div>
  );
}

export default ColorPicker;
