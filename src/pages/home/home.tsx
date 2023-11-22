import './home.css';
import { CssBaseline } from '@mui/material';
import SideBar from '../../components/sideBar/sideBar';
import DescriptionFooter from '../../components/descriptionFooter/descriptionFooter';
import ImageSidebar from '../../components/imageSidebar/imageSidebar';
import ColorPicker from '../../components/colorPicker/colorPicker';
import MainPictureDisplay from '../../components/mainPictureDisplay/mainPictureDisplay';
import { useContext } from 'react';
import { SimpleTechContext } from '../../context/context';
import Inspiration from '../inspiration/inspiration';

const CommonSection = () => {
  return (
    <>
      <div className='div2'>
        <ColorPicker />
      </div>
      <div className='div3'>
        <MainPictureDisplay />
      </div>
      <div className='div4'>
        <ImageSidebar />
      </div>
      <div className='div5'>
        <DescriptionFooter />
      </div>
    </>
  );
};

function Home() {
  const { state } = useContext(SimpleTechContext);
  const condition = 'INSPIRACIÓN';

  const show = state.sectionSelected && state.sectionSelected === condition;

  const parent = {
    display: 'grid',
    gridTemplateColumns: 'repeat(5, 1fr)',
    gridTemplateRows: 'repeat(5, 1fr)',
    gridColumnGap: '0px',
    gridRowGap: '0px',
    height: '100vh',
  };

  const parentFlex = {
    display: 'flex',
  };

  return (
    <>
      <CssBaseline />
      <div style={!show ? parent : parentFlex}>
        <div className='div1'>
          <SideBar />
        </div>
        {state.sectionSelected && state.sectionSelected !== condition && (
          <CommonSection />
        )}
        {state.sectionSelected && state.sectionSelected === condition && (
          <div
            style={{
              display: 'block',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#363636',
              width: '100%',
              height: '100vh'
            }}
          >
            <Inspiration />
          </div>
        )}
        {!state.sectionSelected && <CommonSection />}
      </div>
    </>
  );
}

export default Home;
