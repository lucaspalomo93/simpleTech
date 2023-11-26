import './imageSidebar.css';
import { useContext, useState } from 'react';
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
    <div id='image-sidebar-container'>
      <div className='image-wrapper'>
        {imageList &&
          imageList.map((image: string, index: number) => (
            <div
              id={`img-sidebar-${index}`}
              key={index}
              className='image-container'
              onClick={() => handleImageClick(image)} // Manejar clic en la imagen
            >
              <img className='image' src={image} alt={`Image ${index + 1}`} />
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
