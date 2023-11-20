import './home.css';
import { CssBaseline } from '@mui/material';
import SideBar from '../../components/sideBar/sideBar';
import DescriptionFooter from '../../components/descriptionFooter/descriptionFooter';
import ImageSidebar from '../../components/imageSidebar/imageSidebar';
import ColorPicker from '../../components/colorPicker/colorPicker';
import MainPictureDisplay from '../../components/mainPictureDisplay/mainPictureDisplay';

function Home() {
  return (
    <>
      <CssBaseline />
      <div className='parent'>
        <div className='div1'>
          <SideBar />{' '}
        </div>
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
      </div>
    </>
  );
}

export default Home;
