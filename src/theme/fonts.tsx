
export const fonts: IFonts = {
    body: 'Nunito',
    bodyBold: 'Nunito-Bold',
    heading: 'Nunito',
    headingBold: 'Nunito-Bold'
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

export interface IFontSizeScreen {
    sm: IFontSizes,
    md: IFontSizes,
    lg: IFontSizes,
    xl: IFontSizes
}

export interface IFontWeights {
    regular: number,
    medium: number,
    bold: number
}

export interface IFontSizes {
    caption: number,
    button: number,
    body: number,
    title: number,
    h5: number,
    h4: number,
    h3: number,
    h2: number,
    h1: number,
}

export interface IFonts {
    body: string,
    bodyBold: string,
    heading: string,
    headingBold: string
}
