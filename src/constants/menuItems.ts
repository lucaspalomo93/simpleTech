import { SIDE_BAR_ICON } from './images';

export const items = [
  [
    {
      label: 'Techos',
      options: [
        { label: 'Sinusoidal', icon: SIDE_BAR_ICON.SINUSOIDAL },
        { label: 'Trapezoidal', icon: SIDE_BAR_ICON.TRAPEZOIDAL },
        { label: 'Teja', icon: SIDE_BAR_ICON.TEJA },
      ],
    },
  ],
  [
    {
      label: 'Paredes',
      options: [{ label: 'Micronervado', icon: SIDE_BAR_ICON.MICRONERVADO }],
    },
  ],
  [{ label: 'Inspiración', options: [] }],
];
