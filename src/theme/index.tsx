import { colors, IColors } from './colors';
import { fonts, fontSizes, fontWeights, IFonts, IFontSizeScreen, IFontWeights } from './fonts';

export interface ITheme {
    colors: IColors,
    fonts: IFonts,
    fontSizes: IFontSizeScreen,
    fontWeights: IFontWeights,
    screen: MediaSize
}

export enum MediaSize {
    Small = 'sm',
    Medium = 'md',
    Large = 'lg',
    Xlarge = 'xl'
}

export default {
    colors,
    fonts,
    fontSizes,
    fontWeights,
    screen: MediaSize.Small
} as ITheme;