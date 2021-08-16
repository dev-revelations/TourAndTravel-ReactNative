import { colors, IColors } from './colors';
import { fonts, fontSizes, fontWeights, IFonts, IFontSizeScreen, IFontWeights } from './fonts';

export default {
    colors,
    fonts,
    fontSizes,
    fontWeights
} as ITheme;

export interface ITheme {
    colors: IColors,
    fonts: IFonts,
    fontSizes: IFontSizeScreen,
    fontWeights: IFontWeights
}