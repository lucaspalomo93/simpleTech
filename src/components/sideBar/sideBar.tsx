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
import { COLORS } from '../../constants/colors';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { items } from '../../constants/menuItems';
import {
  LIST_ITEM_BUTTON,
  LIST_ITEM_BUTTON_OPTION,
  LIST_ITEM_BUTTON_STYLES,
  LIST_ITEM_DEFAULT,
} from '../../constants/styles';
import { useSidebarOptions } from '../../hooks/useSideBarOptions';

function SideBar() {
  const {
    selectedOptions,
    expanded,
    selectedSubOption,
    handleItemClick,
    handleSubOptionClick,
  } = useSidebarOptions();

  return (
    <Container>
      <Typography
        variant='h4'
        component='h2'
        sx={{
          color: COLORS.ORANGE,
          fontWeight: 'bold',
          marginTop: '4rem',
          marginBottom: '4rem',
          marginLeft: '2rem',
        }}
      >
        S
      </Typography>
      <Typography
        variant='h5'
        component='h2'
        style={{ color: COLORS.GREY_TEXT, fontWeight: 'bold' }}
        margin={'2rem'}
      >
        Soluciones
      </Typography>

      <Container
        sx={{
          margin: '2rem',
        }}
      >
        <List sx={{ overflow: 'hidden' }}>
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
                              ...LIST_ITEM_BUTTON_STYLES(expanded, index),
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
                        ...LIST_ITEM_DEFAULT(selectedOptions, index),
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
    </Container>
  );
}

export default SideBar;
