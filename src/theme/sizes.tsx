import { ISize, ISizeScreen } from "../types";

const defaultSizes: ISize = Object.freeze<ISize>({
    xSmall: 8,
    smaller: 16,
    small: 24,
    medium: 32,
    large: 64,
    xLarge: 128
});

export const size: ISizeScreen = Object.freeze<ISizeScreen>({
    sm: defaultSizes,
    md: defaultSizes,
    lg: defaultSizes,
    xl: defaultSizes,
});