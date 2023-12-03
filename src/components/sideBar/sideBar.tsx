import './sideBar.css';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Container,
  Divider,
  Link,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
  useMediaQuery,
  useTheme,
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
import { MouseEvent } from 'react';

interface SidebarProps {
  handleToggleSidebar: (
    event: MouseEvent<HTMLDivElement | HTMLButtonElement>
  ) => void;
}

const SideBar: React.FC<SidebarProps> = ({ handleToggleSidebar }) => {
  const {
    selectedSection,
    expanded,
    selectedSubSection,
    selectedSubSectionStyle,
    handleItemClick,
    handleSubSectionClick,
  } = useSidebarOptions();

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Container className='first-container'>
      <Container className='s-icon-container'>
        <Link href='/' underline='none'>
          <img src={ICON.S_ICON} alt='S Icon' />
        </Link>
      </Container>
      <Typography
        sx={{
          fontFamily: 'Montserrat, sans-serif',
          fontWeight: 'bold',
          textAlign: 'left',
          marginLeft: '2rem',
        }}
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
                              disableTypography
                              sx={{ fontFamily: 'Montserrat, sans-serif' }}
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
                        {section.options.map((subSection, detailIndex) => (
                          <ListItemButton
                            key={detailIndex}
                            sx={LIST_ITEM_BUTTON_OPTION}
                            style={{ gap: isMobile ? '2rem' : '0' }}
                            selected={
                              selectedSubSection === subSection.label &&
                              selectedSubSectionStyle !== ''
                            }
                            onClick={(e) => {
                              handleSubSectionClick(
                                subSection.label,
                                subSection.colors,
                                subSection
                              );
                              handleToggleSidebar(e);
                            }}
                          >
                            <p className='list-item-text'>{subSection.label}</p>
                            <img
                              src={subSection.icon}
                              alt='Icono'
                              style={{ width: isMobile ? '30px' : '60px' }}
                              className={`img-icon-style ${
                                selectedSubSection === subSection.label &&
                                selectedSubSectionStyle !== ''
                                  ? 'selected-option'
                                  : ''
                              }`}
                            />
                          </ListItemButton>
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
                      onClick={(e) => {
                        handleItemClick(index);
                        handleToggleSidebar(e);
                      }}
                    >
                      <ListItemText
                        disableTypography
                        sx={{ fontFamily: 'Montserrat, sans-serif' }}
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
};

export default SideBar;
