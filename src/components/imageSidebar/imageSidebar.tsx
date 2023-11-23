import './iamgeSidebar.css';
import { useContext, useState } from 'react';
import { COLORS } from '../../constants/colors';
import { SimpleTechContext } from '../../context/context';

function ImageSidebar() {
  const { state } = useContext(SimpleTechContext);
  const imageList = state.sidebarImagesArray;

  // Estado para el visor de imágenes
  const [imageViewer, setImageViewer] = useState({
    isOpen: false,
    currentImage: null,
  });

  // Manejar clic en una imagen para abrir el visor
  const handleImageClick = (image: any) => {
    setImageViewer({
      isOpen: true,
      currentImage: image,
    });
  };

  // Manejar clic en cualquier parte de la pantalla para cerrar el visor
  const handleViewerClose = () => {
    setImageViewer({
      isOpen: false,
      currentImage: null,
    });
  };

  return (
    <div
      id='image-sidebar-container'
      style={{ backgroundColor: COLORS.DARK_GREY, height: 'auto' }}
    >
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
            <div
              id={`img-sidebar-${index}`}
              key={index}
              style={{ margin: '0', display: 'contents' }}
              className='image-container'
              onClick={() => handleImageClick(image)} // Manejar clic en la imagen
            >
              <img
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

      {/* Visor de imágenes */}
      {imageViewer.isOpen && imageViewer.currentImage && (
        <div className='image-viewer' onClick={handleViewerClose}>
          <img src={imageViewer.currentImage} alt='Expanded Image' />
        </div>
      )}
    </div>
  );
}

export default ImageSidebar;
