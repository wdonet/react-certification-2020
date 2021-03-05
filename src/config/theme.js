import colors from './colors';

const commonTheme = {
  borderRadius: '1rem',
  borderRadiusSm: '0.8rem',
  borderRadiusLg: '1.5rem',
  borderRadiusXl: '2rem',
  primary: colors.purple400,
  link: colors.purple100,
  tagBackground: colors.orange400,
  tagText: colors.gray100,
  transitionDefault: 'all 200ms ease 0ms',
  transitionFast: 'all 100ms ease 0ms',
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
  menuButton: colors.purple400,
  menuButtonActive: colors.purple900,
  tagSecondaryBackground: colors.purple900,
  tagSecondaryText: colors.gray300,
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
  menuButton: colors.gray300,
  menuButtonActive: colors.gray100,
  tagSecondaryBackground: colors.purple900,
  tagSecondaryText: colors.blue400,
};

export const theme = { light, dark };
