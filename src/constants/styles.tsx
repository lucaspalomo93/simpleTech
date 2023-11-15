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
