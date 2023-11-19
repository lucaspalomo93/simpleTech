import { COLORS } from './colors';

export const LIST_ITEM_BUTTON = {
  borderRadius: '10px',
  '&.Mui-selected': {
    backgroundColor: COLORS.DARK_GREY,
    color: COLORS.WHITE,
    '&:hover': {
      backgroundColor: COLORS.DARK_GREY,
    },
  },
  '&.Mui-focusVisible': {
    backgroundColor: COLORS.DARK_GREY,
    color: COLORS.WHITE,
  },
  ':hover': {
    backgroundColor: COLORS.DARK_GREY,
    color: COLORS.WHITE,
  },
};

export const LIST_ITEM_BUTTON_OPTION = {
  borderRadius: '10px',
  display: 'flex',
  gap: '2rem',
  '&.Mui-selected': {
    backgroundColor: COLORS.WHITE,
    color: COLORS.ORANGE,
    '&:hover': {
      backgroundColor: COLORS.WHITE,
    },
  },
  '&.Mui-focusVisible': {
    backgroundColor: COLORS.WHITE,
    color: COLORS.ORANGE,
  },
  ':hover': {
    backgroundColor: COLORS.WHITE,
    color: COLORS.ORANGE,
  },
};

export const LIST_ITEM_BUTTON_STYLES = (
  expanded: Array<boolean>,
  index: number
) => {
  return {
    borderRadius: '10px',
    '&.Mui-selected': {
      backgroundColor: expanded[index] ? COLORS.DARK_GREY : 'transparent',
      '&:hover': {
        backgroundColor: COLORS.DARK_GREY,
      },
      color: expanded[index] ? COLORS.WHITE : 'inherit',
    },
    '&.Mui-focusVisible': {
      backgroundColor: COLORS.DARK_GREY,
      color: COLORS.WHITE,
    },
    ':hover': {
      backgroundColor: COLORS.DARK_GREY,
      color: COLORS.WHITE,
    },
  };
};

export const LIST_ITEM_DEFAULT = (
  selectedOptions: Array<boolean>,
  index: number
) => {
  return {
    '&.Mui-selected': {
      backgroundColor: selectedOptions[index]
        ? COLORS.DARK_GREY
        : 'transparent',
      '&:hover': {
        backgroundColor: COLORS.DARK_GREY,
      },
      color: selectedOptions[index] ? COLORS.WHITE : 'inherit',
    },
  };
};

export const SVG_COLOR_CHANGE = {
  fill: COLORS.ORANGE,
};

export const IMG_PRESENT_STYLE = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};
