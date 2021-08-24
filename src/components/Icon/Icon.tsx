import { FontAwesome5 } from '@expo/vector-icons';
import { FC } from 'react';
import styled from "styled-components";
import { getSize, Sizes } from '../../helpers/theme.helper';
import { ITheme } from '../../types';


const smaller = (theme: ITheme) => `font-size: ${getSize(theme, Sizes.smaller)};`;
const small = (theme: ITheme) => `font-size: ${getSize(theme, Sizes.small)};`;
const larger = (theme: ITheme) => `font-size: ${getSize(theme, Sizes.large)};`;
const withSize = (theme: ITheme, size: number) => `font-size: ${size}${theme.unit};`;

const colorPrimary = (theme: ITheme) => `color: ${theme.colors.ui.primary};`;
const colorSecondary = (theme: ITheme) => `color: ${theme.colors.ui.secondary};`;
const colorContrast = (theme: ITheme) => `color: ${theme.colors.ui.contrast};`;


export const Icon: FC<IconProps> = styled(FontAwesome5) <IconProps> `
    ${({ theme }) => `color: ${theme.colors.text.primary}`};
    ${({ theme }) => `font-size: ${getSize(theme, Sizes.medium)}`};
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

export interface IconProps {
    theme?: ITheme,
    name: string;
    smaller?: boolean;
    small?: boolean;
    larger?: boolean;
    primary?: boolean;
    secondary?: boolean;
    contrast?: boolean;
    size?: number;
}