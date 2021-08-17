import { FontAwesome } from '@expo/vector-icons';
import { FC } from 'react';
import styled from "styled-components";
import theme, { ITheme } from '../../theme';
import { IThemeProp } from '../../types';


const smaller = (theme: ITheme) => `font-size: ${theme.size[theme.screen].smaller}${theme.unit};`;
const small = (theme: ITheme) => `font-size: ${theme.size[theme.screen].small}${theme.unit};`;
const larger = (theme: ITheme) => `font-size: ${theme.size[theme.screen].large}${theme.unit};`;
const withSize = (theme: ITheme, size: number) => `font-size: ${size}${theme.unit};`;

const colorPrimary = (theme: ITheme) => `color: ${theme.colors.ui.primary};`;
const colorSecondary = (theme: ITheme) => `color: ${theme.colors.ui.secondary};`;
const colorContrast = (theme: ITheme) => `color: ${theme.colors.ui.contrast};`;


export const Icon: FC<IconProps> = styled(FontAwesome) <IconProps> `
    ${({ theme: ITheme }) => `color: ${theme.colors.text.primary}`};
    ${({ theme: ITheme }) => `font-size: ${theme.size[theme.screen].medium}${theme.unit}`};
    ${(props) =>
        (props.smaller && smaller(props.theme))
        || (props.small && small(props.theme))
        || (props.larger && larger(props.theme))
        || (props.size && withSize(props.theme, props.size))
    }
    ${(props) =>
        (props.primary && colorPrimary(props.theme))
        || (props.secondary && colorSecondary(props.theme))
        || (props.contrast && colorContrast(props.theme))
    }
`;

export interface IconProps extends IThemeProp {
    name: string;
    smaller?: boolean;
    small?: boolean;
    larger?: boolean;
    primary?: boolean;
    secondary?: boolean;
    contrast?: boolean;
    size?: number;
}