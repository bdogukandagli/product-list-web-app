const breakpoints = ['0', '26.25em', '48em', '64em', '80em'];

const colors = {
  primary: '#191919',
  secondary: '#1EA4CE',
  secondaryDark: '#147594',
  dark: '#525252',
  light: '#FEFEFE',
  gray: '#697488',
  background: '#FAFAFA',
  lightGray: '#F4F4F4',
  darkGray: '#6F6F6F',
  lightBackground: '#F2F0FD',
};

breakpoints.xs = breakpoints[0];
breakpoints.sm = breakpoints[1];
breakpoints.md = breakpoints[2];
breakpoints.lg = breakpoints[3];
breakpoints.xl = breakpoints[4];

export default {
  breakpoints,
  colors,
};
