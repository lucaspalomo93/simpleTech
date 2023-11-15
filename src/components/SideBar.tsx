import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Container,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
} from '@mui/material';
import { COLORS } from '../constants/colors';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useState } from 'react';
import { items } from '../constants/menuItems';
import { LIST_ITEM_BUTTON, LIST_ITEM_BUTTON_OPTION } from '../constants/styles';

function SideBar() {
  const [selectedOptions, setSelectedOptions] = useState(Array(3).fill(false));
  const [expanded, setExpanded] = useState(Array(3).fill(false));
  const [selectedSubOption, setSelectedSubOption] = useState('');

  const handleItemClick = (index: number) => {
    setSelectedOptions((prev) => {
      const newOptions = Array(prev.length).fill(false);
      newOptions[index] = !prev[index]; // Invertir el estado de selección
      return newOptions;
    });

    setExpanded((prev) => {
      const newExpanded = Array(prev.length).fill(false); // Cerrar todas las opciones
      newExpanded[index] = !prev[index]; // Invertir el estado de expansión para la opción clicada
      return newExpanded;
    });
  };

  const handleSubOptionClick = (subOption: string) => {
    // Verifica si la opción actual ya está seleccionada
    if (selectedSubOption === subOption) {
      setSelectedSubOption(''); // Desselecciona la opción actual
    } else {
      setSelectedSubOption(subOption); // Selecciona la nueva opción
    }
  };

  return (
    <>
      <Typography variant='h4' component='h2' sx={{color: COLORS.ORANGE, fontWeight: 'bold', marginTop: '4rem', marginBottom: '4rem'}}>S</Typography>
      <Typography
        variant='h5'
        component='h2'
        style={{ color: COLORS.GREY_TEXT, fontWeight: 'bold' }}
      >
        Soluciones
      </Typography>

      <Container>
        <List>
          {items.map((item, index) =>
            item.map((option, optionIndex) => (
              <div key={index}>
                {index < items.length - 1 ? ( // Mostrar como acordeón si no es la última opción
                  <>
                    <Accordion
                      key={index}
                      elevation={0}
                      expanded={expanded[index]}
                    >
                      <AccordionSummary>
                        <ListItem disablePadding>
                          <ListItemButton
                            sx={{
                              ...LIST_ITEM_BUTTON,
                              '&.Mui-selected': {
                                backgroundColor: expanded[index]
                                  ? COLORS.DARK_GREY
                                  : 'transparent',
                                '&:hover': {
                                  backgroundColor: COLORS.DARK_GREY,
                                },
                                color: expanded[index]
                                  ? COLORS.WHITE
                                  : 'inherit',
                              },
                            }}
                            selected={selectedOptions[index]}
                            onClick={() => handleItemClick(index)}
                          >
                            <ListItemText
                              key={optionIndex}
                              primary={option.label}
                            />
                            {option.label !== 'Inspiración' && (
                              <ExpandMoreIcon />
                            )}
                          </ListItemButton>
                        </ListItem>
                      </AccordionSummary>
                      <AccordionDetails>
                        {option.options.map((subOption, subOptionIndex) => (
                          <ListItem key={subOptionIndex}>
                            <ListItemButton
                              sx={LIST_ITEM_BUTTON_OPTION}
                              selected={selectedSubOption === subOption}
                              onClick={() => {
                                handleSubOptionClick(subOption);
                              }}
                            >
                              <ListItemText primary={subOption} />
                            </ListItemButton>
                          </ListItem>
                        ))}
                      </AccordionDetails>
                    </Accordion>
                    <Divider />
                  </>
                ) : (
                  // Mostrar como ListItemButton si es la última opción
                  <ListItem key={index}>
                    <ListItemButton
                      sx={{
                        ...LIST_ITEM_BUTTON,
                        '&.Mui-selected': {
                          backgroundColor: selectedOptions[index]
                            ? COLORS.DARK_GREY
                            : 'transparent',
                          '&:hover': {
                            backgroundColor: COLORS.DARK_GREY,
                          },
                          color: selectedOptions[index]
                            ? COLORS.WHITE
                            : 'inherit',
                        },
                      }}
                      selected={selectedOptions[index]}
                      onClick={() => handleItemClick(index)}
                    >
                      <ListItemText key={optionIndex} primary={option.label} />
                    </ListItemButton>
                    {option.label !== 'Inspiración' && <Divider />}
                  </ListItem>
                )}
              </div>
            ))
          )}
        </List>
      </Container>
    </>
  );
}

export default SideBar;
