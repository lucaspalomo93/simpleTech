import {
  CABIN_PRESENTATION,
  CASAS_PRESENTATION,
  TINY_HOUSES_PRESENTATION,
} from '../../../constants/images';

interface ImageSets {
  [key: string]: {
    projectImagePresentation: string[];
    projectName: string[];
    carouselImages: string[];
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
      'Casa Country',
      'Casa de Piedra',
      'Casa en Blanco',
      'Casa Nube',
      'Casa Urizar',
      'Huemules',
      'Mawida',
      'Vivienda Residencial',
    ],
    carouselImages: [
      CASAS_PRESENTATION.CASA_0,
      CASAS_PRESENTATION.CASA_1,
      CASAS_PRESENTATION.CASA_2,
      CASAS_PRESENTATION.CASA_3,
      CASAS_PRESENTATION.CASA_4,
      CASAS_PRESENTATION.CASA_5,
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
    projectName: ['Tiny'],
    carouselImages: [
      CASAS_PRESENTATION.CASA_0,
      CASAS_PRESENTATION.CASA_1,
      CASAS_PRESENTATION.CASA_2,
      CASAS_PRESENTATION.CASA_3,
      CASAS_PRESENTATION.CASA_4,
      CASAS_PRESENTATION.CASA_5,
    ],
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
      'Cabaña Tierra del Sol',
      'Cabaña Potrerillos',
      'Parador Club House Maitenes',
    ],
    carouselImages: [
      CASAS_PRESENTATION.CASA_0,
      CASAS_PRESENTATION.CASA_1,
      CASAS_PRESENTATION.CASA_2,
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
