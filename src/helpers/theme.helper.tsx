import { IFontSizes, ISize, ISpace, ITheme } from "../types";

export enum Spaces {
    s0 = 's0',
    s1 = 's1',
    s2 = 's2',
    s3 = 's3',
    s4 = 's4',
    s5 = 's5'
}

export enum FontSizes {
    caption = 'caption',
    button = 'button',
    body = 'body',
    title = 'title',
    h5 = 'h5',
    h4 = 'h4',
    h3 = 'h3',
    h2 = 'h2',
    h1 = 'h1',
}

export enum Sizes {
    xSmall = 'xSmall',
    smaller = 'smaller',
    small = 'small',
    medium = 'medium',
    large = 'large',
    xLarge = 'xLarge'
}

export const responsiveSpace = (theme: ITheme): ISpace => {
    return theme.space[theme.screen];
}

export const responsiveFontSize = (theme: ITheme): IFontSizes => {
    return theme.fontSizes[theme.screen];
}

export const responsiveSize = (theme: ITheme): ISize => {
    return theme.size[theme.screen];
}

export const getSpace = (theme: ITheme, space: Spaces): string => {
    return `${responsiveSpace(theme)[space]}${theme.unit}`;
}

export const getFontSize = (theme: ITheme, fontSize: FontSizes): string => {
    return `${responsiveFontSize(theme)[fontSize]}${theme.unit}`;
}

export const getSize = (theme: ITheme, size: Sizes): string => {
    return `${responsiveSize(theme)[size]}${theme.unit}`;
}