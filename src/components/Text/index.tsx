import styled from "styled-components";
import { Text as RNText } from 'react-native';
import { ITheme } from "../../theme";
import { IThemeProp } from "../../types";

const defaultTextStyle = (theme: ITheme) => `
    font-family: ${theme.fonts.body};
    font-weight: ${theme.fontWeights.regular};
    font-size: ${theme.fontSizes[theme.screen]?.body}${theme.unit};
    color: ${theme.colors.text.primary};
    flex-wrap: wrap;
    margin-top: 0px;
    margin-bottom: 0px;
`;

const caption = (theme: ITheme) => `
    font-size: ${theme.fontSizes[theme.screen]?.caption}${theme.unit};
`;

const title = (theme: ITheme) => `
    font-size: ${theme.fontSizes[theme.screen]?.title}${theme.unit};
    font-family: ${theme.fonts.heading};
`;

const bold = (theme: ITheme) => `
    font-weight: ${theme.fontWeights.bold};
`;

const contrast = (theme: ITheme) => `
    color: ${theme.colors.text.contrast};
`;

const accent = (theme: ITheme) => `
    color: ${theme.colors.text.accent};
`;

const capitalize = (theme: ITheme) => `text-transform: capitalize;`;
const uppercase = (theme: ITheme) => `text-transform: uppercase;`;

export const Text = styled(RNText) <ITextProps>`
    ${(props) => defaultTextStyle(props.theme)}
    ${(props) => props.bold && bold(props.theme)}
    ${(props) =>
        (props.contrast && contrast(props.theme))
        || (props.accent && accent(props.theme))
    }
    ${(props) =>
        (props.caption && caption(props.theme))
        || (props.title && title(props.theme))
    }
    ${(props) =>
        (props.capitalize && capitalize(props.theme))
        || (props.uppercase && uppercase(props.theme))
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
}