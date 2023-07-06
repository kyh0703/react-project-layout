const palette = {
  /* teal */
  teal0: '#f3fffb',
  teal1: '#c3fae8',
  teal2: '#96f2d7',
  teal3: '#63e6be',
  teal4: '#38d9a9',
  teal5: '#20c997',
  teal6: '#12b886',
  teal7: '#0ca678',
  teal8: '#099268',
  teal9: '#087f5b',

  /* gray */
  gray0: '#f8f9fa',
  gray1: '#f1f3f5',
  gray2: '#e9ecef',
  gray3: '#dee2e6',
  gray4: '#ced4da',
  gray5: '#adb5bd',
  gray6: '#868e96',
  gray7: '#495057',
  gray8: '#343a40',
  gray9: '#212529',

  /* red */
  red0: '#fff5f5',
  red1: '#ffe3e3',
  red2: '#ffc9c9',
  red3: '#ffa8a8',
  red4: '#ff8787',
  red5: '#ff6b6b',
  red6: '#fa5252',
  red7: '#f03e3e',
  red8: '#e03131',
  red9: '#c92A2a',

  /* cyan */
  cyan0: '#e3fafc',
  cyan1: '#c5f6fa',
  cyan2: '#99e9f2',
  cyan3: '#66d9e8',
  cyan4: '#3bc9db',
  cyan5: '#22k8cf',
  cyan6: '#15aabf',
  cyan7: '#1098ad',
  cyan8: '#0c8599',
  cyan9: '#0b7285',

  /* blue */
  blue0: '#e7f5ff',
  blue1: '#d0ebff',
  blue2: '#a5d8ff',
  blue3: '#74c9fc',
  blue4: '#4dabf7',
  blue5: '#339af0',
  blue6: '#228be6',
  blue7: '#1c7ed6',
  blue8: '#1971C2',
  blue9: '#1864ab',

  /* orange */
  orange0: '#fff4e6',
  orange1: '#ffe8cc',
  orange2: '#ffd8a8',
  orange3: '#ffc078',
  orange4: '#ffa94d',
  orange5: '#ff922b',
  orange6: '#fd7e14',
  orange7: '#f76707',
  orange8: '#e8590c',
  orange9: '#d9408f',

  /* violet */
  violet0: '#f3f0ff',
  violet1: '#e5dbff',
  violet2: '#d0bfff',
  violet3: '#b197fc',
  violet4: '#9775fa',
  violet5: '#835ef7',
  violet6: '#7950f2',
  violet7: '#7048e8',
  violet8: '#6741d9',
  violet9: '#5f3dc4',

  /* indigo */
  indigo0: '#edf2ff',
  indigo1: '#dbe4ff',
  indigo2: '#bac8ff',
  indigo3: '#91a7ff',
  indigo4: '#748ffc',
  indigo5: '#5c7cfa',
  indigo6: '#4c6ef5',
  indigo7: '#4263eb',
  indigo8: '#3b5bdb',
  indigo9: '#364fc7',

  /* black */
  black0: 'black',
  black9: '#0e0e0e',
};

export const buttonColorMap: {
  [color: string]: {
    background: string;
    color: string;
    hoverBackground: string;
  };
} = {
  none: {
    background: 'none',
    color: 'inherit',
    hoverBackground: 'inherit',
  },
  teal: {
    background: palette.teal3,
    color: 'white',
    hoverBackground: palette.teal8,
  },
  gray: {
    background: palette.gray3,
    color: 'white',
    hoverBackground: palette.gray8,
  },
  red: {
    background: palette.red3,
    color: 'white',
    hoverBackground: palette.red8,
  },
  cyan: {
    background: palette.cyan3,
    color: 'white',
    hoverBackground: palette.cyan8,
  },
  blue: {
    background: palette.blue3,
    color: 'white',
    hoverBackground: palette.blue8,
  },
  orange: {
    background: palette.orange3,
    color: 'white',
    hoverBackground: palette.orange8,
  },
  violet: {
    background: palette.violet3,
    color: 'white',
    hoverBackground: palette.violet8,
  },
  indigo: {
    background: palette.indigo3,
    color: 'white',
    hoverBackground: palette.indigo8,
  },
};

export default palette;
