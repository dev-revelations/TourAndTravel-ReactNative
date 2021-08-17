import styled from "styled-components";
import { Text as RNText } from 'react-native';
import { ITheme } from "../../theme";
import { IThemeProp } from "../../types";

const defaultTextStyle = (theme: ITheme) => `
    font-family: ${theme.fonts.body};
    font-weight: ${theme.fontWeights.regular};
    font-size: ${theme.fontSizes[theme.screen]?.body};
    color: ${theme.colors.text.primary};
    flex-wrap: wrap;
    margin-top: 0px;
    margin-bottom: 0px;
`;

const caption = (theme: ITheme) => `
    font-size: ${theme.fontSizes[theme.screen]?.caption};
`;

const title = (theme: ITheme) => `
    font-size: ${theme.fontSizes[theme.screen]?.title};
    font-family: ${theme.fonts.heading};
`;

const bold = (theme: ITheme) => `
    font-weight: ${theme.fontWeights.bold};
`;

const contrast = (theme: ITheme) => `
    color: ${theme.colors.text.contrast};
`;

export const Text = styled(RNText) <ITextProps>`
    ${(props) => defaultTextStyle(props.theme)}
    ${(props) => props.bold && bold(props.theme)}
    ${(props) => props.contrast && contrast(props.theme)}
    ${(props) =>
        (props.caption && caption(props.theme))
        || (props.title && title(props.theme))
    }
`;

interface ITextProps extends IThemeProp {
    caption?: boolean,
    title?: boolean,
    bold?: boolean,
    contrast?: boolean
}