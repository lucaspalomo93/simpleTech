import {
  CABIN_PRESENTATION,
  CASAS_PRESENTATION,
  PROJECT_CABIN,
  PROJECT_HOUSES,
  PROJECT_TINY,
  TINY_HOUSES_PRESENTATION,
} from '../../../constants/images';

interface ImageSets {
  [key: string]: {
    projectImagePresentation: string[];
    projectName: string[];
    carouselImages: any;
    projectDisplayName: string[];
    projectDescription_1: string[];
    projectDescription_2: string[];
  };
}

export const categories = ['Casas', 'Tiny House', 'Cabañas'];

export const imageSets: ImageSets = {
  Casas: {
    projectImagePresentation: [
      CASAS_PRESENTATION.CASA_0,
      CASAS_PRESENTATION.CASA_1,
      CASAS_PRESENTATION.CASA_2,
      CASAS_PRESENTATION.CASA_3,
      CASAS_PRESENTATION.CASA_4,
      CASAS_PRESENTATION.CASA_5,
      CASAS_PRESENTATION.CASA_6,
      CASAS_PRESENTATION.CASA_7,
      CASAS_PRESENTATION.CASA_8,
    ],
    projectName: [
      'Alvear Housing',
      'Vivienda Country Zona Sur',
      'Casa de Piedra',
      'Casa en Blanco',
      'Casa Nube',
      'Casa Urizar',
      'Huemules Reserva de Montaña',
      'Posada Mawida',
      'Vivienda Residencial',
    ],
    carouselImages: [
      [PROJECT_HOUSES.ALVEAR],
      [PROJECT_HOUSES.COUNTRY],
      [PROJECT_HOUSES.PIEDRA],
      [PROJECT_HOUSES.BLANCO],
      [PROJECT_HOUSES.NUBE],
      [PROJECT_HOUSES.URIZAR],
      [PROJECT_HOUSES.HUEMULES],
      [PROJECT_HOUSES.MAWIDA],
      [PROJECT_HOUSES.RESIDENCIAL],
    ],
    projectDisplayName: [
      'Alvear Housing',
      'Vivienda Country Zona Sur',
      'Casa de Piedra',
      'Casa en Blanco',
      'Casa Nube',
      'Casa Urizar',
      'Huemules Reserva de Montaña',
      'Posada Mawida',
      'Vivienda Residencial',
    ],
    projectDescription_1: [
      'Esquel - Chubut, Argentina',
      'Córdoba, Argentina',
      'Tupungato - Mendoza, Argentina',
      'Córdoba, Argentina',
      'Tafí del Valle, Tucumán, Argentina',
      'Salta, Argentina',
      'Esquel - Chubut, Argentina',
      'Maipú - Mendoza, Argentina',
      'General Rodriguez - Bs As, Argentina',
    ],
    projectDescription_2: [
      'Foilroof Trapezoidal Negro',
      'Classwall Micronervado Negro',
      'Classwall Micronervado Acero Corten',
      'Maxiroof Trapezoidal Blanco',
      'Foilroof Trapezoidal Negro',
      'Foilroof Sinusoidal Cincalum',
      'Foilroof Trapezoidal Acero Corten',
      'Classwall Micronervado Gris Pizarra',
      'Tejatech Negro',
    ],
  },
  'Tiny House': {
    projectImagePresentation: [TINY_HOUSES_PRESENTATION.TINY_0],
    projectName: ['Tiny House'],
    carouselImages: [[PROJECT_TINY.TINY]],
    projectDisplayName: ['Tiny House'],
    projectDescription_1: ['Godoy Cruz - Mendoza, Argentina'],
    projectDescription_2: ['Classwall Micronervado Gris Pizarra'],
  },
  Cabañas: {
    projectImagePresentation: [
      CABIN_PRESENTATION.CABIN_0,
      CABIN_PRESENTATION.CABIN_1,
      CABIN_PRESENTATION.CABIN_2,
    ],
    projectName: [
      'Cabaña Potrerillos',
      'Cabaña Tierra del Sol',
      'Parador Club House Maitenes',
    ],
    carouselImages: [
      [PROJECT_CABIN.POTRERILLOS],
      [PROJECT_CABIN.SOL],
      [PROJECT_CABIN.MAITENES],
    ],
    projectDisplayName: [
      'Tierra del Sol',
      'Vivienda familiar',
      'Parador Club House Maitenes',
    ],
    projectDescription_1: [
      'San Martín de Los Andes - Neuquén, Argentina',
      'Valle del Sol - Potrerillos, Mendoza, Argentina',
      'Trevelin - Esquel, Argentina',
    ],
    projectDescription_2: [
      'Maxiroof Trapezoidal Gris Pizarra',
      'Classwall Micronervado Blanco',
      'Maxiroof Trapezoidal Negro',
    ],
  },
};

export const landingImagesAndNames = {
  images: [
    CASAS_PRESENTATION.CASA_0,
    CASAS_PRESENTATION.CASA_1,
    CASAS_PRESENTATION.CASA_2,
    CASAS_PRESENTATION.CASA_3,
    CASAS_PRESENTATION.CASA_4,
    CASAS_PRESENTATION.CASA_5,
    CASAS_PRESENTATION.CASA_6,
    CASAS_PRESENTATION.CASA_7,
    CASAS_PRESENTATION.CASA_8,
    CABIN_PRESENTATION.CABIN_0,
    CABIN_PRESENTATION.CABIN_1,
    CABIN_PRESENTATION.CABIN_2,
    TINY_HOUSES_PRESENTATION.TINY_0,
  ],
  names: [
    'Alvear Housing',
    'Vivienda Country Zona Sur',
    'Casa de Piedra',
    'Casa en Blanco',
    'Casa Nube',
    'Casa Urizar',
    'Huemules Reserva de Montaña',
    'Posada Mawida',
    'Vivienda Residencial',
    'Cabaña Tierra del Sol',
    'Cabaña Potrerillos',
    'Parador Club House Maitenes',
    'Tiny House',
  ],
};
