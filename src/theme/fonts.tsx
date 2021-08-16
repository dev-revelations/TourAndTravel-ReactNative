
const fontSizeUnit = 'px';

export const fonts: IFonts = {
    body: 'Nunito',
    heading: 'Nunito',
}

export const fontWeights: IFontWeights = {
    regular: 400,
    medium: 500,
    bold: 700
}

export const fontSizes: IFontSizeScreen = {
    sm: {
        caption: `12${fontSizeUnit}`,
        button: `14${fontSizeUnit}`,
        body: `16${fontSizeUnit}`,
        title: `20${fontSizeUnit}`,
        h5: `24${fontSizeUnit}`,
        h4: `34${fontSizeUnit}`,
        h3: `45${fontSizeUnit}`,
        h2: `56${fontSizeUnit}`,
        h1: `112${fontSizeUnit}`,
    }
}

export interface IFontSizeScreen {
    sm: IFontSizes,
    md?: IFontSizes,
    lg?: IFontSizes,
    xl?: IFontSizes
}

export interface IFontWeights {
    regular: number,
    medium: number,
    bold: number
}

export interface IFontSizes {
    caption: string,
    button: string,
    body: string,
    title: string,
    h5: string,
    h4: string,
    h3: string,
    h2: string,
    h1: string,
}

export interface IFonts {
    body: string,
    heading: string,
}
