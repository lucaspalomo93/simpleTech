import { useContext } from 'react';
import { COLORS } from '../../constants/colors';
import { SimpleTechContext } from '../../context/context';

function ImageSidebar() {
  const { state } = useContext(SimpleTechContext);
  const imageList = state.sidebarImagesArray;

  return (
    <div style={{ backgroundColor: COLORS.DARK_GREY, height: 'auto' }}>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '2rem',
          backgroundColor: COLORS.DARK_GREY,
        }}
      >
        {imageList &&
          imageList.map((image: string, index: number) => (
            <div style={{ margin: '0', display: 'contents' }}>
              <img
                key={index}
                src={image}
                alt={`Image ${index + 1}`}
                style={{
                  width: '65%',
                  height: '25px%',
                  objectFit: 'cover',
                  borderRadius: '10px',
                }}
              />
            </div>
          ))}
      </div>
    </div>
  );
}

export default ImageSidebar;
