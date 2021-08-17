
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