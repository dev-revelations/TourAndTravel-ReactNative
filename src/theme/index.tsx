import { ITheme, MediaSize, SizeUnit } from '../types';
import { colors } from './colors';
import { fonts, fontSizes, fontWeights } from './fonts';
import { size } from './sizes';
import { space } from './spacing';

export default {
    colors,
    fonts,
    fontSizes,
    fontWeights,
    size,
    space,
    screen: MediaSize.Small,
    unit: SizeUnit.px,
    transitionSpeed: 200,
} as ITheme;