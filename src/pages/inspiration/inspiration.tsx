import './inspiration.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import { LinearProgress, Link, Typography } from '@mui/material';
import { useState } from 'react';
import { COLORS } from '../../constants/colors';

const categories = ['Casas', 'Tiny House', 'Cabañas'];

interface ImageSets {
  [key: string]: string[];
}

const imageSets: ImageSets = {
  Casas: [
    'https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60',
    '... otras imágenes de casas ...',
    '... otras imágenes de casas ...',
    '... otras imágenes de casas ...',
  ],
  'Tiny House': [
    'https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60',
    '... otras imágenes de tiny houses ...',
    '... otras imágenes de tiny houses ...',
    '... otras imágenes de tiny houses ...',
  ],
  Cabañas: [
    'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250',
    '... otras imágenes de cabañas ...',
    '... otras imágenes de cabañas ...',
    '... otras imágenes de cabañas ...',
  ],
};

const Inspiration = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  const handleSlideChange = (value: any) => {
    setCurrentIndex(value);
  };

  const handleLinkClick = (category: string) => {
    setSelectedCategory(category);
    setCurrentIndex(0); // Reiniciar el índice cuando se cambia de categoría
  };

  return (
    <>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: '2rem',
          marginTop: '2rem',
          gap: '1rem',
        }}
      >
        {categories.map((category, index) => (
          <Link
            key={index}
            underline='none'
            color={COLORS.WHITE}
            bgcolor={
              selectedCategory === category ? COLORS.ORANGE : COLORS.DARK_GREY
            }
            padding={'0.5rem'}
            border={'1px solid white'}
            borderRadius={'25px'}
            display={'inline'}
            onClick={() => handleLinkClick(category)}
            style={{ cursor: 'pointer' }}
            marginTop={'1rem'}
            marginBottom={'6rem'}
          >
            <Typography>{category}</Typography>
          </Link>
        ))}
      </div>
      <div
        style={{
          // display: 'flex',
          // flexDirection: 'column',
          // alignItems: 'center',
          // justifyContent: 'center',
          width: '60%',
          margin: '0 auto',
        }}
      >
        <Carousel
          showThumbs={false}
          showStatus={false}
          showIndicators={false}
          selectedItem={currentIndex}
          onChange={handleSlideChange}
          width={'100%'}
        >
          {imageSets[selectedCategory].map((slide, index) => (
            <div key={index}>
              <img src={slide} alt={`Slide ${index + 1}`} />
            </div>
          ))}
        </Carousel>
      </div>
      <LinearProgress
        variant='determinate'
        value={(currentIndex / (imageSets[selectedCategory].length - 1)) * 100}
        sx={{
          backgroundColor: '#D9D9D9',
          '& .MuiLinearProgress-bar': {
            backgroundColor: '#D2632C',
          },
          borderRadius: '10px',
          width: '80%',
          height: '0.7rem',
          margin: '3rem auto'
        }}
      />
    </>
  );
};

export default Inspiration;
