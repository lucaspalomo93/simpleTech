import { Container, Typography } from '@mui/material';
import { COLORS } from '../../constants/colors';
import { PICKERS } from '../../constants/images';
import { useContext, useState } from 'react';
import '../../styles/customStyles.css';
import { SimpleTechContext } from '../../context/context';
import { getColorPickerName } from '../../utils/colorPicker';

function ColorPicker() {
  const [selectedColor, setSelectedColor] = useState('');
  const { state, setState } = useContext(SimpleTechContext);

  console.log('statePicker...', state.colorPickerSelected);

  const handleColorClick = (color: string) => {
    // Si el color seleccionado ya está seleccionado, deseleccionarlo
    if (selectedColor === color) {
      setSelectedColor('');

      // Actualizar el contexto con el nuevo valor de colorPickerSelected
      setState({
        ...state,
        colorPickerSelected: '',
      });
    } else {
      // Si se hace clic en un nuevo color, seleccionarlo
      setSelectedColor(color);

      // Actualizar el contexto con el nuevo valor de colorPickerSelected
      setState({
        ...state,
        colorPickerSelected: getColorPickerName(color),
      });
    }
  };

  return (
    <div
      style={{
        backgroundColor: COLORS.DARK_GREY,
        height: '100%',
        width: '100%',
      }}
    >
      <Container>
        <div style={{ display: 'flex', alignContent: 'center' }}>
          <Typography
            color={COLORS.LIGT_GREY_TEXT}
            sx={{ padding: '4rem 1rem 4rem 6rem' }}
          >
            Color
          </Typography>
          <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
            {Object.values(PICKERS).map((picker, index) => (
              <div
                key={index}
                className={`color-picker ${
                  selectedColor === picker ? 'selected' : ''
                }`}
                onClick={() => handleColorClick(picker)}
                style={{ cursor: 'pointer' }}
              >
                <img src={picker} alt='picker' />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}

export default ColorPicker;
