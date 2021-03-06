
export enum MediaSize {
    Small = 'sm',
    Medium = 'md',
    Large = 'lg',
    Xlarge = 'xl'
}

export enum SizeUnit {
    px = 'px'
}

export interface ITheme {
    colors: IColors,
    fonts: IFonts,
    fontSizes: IFontSizeScreen,
    fontWeights: IFontWeights,
    size: ISizeScreen,
    space: ISpaceScreen,
    screen: MediaSize,
    unit: SizeUnit,
    transitionSpeed: number;
}

export interface IColors {
    background: IColorVariants,
    ui: IUIColorVariants,
    text: ITextColorVariants
}


export interface IColorVariants {
    primary: string,
    secondary: string,
}

export interface IUIColorVariants extends IColorVariants {
    tertiary: string,
    error: string,
    success: string,
    contrast: string,
    primaryRgb: string,
    contrastRgb: string,
    secondaryShade: string,
}

export interface ITextColorVariants extends IColorVariants {
    contrast: string,
    error: string,
    success: string,
    accent: string,
}

export interface ISizeScreen {
    sm: ISize,
    md: ISize,
    lg: ISize,
    xl: ISize
}

export interface ISize {
    xSmall: number,
    smaller: number,
    small: number,
    medium: number,
    large: number,
    xLarge: number
}


export interface ISpaceScreen {
    sm: ISpace,
    md: ISpace,
    lg: ISpace,
    xl: ISpace
}

export interface ISpace {
    s0: number,
    s1: number,
    s2: number,
    s3: number,
    s4: number,
    s5: number,
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
    body400: string,
    body600: string,
    body700: string,
    heading400: string,
    heading600: string,
    heading700: string
}

export interface IFontSizeScreen {
    sm: IFontSizes,
    md: IFontSizes,
    lg: IFontSizes,
    xl: IFontSizes
}

export interface IThemeProp {
    theme?: ITheme
};