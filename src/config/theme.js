import colors from './colors';

const commonTheme = {
  borderRadius: '1rem',
  borderRadiusSm: '0.8rem',
  borderRadiusLg: '1.5rem',
  primary: colors.purple400,
  link: colors.purple100,
  tagBackground: colors.orange400,
  tagText: colors.gray100,
};

const light = {
  ...commonTheme,
  background: colors.gray200,
  menuBackground: colors.gray100,
  text: colors.gray900,
  textSecondary: colors.gray600,
  borderColor: colors.gray300,
  avatarColor: colors.gray400,
  avatarBackground: colors.gray200,
  cardBackground: colors.gray100,
  cardTitle: colors.gray800,
  cardSubtitle: colors.gray600,
  cardText: colors.gray400,
  heroBackground: colors.gray300,
};

const dark = {
  ...commonTheme,
  background: colors.gray900,
  menuBackground: colors.gray900,
  text: colors.gray100,
  textSecondary: colors.gray400,
  borderColor: colors.gray700,
  avatarColor: colors.purple900,
  avatarBackground: colors.blue400,
  cardBackground: colors.gray800,
  cardTitle: colors.gray200,
  cardSubtitle: colors.gray300,
  cardText: colors.gray400,
  heroBackground: colors.gray700,
};

export const theme = { light, dark };
