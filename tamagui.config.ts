import {createFont, createTamagui, createTokens, isWeb} from 'tamagui';

// Font setup
const systemFont = createFont({
  family: isWeb ? 'Helvetica, Arial, sans-serif' : 'System',
  size: {1: 12, 2: 14, 3: 15, 4: 16, 5: 18, 6: 20, 7: 24, 8: 28, 9: 32, 10: 36},
  lineHeight: {1: 18, 2: 22, 3: 24},
  weight: {1: '300', 2: '400', 3: '600'},
  letterSpacing: {1: 0, 2: -1, 3: -1},
  face: {
    300: {normal: 'InterLight', italic: 'InterItalic'},
    400: {normal: 'InterRegular'},
    600: {normal: 'InterBold'},
  },
});

// Tokens
const size = {0: 0, 1: 5, 2: 10, 3: 15, 4: 20, 5: 25, 6: 40, true: 10};
export const tokens = createTokens({
  size,
  space: {...size, '-1': -5, '-2': -10, true: 10},
  radius: {0: 0, 1: 3, 2: 6},
  zIndex: {0: 0, 1: 100, 2: 200},
  color: {
    white: '#FFFFFF',
    black: '#000',
    background: '#FFFFFF',
    primary: '#1F1F1F',
    error: '#D52F2F',
    accept: '#30B854',
    text: '#1F1F1F',
  },
});

// Config
const config = createTamagui({
  fonts: {
    heading: systemFont,
    body: systemFont,
  },
  tokens,
  themes: {
    light: {
      bg: tokens.color.background,
      color: tokens.color.text,
      primary: tokens.color.primary,
      background: tokens.color.background,
      error: tokens.color.error,
      accept: tokens.color.accept,
    },
    dark: {
      bg: '#1F1F1F',
      color: '#FFFFFF',
      primary: tokens.color.primary,
      background: tokens.color.background,
      error: tokens.color.error,
      accept: tokens.color.accept,
    },
  },
  media: {
    sm: {maxWidth: 860},
    gtSm: {minWidth: 861},
    short: {maxHeight: 820},
    hoverNone: {hover: 'none'},
    pointerCoarse: {pointer: 'coarse'},
  },
  shorthands: {
    px: 'paddingHorizontal',
    f: 'flex',
    m: 'margin',
    w: 'width',
  } as const,
});

type AppConfig = typeof config;

declare module 'tamagui' {
  interface TamaguiCustomConfig extends AppConfig {}
}

export default config;
