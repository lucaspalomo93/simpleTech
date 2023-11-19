import './descriptionFooter.css';
import { Box, Divider } from '@mui/material';
import { COLORS } from '../../constants/colors';

function DescriptionFooter() {
  return (
    <div className='footer'>
      <Box>
        <Divider
          style={{ width: '98%', margin: 'auto' }}
          color={COLORS.GREY_TEXT}
        />
      </Box>
      Footer
    </div>
  );
}

export default DescriptionFooter;
