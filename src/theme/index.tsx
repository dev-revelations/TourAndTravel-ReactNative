import { colors, IColors } from './colors';
import { fonts, fontSizes, fontWeights, IFonts, IFontSizeScreen, IFontWeights } from './fonts';

export interface ITheme {
    colors: IColors,
    fonts: IFonts,
    fontSizes: IFontSizeScreen,
    fontWeights: IFontWeights,
    screen: MediaSize,
    unit: SizeUnit
}

export enum MediaSize {
    Small = 'sm',
    Medium = 'md',
    Large = 'lg',
    Xlarge = 'xl'
}

export enum SizeUnit {
    px = 'px'
}

export default {
    colors,
    fonts,
    fontSizes,
    fontWeights,
    screen: MediaSize.Small,
    unit: SizeUnit.px
} as ITheme;