import React, { useState } from 'react';
import { FC } from 'react';
import { TextInputProps } from "react-native";
import { TextInput } from "react-native";
import styled from "styled-components";
import { FontSizes, getFontSize, getSpace, Spaces } from "../../helpers/theme.helper";
import { ITheme } from "../../types";

const focusedStyle = (theme: ITheme) => `border-color: ${theme.colors.ui.primary};`;
const bluredStyle = (theme: ITheme) => `border-color: rgba(0, 0, 0, 0.1);`;

const StyledTextInput = styled(TextInput) <TextBoxProps>`
    font-family: ${({ theme }) => theme.fonts.body400};
    font-size: ${({ theme }) => getFontSize(theme, FontSizes.body)};
    padding: ${({ theme }) => getSpace(theme, Spaces.s2)};
    ${({ focused, theme }) => focused ? focusedStyle(theme) : bluredStyle(theme)}
`;

interface TextBoxProps extends TextInputProps {
    focused?: boolean,
}

export const TextBox: FC<TextInputProps> = (props: TextInputProps) => {
    const [isFocused, setIsFocused] = useState(false);
    return (<StyledTextInput
        focused={isFocused}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        {...props} />);
}
