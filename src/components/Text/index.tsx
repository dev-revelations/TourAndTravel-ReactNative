import styled from "styled-components";
import { Animated, Text as RNText } from 'react-native';
import { ITheme, IThemeProp } from "../../types";
import { FontSizes, getFontSize } from "../../helpers/theme.helper";

const defaultTextStyle = (theme: ITheme) => `
    font-family: ${theme.fonts.body400};
    font-weight: ${theme.fontWeights.regular};
    font-size: ${getFontSize(theme, FontSizes.body)};
    color: ${theme.colors.text.primary};
    flex-wrap: wrap;
    margin-top: 0px;
    margin-bottom: 0px;
`;

const caption = (theme: ITheme) => `
    font-size: ${getFontSize(theme, FontSizes.caption)};
`;

const title = (theme: ITheme, bold: boolean | undefined) => `
    font-size: ${getFontSize(theme, FontSizes.title)};
    font-family: ${bold ? theme.fonts.heading700 : theme.fonts.heading400};
`;

const h = (theme: ITheme, bold: boolean | undefined, size: number) => `
    font-size: ${getFontSize(theme, FontSizes[`h${size}` as keyof typeof FontSizes])};
    font-family: ${bold ? theme.fonts.heading700 : theme.fonts.heading400};
`;

const bold = (theme: ITheme) => `
    font-family: ${theme.fonts.body700};
`;

const contrast = (theme: ITheme) => `
    color: ${theme.colors.text.contrast};
`;

const accent = (theme: ITheme) => `
    color: ${theme.colors.text.accent};
`;

const capitalize = (theme: ITheme) => `text-transform: capitalize;`;
const uppercase = (theme: ITheme) => `text-transform: uppercase;`;
const centered = () => `text-align: center;`;

export const Text = styled(Animated.Text) <ITextProps>`
    ${(props) => defaultTextStyle(props.theme)}
    ${(props) => props.bold && bold(props.theme)}
    ${(props) => props.centered && centered()}
    ${(props) =>
        (props.contrast && contrast(props.theme))
        || (props.accent && accent(props.theme))
    }
    ${(props) =>
        (props.caption && caption(props.theme))
        || (props.title && title(props.theme, props.bold))
    }
    ${(props) =>
        (props.capitalize && capitalize(props.theme))
        || (props.uppercase && uppercase(props.theme))
    }

    ${(props) =>
        (props.h1) && h(props.theme, props.bold, 1)
        || (props.h2) && h(props.theme, props.bold, 2)
        || (props.h3) && h(props.theme, props.bold, 3)
        || (props.h4) && h(props.theme, props.bold, 4)
        || (props.h5) && h(props.theme, props.bold, 5)
    }
`;

interface ITextProps extends IThemeProp {
    caption?: boolean,
    title?: boolean,
    bold?: boolean,
    contrast?: boolean,
    accent?: boolean,
    capitalize?: boolean,
    uppercase?: boolean,
    centered?: boolean,
    h1?: boolean,
    h2?: boolean,
    h3?: boolean,
    h4?: boolean,
    h5?: boolean,
}