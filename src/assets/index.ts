import {createTheme} from '../components/theme';
import IMAGES from './images';
import ICONS from './icons';
import COLORS from './colors';
import language from './language';
export const Language = language 
export const {
  ThemeProvider,
  useStyle,
  createStyle,
  colors,
  fonts,
  icons,
  images,
  sizes,
} = createTheme({
  sizeBase: 16,
  colors: COLORS,
  fonts: {
    en: {MontserratMedium:'Montserrat-Medium',PopinsBold:'Poppins-Bold',PopinsMedium:'Poppins-Medium',PopinsRegular:'Poppins-Regular',PopinsSemiBold:'Poppins-SemiBold',PopinsLight:'Poppins-Light',AleoBold:'Aleo-Bold',OleoBold:'OleoScript-Bold',OleoRegular:'OleoScript-Regular',OpenSansBold:'OpenSans-Bold',OpenSansSemiBold:'OpenSans-SemiBold',PlusJakartaBold:'PlusJakartaSans-Bold',PlusJakartaSemiBold:'PlusJakartaSans-SemiBold',PublicSansSemiBold:'PublicSans-SemiBold',PublicSansRegular:'PublicSans-Regular'},
  },
  icons: ICONS,
  images: IMAGES,
  language,
});

export type IconSourceType = keyof typeof icons;
export type ImagesSourceType = keyof typeof images;
export type BaseColorType = keyof typeof colors.light;
