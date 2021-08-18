import { ISpace, ISpaceScreen } from "../types";

const defaultSpace: ISpace = Object.freeze<ISpace>({
    s0: 0,
    s1: 4,
    s2: 8,
    s3: 16,
    s4: 32,
    s5: 64,
});

export const space: ISpaceScreen = Object.freeze<ISpaceScreen>({
    sm: defaultSpace,
    md: defaultSpace,
    lg: defaultSpace,
    xl: defaultSpace
});