import './home.css';
import {
  CssBaseline,
  Divider,
  Link,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import SideBar from '../../components/sideBar/sideBar';
import { useContext, useEffect, useState } from 'react';
import { SimpleTechContext } from '../../context/context';
import Inspiration from '../inspiration/inspiration';
import { ICON } from '../../constants/images';
import CommonSection from './commonSection/commonSection';
import { COLORS } from '../../constants/colors';

function Home() {
  const { state, setState } = useContext(SimpleTechContext);
  const condition = 'INSPIRACIÓN';
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [showSidebar, setShowSidebar] = useState(!isMobile);

  const handleToggleSidebar = (
    event:
      | React.MouseEvent<HTMLDivElement>
      | React.MouseEvent<HTMLButtonElement>
  ) => {
    event.stopPropagation();
    setShowSidebar(!showSidebar);
  };

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      const sidebar = document.querySelector('.sidebar');

      if (sidebar && !sidebar.contains(event.target as Node)) {
        setShowSidebar(false);
      }
    };

    document.addEventListener('click', handleOutsideClick);

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  const handleInspiracionClick = () => {
    setState({
      ...state,
      sectionSelected: 'INSPIRACIÓN',
    });
  };

  return (
    <>
      <CssBaseline />
      <div
        className={
          isMobile
            ? `${showSidebar ? 'main-container-flex' : 'main-container'}`
            : 'main-container'
        }
      >
        {isMobile ? (
          <>
            <div className={`sidebar ${showSidebar ? '' : 'no-display'}`}>
              <SideBar />
            </div>
            {!showSidebar && (
              <>
                <div className='header-icons'>
                  <div
                    className='dropdown-container'
                    onClick={(e) => handleToggleSidebar(e)}
                  >
                    <img src={ICON.DROPWDOWN_ICON} alt='dropdown' />
                  </div>
                  <div className='solution-icon-container'>
                    <Link href='/'>
                      <img src={ICON.S_ICON} alt='solution-icon' />
                    </Link>
                  </div>
                </div>
                <div
                  style={{
                    backgroundColor: COLORS.DARK_GREY,
                    display: 'flex',
                    justifyContent: 'center',
                  }}
                >
                  <Divider className='divider' color={COLORS.GREY_TEXT} />
                </div>
              </>
            )}
          </>
        ) : (
          <div className='sidebar'>
            <SideBar />
          </div>
        )}
        {state.sectionSelected !== condition && <CommonSection />}
        {state.sectionSelected && state.sectionSelected === condition && (
          <div className='inspiration'>
            <Inspiration />
          </div>
        )}
        {isMobile && !showSidebar && state.sectionSelected === '' && (
          <div className='presentation-buttons-container'>
            <button
              onClick={(e) => handleToggleSidebar(e)}
              className='presentation-solution-button'
            >
              Soluciones
            </button>
            <button
              onClick={handleInspiracionClick}
              className='presentation-inspiration-button'
            >
              Inspiración
            </button>
          </div>
        )}
      </div>
    </>
  );
}

export default Home;
