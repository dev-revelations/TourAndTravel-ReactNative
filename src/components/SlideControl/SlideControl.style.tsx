import { View } from "react-native";
import styled from "styled-components";
import { getSpace, Spaces } from "../../helpers/theme.helper";
import { IThemeProp } from "../../types";


export const SlideControlContainer = styled(View)`
    flex-direction: row;
    background-color: rgba(0, 0, 0, 0.7);
    border-radius: 50px;
    padding: ${({ theme }) => getSpace(theme, Spaces.s3)};
`;

export const SlideButton = styled(View) <SlideButtonProps>`
    background-color: ${({ selected, theme }) => selected ? theme.colors.ui.primary
        : theme.colors.ui.contrast};
    border-radius: 100px;
    width: 20px;
    height: 20px;
    margin-left: ${({ theme }) => getSpace(theme, Spaces.s1)}; 
    margin-right: ${({ theme }) => getSpace(theme, Spaces.s1)};
`;

interface SlideButtonProps extends IThemeProp {
    selected?: boolean
}