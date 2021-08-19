import { IFonts, IFontSizes, IFontSizeScreen, IFontWeights } from "../types";

export const fonts: IFonts = {
    body400: 'Nunito',
    body600: 'Nunito-SemiBold',
    body700: 'Nunito-Bold',
    heading400: 'Nunito',
    heading600: 'Nunito-SemiBold',
    heading700: 'Nunito-Bold'
}

export const fontWeights: IFontWeights = {
    regular: 400,
    medium: 500,
    bold: 700
}

const defaultFontSizes: IFontSizes = {
    caption: 12,
    button: 14,
    body: 16,
    title: 20,
    h5: 24,
    h4: 34,
    h3: 45,
    h2: 56,
    h1: 112,
};

export const fontSizes: IFontSizeScreen = {
    sm: defaultFontSizes,
    md: defaultFontSizes,
    lg: defaultFontSizes,
    xl: defaultFontSizes
}