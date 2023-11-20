import { PICKERS, SIDE_BAR_ICON } from './images';

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
        },
      ],
    },
  ],
  [{ label: 'Inspiración', options: [] }],
];
