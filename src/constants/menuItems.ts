import { PICKERS, SIDEBAR_IMAGES, SIDE_BAR_ICON } from './images';

export const items = [
  [
    {
      label: 'Techos',
      options: [
        {
          label: 'Sinusoidal',
          icon: SIDE_BAR_ICON.SINUSOIDAL,
          colors: [
            PICKERS.DARK_GREY_PICKER,
            PICKERS.BLACK_PICKER,
            PICKERS.CREAM_PICKER,
            PICKERS.WHITE_PICKER,
            PICKERS.LIGHT_GREY_PICKER,
            PICKERS.BROWN_PICKER,
          ],
          footerDescription: {
            text: 'Foilroof: núcleo PUR',
            dimensions: '10mm / 30mm / 50mm',
          },
          pictureText: 'Ext: foil blanco',
          sidebarImages: [
            SIDEBAR_IMAGES.GALERIA_SINUSOIDAL_01,
            SIDEBAR_IMAGES.GALERIA_SINUSOIDAL_02,
            SIDEBAR_IMAGES.GALERIA_SINUSOIDAL_03,
            SIDEBAR_IMAGES.GALERIA_SINUSOIDAL_04,
            SIDEBAR_IMAGES.GALERIA_SINUSOIDAL_05,
          ],
        },
        {
          label: 'Trapezoidal',
          icon: SIDE_BAR_ICON.TRAPEZOIDAL,
          colors: [
            PICKERS.DARK_GREY_PICKER,
            PICKERS.BLACK_PICKER,
            PICKERS.CREAM_PICKER,
            PICKERS.WHITE_PICKER,
            PICKERS.LIGHT_GREY_PICKER,
            PICKERS.BROWN_PICKER,
          ],
          footerDescription: {
            text: 'Maxiroof o Foilroof: núcleo PUR',
            dimensions: '10mm / 30mm / 50mm',
          },
          pictureText: 'Ext: foil blanco',
          sidebarImages: [
            SIDEBAR_IMAGES.GALERIA_TRAPEZOIDAL_01,
            SIDEBAR_IMAGES.GALERIA_TRAPEZOIDAL_02,
            SIDEBAR_IMAGES.GALERIA_TRAPEZOIDAL_03,
            SIDEBAR_IMAGES.GALERIA_TRAPEZOIDAL_04,
            SIDEBAR_IMAGES.GALERIA_TRAPEZOIDAL_05,
          ],
        },
        {
          label: 'Teja',
          icon: SIDE_BAR_ICON.TEJA,
          colors: [PICKERS.LIGHT_BROWN_PICKER, PICKERS.BLACK_PICKER],
          footerDescription: {
            text: 'Tejatech: núcleo PUR',
            dimensions: '30mm / 50mm',
          },
          pictureText: 'Ext: foil blanco',
          sidebarImages: [
            SIDEBAR_IMAGES.GALERIA_TEJAS_01,
            SIDEBAR_IMAGES.GALERIA_TEJAS_02,
            SIDEBAR_IMAGES.GALERIA_TEJAS_03,
            SIDEBAR_IMAGES.GALERIA_TEJAS_04,
            SIDEBAR_IMAGES.GALERIA_TEJAS_05,
          ],
        },
      ],
    },
  ],
  [
    {
      label: 'Paredes',
      options: [
        {
          label: 'Micronervado',
          icon: SIDE_BAR_ICON.MICRONERVADO,
          colors: [
            PICKERS.DARK_GREY_PICKER,
            PICKERS.BLACK_PICKER,
            PICKERS.CREAM_PICKER,
            PICKERS.WHITE_PICKER,
            PICKERS.LIGHT_GREY_PICKER,
          ],
          footerDescription: {
            text: 'Classwall: núcleo PUR',
            dimensions: '50mm',
          },
          pictureText: 'Ext: blanco o galvanizado',
          sidebarImages: [
            SIDEBAR_IMAGES.GALERIA_MICRONERVADO_01,
            SIDEBAR_IMAGES.GALERIA_MICRONERVADO_02,
            SIDEBAR_IMAGES.GALERIA_MICRONERVADO_03,
            SIDEBAR_IMAGES.GALERIA_MICRONERVADO_04,
            SIDEBAR_IMAGES.GALERIA_MICRONERVADO_05,
          ],
        },
      ],
    },
  ],
  [{ label: 'Inspiración', options: [] }],
];
