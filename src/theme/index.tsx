import { colors, IColors } from './colors';
import { fonts, fontSizes, fontWeights, IFonts, IFontSizeScreen, IFontWeights } from './fonts';
import { size, ISizeScreen } from './sizes';
import { ISpaceScreen, space } from './spacing';

export interface ITheme {
    colors: IColors,
    fonts: IFonts,
    fontSizes: IFontSizeScreen,
    fontWeights: IFontWeights,
    size: ISizeScreen,
    space: ISpaceScreen,
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
    size,
    space,
    screen: MediaSize.Small,
    unit: SizeUnit.px
} as ITheme;