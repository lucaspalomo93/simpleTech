import {
  CABIN_PRESENTATION,
  CASAS_PRESENTATION,
  TINY_HOUSES_PRESENTATION,
} from '../../../constants/images';

interface ImageSets {
  [key: string]: { projectImagePresentation: string[]; projectName: string[] };
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
  },
  'Tiny House': {
    projectImagePresentation: [TINY_HOUSES_PRESENTATION.TINY_0],
    projectName: ['Tiny'],
  },
  Cabañas: {
    projectImagePresentation: [
      CABIN_PRESENTATION.CABIN_0,
      CABIN_PRESENTATION.CABIN_1,
      CABIN_PRESENTATION.CABIN_2,
    ],
    projectName: ['Montaña', 'Playa', 'Bosque', 'Lago'],
  },
};
