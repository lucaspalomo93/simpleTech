import './inspiration.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import CarouselComponent from './carousel/carousel';
import { useContext } from 'react';
import { SimpleTechContext } from '../../context/context';
import ProjectVisualizer from './projectVisualizer/projectVisualizer';

interface InspirationProps {
  handleToggleSidebar: (event: any) => void;
  handleInspiracionClick: () => void;
}

const Inspiration: React.FC<InspirationProps> = ({
  handleToggleSidebar,
  handleInspiracionClick,
}) => {
  const { state } = useContext(SimpleTechContext);

  return (
    <>
      {!state.showInspirationProject && <CarouselComponent />}
      <div>
        {state.showInspirationProject && (
          <ProjectVisualizer
            handleInspiracionClick={handleInspiracionClick}
            handleToggleSidebar={handleToggleSidebar}
          />
        )}
      </div>
    </>
  );
};

export default Inspiration;
