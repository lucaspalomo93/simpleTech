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
        <ColorPicker />{' '}
      </div>
      <div className='div3'>
        <MainPictureDisplay />{' '}
      </div>
      <div className='div4'>
        <ImageSidebar />{' '}
      </div>
      <div className='div5'>
        <DescriptionFooter />{' '}
      </div>
    </>
  );
};

function Home() {
  const { state } = useContext(SimpleTechContext);
  const condition = 'INSPIRACIÓN';

  return (
    <>
      <CssBaseline />
      <div className='parent'>
        <div className='div1'>
          <SideBar />{' '}
        </div>
        {state.sectionSelected && state.sectionSelected !== condition && (
          <CommonSection />
        )}
        {state.sectionSelected && state.sectionSelected === condition && (
          <Inspiration />
        )}
        {!state.sectionSelected && <CommonSection />}
      </div>
    </>
  );
}

export default Home;
