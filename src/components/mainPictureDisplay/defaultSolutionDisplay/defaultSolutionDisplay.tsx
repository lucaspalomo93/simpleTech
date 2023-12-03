import './defaultSolutionDisplay.css';
import { ICON } from '../../../constants/images';

interface PresentationButtonsProps {
  handleToggleSidebar: (event: any) => void;
  handleInspiracionClick: () => void;
}

const DefaultSolutionDisplay: React.FC<PresentationButtonsProps> = ({
  handleToggleSidebar,
  handleInspiracionClick,
}) => {
  return (
    <>
      <div className='default-container'>
        <div id='default-solution-arrow' className='icon-img'>
          <img src={ICON.DOWN_ARROW} alt='down_arrow' />
        </div>
        <div className='default-solution-text' id='default-solution-text'>
          <p
            style={{ fontFamily: 'Raleway, sans-serif', fontWeight: 'bold' }}
            className='text'
            content='h3'
          >
            Te presentamos <br></br>nuestras soluciones
          </p>
        </div>
      </div>
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
    </>
  );
};

export default DefaultSolutionDisplay;
