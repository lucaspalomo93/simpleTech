import './sideBar.css';
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
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { items } from '../../constants/menuItems';
import {
  LIST_ITEM_BUTTON,
  LIST_ITEM_BUTTON_OPTION,
  LIST_ITEM_BUTTON_STYLES,
  LIST_ITEM_DEFAULT,
} from '../../constants/styles';
import { useSidebarOptions } from '../../hooks/useSideBarOptions';
import { ICON } from '../../constants/images';

function SideBar() {
  const {
    selectedSection,
    expanded,
    selectedSubSection,
    selectedSubSectionStyle,
    handleItemClick,
    handleSubSectionClick,
  } = useSidebarOptions();

  return (
    <Container>
      <Container className='s-icon-container'>
        <img src={ICON.S_ICON} alt='S Icon' />
      </Container>
      <Typography
      className='header-text'
        variant='h5'
        component='h2'
      >
        Soluciones
      </Typography>

      <Container>
        <List className='list'>
          {items.map((item, index) =>
            item.map((section, sectionIndex) => (
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
                            selected={selectedSection[index]}
                            onClick={() => handleItemClick(index)}
                          >
                            <ListItemText
                              key={sectionIndex}
                              primary={section.label}
                            />
                            {section.label !== 'Inspiración' && (
                              <ExpandMoreIcon />
                            )}
                          </ListItemButton>
                        </ListItem>
                      </AccordionSummary>
                      <AccordionDetails>
                        {section.options.map((subSection, subSectionIndex) => (
                          <ListItem key={subSectionIndex}>
                            <ListItemButton
                              sx={LIST_ITEM_BUTTON_OPTION}
                              selected={
                                selectedSubSection === subSection.label &&
                                selectedSubSectionStyle !== ''
                              }
                              onClick={() => {
                                handleSubSectionClick(
                                  subSection.label,
                                  subSection.colors,
                                  subSection
                                );
                              }}
                            >
                              <ListItemText primary={subSection.label} />
                              <img
                                src={subSection.icon}
                                alt='Icono'
                                className={
                                  selectedSubSection === subSection.label &&
                                  selectedSubSectionStyle !== ''
                                    ? 'selected-option'
                                    : ''
                                }
                              />
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
                        ...LIST_ITEM_DEFAULT(selectedSection, index),
                      }}
                      selected={selectedSection[index]}
                      onClick={() => handleItemClick(index)}
                    >
                      <ListItemText
                        key={sectionIndex}
                        primary={section.label}
                      />
                    </ListItemButton>
                    {section.label !== 'Inspiración' && <Divider />}
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
