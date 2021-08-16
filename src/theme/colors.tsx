
const colorPrimary = '#ffa500';
const colorPrimaryContrast = '#ffffff';
const colorPrimaryShade = '#e09100';
const colorPrimaryTint = '#ffae1a';

const colorSecondary = '#333333';
const colorSecondaryContrast = '#ffffff';
const colorSecondaryShade = '#2d2d2d';
const colorSecondaryTint = '#474747';

const colorTertiary = '#666666';
const colorTertiaryContrast = '#ffffff';
const colorTertiaryShade = '#5a5a5a';
const colorTertiaryTint = '#757575';

const colorSuccess = '#2dd36f';
const colorSuccessContrast = '#ffffff';
const colorSuccessShade = '#28ba62';
const colorSuccessTint = '#42d77d';

const colorDanger = '#eb445a';
const colorDangerContrast = '#ffffff';
const colorDangerShade = '#cf3c4f';
const colorDangerTint = '#ed576b';

const colorBackground = '#ffffff';


export const colors: IColors = {
    background: {
        primary: colorBackground,
        secondary: colorBackground,
    },
    ui: {
        primary: colorPrimary,
        secondary: colorSecondary,
        tertiary: colorTertiary,
        error: colorDanger,
        success: colorSuccess

    },
    text: {
        primary: colorSecondary,
        secondary: colorTertiary,
        error: colorDanger,
        success: colorSuccess,
        contrast: colorPrimaryContrast
    };
};


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
}

export interface ITextColorVariants extends IColorVariants {
    contrast: string,
    error: string,
    success: string,
}
